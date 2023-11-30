import { useState } from "react";
import Navbar from "../Navbar";
import html2canvas from 'html2canvas';
import Logo from "../../assets/Logo.png"
import '../../styles/banner.css'
import bannerAvatar from '../../assets/bannerAvatar.svg'
import uploadArrow from '../../assets/uploadArrow.svg'
import arrow from '../../assets/bannerArrow.svg'

const Banner = () => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [name, setName] = useState("");
    const [generating, setGenerating] = useState(false);
    

    const handleNameChange = (event) => {
        setName(event.target.value);
    };   

    const handleSelectImage = () => {
        document.querySelector('input[type="file"]').click();
    }

    // const handleImageUpload = (e) => {
    //     const file = e.target.files[0];
    //     const reader = new FileReader();
    //     getAspectRatio(file)
    
    //     reader.onload = () => {
    //         setUploadedImage(reader.result);
    //     };
    
    //     if (file) {
    //         reader.readAsDataURL(file);
    //     }
    // };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        
        // Function to get the aspect ratio of an image
        const getAspectRatio = (image) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = URL.createObjectURL(image);
                
                img.onload = () => {
                    const width = img.width;
                    const height = img.height;
                    let aspectRatio;
                    if (width < height) {
                        aspectRatio = width / height;
                    } else {
                        aspectRatio = height / width;
                    }
                    console.log(width, height, aspectRatio)
                    resolve(aspectRatio);
                };
    
                img.onerror = (error) => {
                    reject(error);
                };
            });
        };
    
        if (file) {
            // Check the aspect ratio
            getAspectRatio(file)
                .then((aspectRatio) => {
                    // Define a threshold for an almost square image (e.g., 0.95)
                    const threshold = 0.95;
    
                    if (aspectRatio > threshold) {
                        // The image is a square or almost a square
                        const reader = new FileReader();
                        
                        reader.onload = () => {
                            setUploadedImage(reader.result);
                        };
                        
                        reader.readAsDataURL(file);
                    } else {
                        // Display an error or take appropriate action for non-square images
                        console.log('Please upload a square or almost square image.');
                    }
                })
                .catch((error) => {
                    // Handle errors during aspect ratio calculation
                    console.error('Error getting aspect ratio:', error);
                });
        }
    };
    
    
    const handleDownload = (e) => {
        e.preventDefault();
        setGenerating(true)
        const container = document.getElementById('banner');

        let name = document.getElementById('nameField');
        // console.log(name);
        // console.log(name.value)
        if (name.value === "")
        {
            alert("Please add your name to the name field");
            name.style.outline = "red";
            setGenerating(false);
            return;
        }
    
        html2canvas(container, {scale: 1}).then((canvas) => {
            container.style.display = 'block';
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            link.download = 'devfest.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });

        setGenerating(false)
    };

    return (
        <div >
            <div className="bg-white">
                <div className="max-w-[980px] mx-auto">
            <Navbar id="banner-nav"/>
            </div>
            </div>
            <hr />

            <div style={{
            maxWidth: '980px',
            margin: '0 auto',
            padding: '0px 15px'
        }} className="get-banner">
               <span id="bannerText">
                 <h1 style={{ fontWeight: 'bold', lineHeight: '110%', marginBottom: '10px' }}>I'll be attending!</h1>
                 <img src={bannerAvatar} alt="" srcset="" id="bannerAvatar"/>
                </span>
                <p>Generate and share your unique Devfest </p> 
                <p>Lagos Student Edition DP</p>

                <div className="banner-container">
                    
                    <form onSubmit={handleDownload} className="form">
                        {/* <label htmlFor="name">Name</label> */}
                        <div style={{
                                // padding: "10px",
                                // background: "black",
                                display:"flex",
                                paddingTop: "5px",
                                paddingLeft: "8px",
                                paddingRight: "8px",
                                paddingBottom: "8px",
                                // padding: "10px",
                                borderRadius:"20px",
                                border: "solid 1px #ccc",
                                height: "43px",
                                marginBottom: "20px"
                            }}>
                            <input
                                type="text"
                                name="name"
                                id="nameField"
                                value={name}
                                onChange={handleNameChange}
                                placeholder="Enter first name or nickname"
                            />
                        </div>
                        
                        <label htmlFor="date">Choose Display picture</label>
                        <input type="file" onChange={handleImageUpload} accept="image/*" />
                        
                        {uploadedImage ? (
                            <img
                                src={uploadedImage}
                                alt="Uploaded"
                                style={{ width: '100%', height: '100%', borderRadius:'5px', marginBottom: '30px' }}
                            />
                        ) : (
                        <div onClick={handleSelectImage} className="choose-image">
                            <div id="upload-area">
                                <img src={uploadArrow} style={{marginBottom:"40px"}} alt="" />
                                <p style={{fontStyle: "italic", color:"#777"}}>
                                    Drag and drop to upload or
                                </p>
                                <p style={{color: "#34A853"}}>
                                    <u>browse</u>
                                </p>
                            </div>
                        </div>
                        )}
                        <p style={{marginTop:"10px", fontStyle: "italic"}}>Please upload only a square image</p>
                        
                        <div>
                            <button id="bannerBtn">{generating ? "Downloading" : "Generate your dp"}</button>
                            <span>
                                <img src={arrow} alt="" />
                            </span>
                        </div>
                    </form>
                </div>

            <div className="preview">
            <div id="banner" className="banner">
                <img src={Logo} alt="" />
                <div className="dp-statement-row">
                    <div className="img">
                        <img src={uploadedImage} alt="" />
                    </div>
                    <div className="statement">
                        <p>I will be attending</p>
                    </div>
                    
                </div>
                <div className="name-datetime-row">
                    <div className="name">
                        {name === "" ? "Your Name" : name}
                    </div>
                    <div className="datetime">
                        <div className="time">
                            9 am
                        </div>
                        <div className="date">
                            9th December, 2023
                        </div>
                    </div>
                </div>
                <p style={{color: '#fff', marginBottom: '10px'}}>Get your Tickets here:</p>
                <div className="link-address">
                    <div className="link">
                        https://dscunilag.dev/df_lagos
                    </div>
                    <div className="address">
                        Multipurpose Hall, University of Lagos
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Banner;
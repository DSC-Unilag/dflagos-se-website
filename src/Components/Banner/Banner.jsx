import { useState } from "react";
import Navbar from "../Navbar";
import html2canvas from 'html2canvas';
import Logo from "../../assets/Logo.png"
import '../../styles/banner.css'
import bannerAvatar from '../../assets/bannerAvatar.svg'
import uploadArrow from '../../assets/uploadArrow.svg'
import arrow from '../../assets/bannerArrow.svg'
import angleRight from '../../assets/angle_right.svg'

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
                            <button id="bannerBtn" disabled={uploadedImage ? "false" : "true"}>{generating ? "Downloading" : "Generate your dp"}</button>
                            <span>
                                <img src={arrow} alt="" />
                            </span>
                        </div>
                    </form>
                </div>

            <div className="preview">
            <div id="banner" className="banner">
                <img className="logo" src={Logo} alt="" />
                <div className="dp-statement-row">
                    <div className="img">
                        <img src={uploadedImage} alt="" />
                    </div>
                    <div className="statement">
                        <p>I will be attending</p>
                        <svg fill="#ffae00" width="189px" height="189px" viewBox="0 0 512.00 512.00" xmlns="http://www.w3.org/2000/svg" stroke="#ffae00" stroke-width="0.00512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.024"></g><g id="SVGRepo_iconCarrier"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></g></svg>
                        <svg fill="#ffae00" width="189px" height="189px" viewBox="0 0 512.00 512.00" xmlns="http://www.w3.org/2000/svg" stroke="#ffae00" stroke-width="0.00512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.024"></g><g id="SVGRepo_iconCarrier"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></g></svg>
                        <svg fill="#ffae00" width="189px" height="189px" viewBox="0 0 512.00 512.00" xmlns="http://www.w3.org/2000/svg" stroke="#ffae00" stroke-width="0.00512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.024"></g><g id="SVGRepo_iconCarrier"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></g></svg>
                        <svg fill="#ffae00" width="189px" height="189px" viewBox="0 0 512.00 512.00" xmlns="http://www.w3.org/2000/svg" stroke="#ffae00" stroke-width="0.00512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.024"></g><g id="SVGRepo_iconCarrier"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></g></svg>
                        <svg fill="#ffae00" width="189px" height="189px" viewBox="0 0 512.00 512.00" xmlns="http://www.w3.org/2000/svg" stroke="#ffae00" stroke-width="0.00512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.024"></g><g id="SVGRepo_iconCarrier"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></g></svg>
                        <svg fill="#ffae00" width="189px" height="189px" viewBox="0 0 512.00 512.00" xmlns="http://www.w3.org/2000/svg" stroke="#ffae00" stroke-width="0.00512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.024"></g><g id="SVGRepo_iconCarrier"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></g></svg>

                        <svg fill="#ffae00" width="189px" height="189px" viewBox="0 0 512.00 512.00" xmlns="http://www.w3.org/2000/svg" stroke="#ffae00" stroke-width="0.00512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.024"></g><g id="SVGRepo_iconCarrier"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></g></svg>
                    </div>
                    
                </div>
                <div className="name-datetime-row">
                    <div className="name">
                        {name === "" ? "Your Name" : name}
                    </div>
                    <div className="datetime">
                        <div className="time">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEdElEQVR4nO2ay29VVRTGD4hAFQZtSUPCRINGKEWqiTIhoNEJM4zYSfkHSCCEEOOIoAPjo2B1YmAGTAgoKq8w0JmJREF5lTeYGCMQqRhRBHoNP7Pu/Q7dOTn33r3P2aWXhC85ye1+rL2+c9Zae+21myQP8QABmAz0AbuAc8AdYAS4BOwEVgBtEdZpA/ol8yJQAW4BZ4EdwBumS1HhrwM/0xyfARNKkJgA7PZY5yLwWojgicCAI+A4sBroBqYCvcA/6vs60hd5DPhGMv8GntVXsjXXACcdfT4wHX2EfqIJZkYr3UnAHOByTBJ1yPwGPOP0PQKskk6Gj5oJW66B5gevZPoakgCmAC8D7wBfAqeB65J1R79Pqc/GvGRzfMkYgFflP4ZlSQPH/lWD1vqSAJ4HtgB/Eg6bsxl4LoDMOvX9AjyaR6Tfcaqm5iRfOZhR7Cdgo76s2Xm7LaanXW3Wtwk46sy7Cxywfk8zS4NQXx4RC7GGNxuR0DMI/Kf2G8CHNjYJhOQPSIahIpJTM2QuZ8i8pfYdeUJtbzAsakDiaeCY2kb09ttDCeSs3WEOzKj929d6qh4ZYLHazucJu63OmXVIvAhcU5s58oKyBHJ06AXOaI3fgRfyyACz9PfNRkSW1iFh8R1FnccDlPseOBQwfhrwlWO2eWRMR8O/jUzrZo45pV9iqzmbr1KSW0XgnEnANufLzM6QSXW8kDfZ8hxyHPuY8yWCSBQl4pDZ40TDbACo6+z9OSF20PEJb3OKQcQxM0scDRvV5pLpT7LQgM8z+0RFT2HHLkPEYJulo8d8tbUpWW2eIjmbXfVNjBeRjGXsS0KgtMPwV9l9IhKRDkUwywB6QyZa7mQYKKNALCIGbb6GTxMfKItNE8DgtGMMiXRL1B9ep0Wl4tWQV3bxmEQMwAmJW5w0g84KpZ18jIgMStwGn8FperC8BYn0SdwXPoNt8yON2S1GZIHEDfkMHtbgjhYkMkPirvkMTg/4XnUk4Fs8EInIFIm7PV5EvhsPIsMa3Jm0GAg0rajOHhMEOrudO6KF35hgNPzu9hn8dswNMSYY3RDX+wy2CqDhaNJiYLQGvMg3MlhiFiVpjAVgXurouRXGOpOsjBkljY8FaoU7/zTeiQ53dX0wY0w19NOn0zlYhUVTYL9XCf8+APhYuuwpapMjOvT7Hy8jg9qxuyJd5hYVYsVpVMacFl3L5utP192l4f0ygiyC/ShBdk6ZFFXT5gW6vVr7cOHLUEfgk8BVCdx2P8hQI7Fda14BnoglOC0aVx1uLM2MmjmlX8KwNJbgrsytKipj3rsui+zY5zJr2dpdMUkMAQsdn6ko9+mMtE9YiE0veo7oKmOoNJkcElVBqoq/5yx6Q8Wz7oIhfpNz91IB3k1ve6VDcTIZErkCgJ6MLaO606DS7V6VOifr6VRbn8ZkzdWi4rwiujQicth3oqUMys3Sk2UIhjW3J+DF/hBC5JDstCswZNoRYL3e7pDzDwMj+n1SBzcbsyQklFMjcyTkGu8hknHE/6UbcaPbrH1YAAAAAElFTkSuQmCC" />
                            <div className="time-text">9 am</div>
                        </div>
                        <div className="date">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAaElEQVR4nO3UQQqAMAxE0TmY7q3XFi9iD/JFoQuhGm0rguStpxmaRaSvADMwtcrlHu7UKJfCIxApF4FwVVAzPFnM79bS/wtUCC+w+IpMviLTk1PR2eOOgP5OwevnOmyBmuHAcFrglLEC0J/HIjy8EewAAAAASUVORK5CYII=" />
                            <div className="date-text">
                                9th December, 2023
                            </div>
                            
                        </div>
                    </div>
                </div>
                <p style={{color: '#fff', marginBottom: '10px'}}>Get your Tickets here:</p>
                <div className="link-address">
                    <div className="link">
                        https://dscunilag.dev/df_lagos
                    </div>
                    <div className="address">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACq0lEQVR4nO2az0tUURTHPyhkkFObyKSSiMDIiVq0sZ3V3xD5D4STktSyXSbVPsKyiNxEidHfEFKZi6C0Re1q1+8cLcrSFw/OwHB5vnuvc+57b8AvHBhmzjt3Pu/ec+bc+wY2lKgS0A+MA7PAJ2BZLH79Qj47Lb6FUycwBvwEIkeLfW8D+ymA2oARYMkDwLR4tq5JrFy0HXjSAIBpz4CdWUOUgQ+KEDV7L7EzUUcgiHqYeIyg2ixLIApsT0PnzEgGEJHYlZAl1rU6vQaGgR5gi1iPvDfnGOMPsC8EyJjD4L+BCtCSEqcVGJQvaot3Sxui5PBjF0P0ecQ87gCzBLRrgvQ73L2BdcQdcoh7ShNk3CEnzOW0B5gCqmJ9ayyzeUvsm5ogs5bBhhMgvho+azWJ5y2xZzRBPlsGO2j4TyX4XBQYc2bKltgfNUFsSWne7WqK74LhW3IoImpaVAT54QmyqIcB7zyX1uMU34eeS+utJsgDz2TvBr4l+H0Bdnsm+31NkEHLYHNSSs3KNSk5sSAzYULE17yxxK5ognQBq5YBY1hfnbPEXE2Ab1gzlkHjynbCI95J2eba2nl1DVgGrcEMJSyzerXKTNggIuCMPgZsdSjDNZuXJC5L09cury845EQkVg15ZHTD8Uto2HUCqstxSTRqy8BeAmsiA5C7ZKADwEpAiJWETiGYHgUEmSRDHQ40K/+AQ2SsewFA7pCDdnmevtvsl/RnueiqIsgoOaokW9FGIeKt9DZy1lkFENVWfb1qcThlSbOXliYzUx1z2K8kWXxNLwXTRFFbEV91yAmJK8R3YAcFVcUDJMimSTPxpx0gnlsePRRC3XI6mLYdzqy7DfmI7hJNpE3yqMGEeCWfNZWOGNviv8BRmlSjdSCXaWK1SRWbzvO/JhsiB/0HYmVC9BK+O3EAAAAASUVORK5CYII=" />
                        <div className="address-text">
                            Multipurpose Hall, University of Lagos
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Banner;
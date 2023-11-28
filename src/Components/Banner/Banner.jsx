import { useState } from "react";
import Navbar from "../Navbar";
import html2canvas from 'html2canvas';
import Logo from "../../assets/Logo.png"


const Banner = () => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [name, setName] = useState("");
    const [generating, setGenerating] = useState(false);
    const [generated, setGenerated] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };   

    const handleSelectImage = () => {
        document.querySelector('input[type="file"]').click();
    }

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onload = () => {
            setUploadedImage(reader.result);
        };
    
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    
    const handleDownload = (e) => {
        e.preventDefault();
        setGenerating(true)
        const container = document.getElementById('banner');
    
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
        setGenerated(true)
    };

    return (
        <div style={{maxWidth: '980px', margin: '0 auto'}}>
            <Navbar/>

            


            <div className="font-sans xl:max-w-[1280px] w-full get-banner">
                <h1>Generate custom banner</h1>
                <p>Let people know you would be attending the event by generating a custom banner for yourself</p>

                <div className="banner-container">
                    
                    <form onSubmit={handleDownload} className="form">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleNameChange}
                        />
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
                            <p>Click to choose an image</p>
                        </div>
                        )}

                        <button>{generating ? "Downloading" : "Download"}</button>
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
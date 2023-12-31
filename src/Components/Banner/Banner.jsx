import { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import html2canvas from "html2canvas";
import Logo from "../../assets/Logo.png";
import "../../styles/banner.css";
import bannerAvatar from "../../assets/bannerAvatar.svg";
import uploadArrow from "../../assets/uploadArrow.svg";
import arrow from "../../assets/bannerArrow.svg";
import angleRight from "../../assets/angle_right.svg";
import toast from "react-hot-toast";
import Footer from "./../Footer";
import { canvasPreview, toBlob } from "../../../utils/crop";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

const Banner = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const controls = useAnimation();
  const [uploadedImageSrc, setUploadedImageSrc] = useState("");
  const [crop, setCrop] = useState({
    aspect: 1,
    unit: "px", // Can be 'px' or '%'
    x: 25,
    y: 25,
    width: 200,
    height: 200,
  });
  const [name, setName] = useState("");
  const [croppedImage, setCroppedImage] = useState("");
  const [generating, setGenerating] = useState(false);
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 100 });
    }
  }, [inView]);

  useEffect(() => {
    if (
      crop.width &&
      crop.height &&
      imgRef.current &&
      previewCanvasRef.current
    ) {
      canvasPreview(imgRef.current, previewCanvasRef.current, crop);
    }
  }, [crop]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSelectImage = () => {
    document.querySelector('input[type="file"]').click();
  };

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      // setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setUploadedImageSrc(reader.result?.toString() || "")
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const cropImage = async () => {
    const image = imgRef.current;
    const previewCanvas = previewCanvasRef.current;
    if (!image || !previewCanvas || !crop) {
      throw new Error("Crop canvas does not exist");
    }
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    const offscreen = new OffscreenCanvas(
      crop.width * scaleX,
      crop.height * scaleY
    );
    const ctx = previewCanvas.getContext("2d");
    if (!ctx) {
      throw new Error("No 2d context");
    }

    ctx.drawImage(
      previewCanvas,
      0,
      0,
      previewCanvas.width,
      previewCanvas.height,
      0,
      0,
      offscreen.width,
      offscreen.height
    );

    // Converting to base64
    const blob = await toBlob(previewCanvas);

    // const blob = await offscreen.convertToBlob();
    setCroppedImage(await blobToBase64(blob));
  };

  const handleDownload = async (e) => {
    e.preventDefault();
    setGenerating(true);
    const container = document.getElementById("banner");
    console.log(croppedImage);
    const img = container.querySelector(".croppedImage");
    img.src = croppedImage;

    if (name === "" && croppedImage === null) {
      toast.error("Please add your name and image");
      setGenerating(false);
      return;
    }

    await cropImage();

    setTimeout(() => {
      html2canvas(container, { scale: 1 }).then((canvas) => {
        container.style.display = "block";
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = "devfest.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });

      setGenerating(false);
    }, 1000);
  };

  const handleCropUpdate = (newCrop, newPercentCrop) => {
    setCrop(newCrop);
  };

  return (
    <div>
      <div className="bg-white">
        <div className="max-w-[980px] mx-auto">
          <Navbar id="banner-nav" />
        </div>
      </div>
      <hr />

      <div
        style={{
          maxWidth: "980px",
          margin: "0 auto",
          padding: "40px 15px",
        }}
        className="get-banner"
      >
        <div className="block pt-8 mb-4 md:flex md:mb-2">
          <h1
            style={{
              fontWeight: "bold",
              lineHeight: "110%",
              marginBottom: "10px",
            }}
            className="text-center tracking-tighter text-[50px] md:text-[72px]"
          >
            I'll be attending!
          </h1>
          <img
            src={bannerAvatar}
            alt=""
            srcSet=""
            className="mx-auto block md:w-[85px] md:h-[85px] md:ml-4"
          />
        </div>
        <p className="italic text-center text-[#666] md:text-[24px]">
          <span className="block">Generate and share your unique Devfest</span>
          <span className="block">Lagos Student Edition DP</span>
        </p>

        <div className="w-full max-w-[640px] mx-auto">
          <form onSubmit={handleDownload} className="mt-8">
            <div className="flex border border-[#ccc] h-[75px] rounded-[64px] justify-center items-center p-4">
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter first name or nickname"
                className="outline-none rounded-[48px] px-4 py-3 bg-[#f5f9fe] w-full"
              />
            </div>

            <input type="file" onChange={handleImageUpload} accept="image/*" />

            {uploadedImageSrc ? (
              <div className="max-w-[980px] w-[300px] sm:w-[450px] md:w-[600px] mx-auto flex flex-col mt-8">
                <ReactCrop aspect={1} crop={crop} onChange={handleCropUpdate}>
                  <img
                    className="w-[300px] sm:w-[450px] md:w-[600px] mx-auto"
                    ref={imgRef}
                    src={uploadedImageSrc}
                  />
                </ReactCrop>
                {/* <img src={} /> */}
              </div>
            ) : (
              <div onClick={handleSelectImage} className="choose-image mt-8">
                <div id="upload-area">
                  <img
                    src={uploadArrow}
                    style={{ marginBottom: "40px" }}
                    alt=""
                  />
                  <p style={{ fontStyle: "italic", color: "#777" }}>
                    Drag and drop to upload or
                  </p>
                  <p style={{ color: "#34A853" }}>
                    <u>browse</u>
                  </p>
                </div>
              </div>
            )}

            <div className="text-center ">
              <button id="bannerBtn" className="w-full md:h-[66px]">
                {generating ? "Downloading" : "Generate your dp"}

                <img src={arrow} className="md:ml-2" alt="" />
              </button>
            </div>
          </form>
        </div>

        {crop && (
          <canvas
            ref={previewCanvasRef}
            style={{
              border: "1px solid black",
              objectFit: "contain",
              width: 0,
              height: 0,
              opacity: 0,
            }}
          />
        )}

        <div className="preview">
          <div id="banner" className="banner">
            <img className="logo" src={Logo} alt="" />
            <div className="dp-statement-row">
              <div className="img">
                <img className="croppedImage" src={croppedImage} alt="" />
              </div>
              <div className="statement">
                <p>I will be attending</p>
                <div className="arrows">
                  <img src={angleRight} alt="" />
                  <img src={angleRight} alt="" />
                  <img src={angleRight} alt="" />
                  <img src={angleRight} alt="" />
                  <img src={angleRight} alt="" />
                  <img src={angleRight} alt="" />
                </div>
              </div>
            </div>
            <div className="name-datetime-row">
              <div className="name">{name === "" ? "Your Name" : name}</div>
              <div className="datetime">
                <div className="time">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEdElEQVR4nO2ay29VVRTGD4hAFQZtSUPCRINGKEWqiTIhoNEJM4zYSfkHSCCEEOOIoAPjo2B1YmAGTAgoKq8w0JmJREF5lTeYGCMQqRhRBHoNP7Pu/Q7dOTn33r3P2aWXhC85ye1+rL2+c9Zae+21myQP8QABmAz0AbuAc8AdYAS4BOwEVgBtEdZpA/ol8yJQAW4BZ4EdwBumS1HhrwM/0xyfARNKkJgA7PZY5yLwWojgicCAI+A4sBroBqYCvcA/6vs60hd5DPhGMv8GntVXsjXXACcdfT4wHX2EfqIJZkYr3UnAHOByTBJ1yPwGPOP0PQKskk6Gj5oJW66B5gevZPoakgCmAC8D7wBfAqeB65J1R79Pqc/GvGRzfMkYgFflP4ZlSQPH/lWD1vqSAJ4HtgB/Eg6bsxl4LoDMOvX9AjyaR6Tfcaqm5iRfOZhR7Cdgo76s2Xm7LaanXW3Wtwk46sy7Cxywfk8zS4NQXx4RC7GGNxuR0DMI/Kf2G8CHNjYJhOQPSIahIpJTM2QuZ8i8pfYdeUJtbzAsakDiaeCY2kb09ttDCeSs3WEOzKj929d6qh4ZYLHazucJu63OmXVIvAhcU5s58oKyBHJ06AXOaI3fgRfyyACz9PfNRkSW1iFh8R1FnccDlPseOBQwfhrwlWO2eWRMR8O/jUzrZo45pV9iqzmbr1KSW0XgnEnANufLzM6QSXW8kDfZ8hxyHPuY8yWCSBQl4pDZ40TDbACo6+z9OSF20PEJb3OKQcQxM0scDRvV5pLpT7LQgM8z+0RFT2HHLkPEYJulo8d8tbUpWW2eIjmbXfVNjBeRjGXsS0KgtMPwV9l9IhKRDkUwywB6QyZa7mQYKKNALCIGbb6GTxMfKItNE8DgtGMMiXRL1B9ep0Wl4tWQV3bxmEQMwAmJW5w0g84KpZ18jIgMStwGn8FperC8BYn0SdwXPoNt8yON2S1GZIHEDfkMHtbgjhYkMkPirvkMTg/4XnUk4Fs8EInIFIm7PV5EvhsPIsMa3Jm0GAg0rajOHhMEOrudO6KF35hgNPzu9hn8dswNMSYY3RDX+wy2CqDhaNJiYLQGvMg3MlhiFiVpjAVgXurouRXGOpOsjBkljY8FaoU7/zTeiQ53dX0wY0w19NOn0zlYhUVTYL9XCf8+APhYuuwpapMjOvT7Hy8jg9qxuyJd5hYVYsVpVMacFl3L5utP192l4f0ygiyC/ShBdk6ZFFXT5gW6vVr7cOHLUEfgk8BVCdx2P8hQI7Fda14BnoglOC0aVx1uLM2MmjmlX8KwNJbgrsytKipj3rsui+zY5zJr2dpdMUkMAQsdn6ko9+mMtE9YiE0veo7oKmOoNJkcElVBqoq/5yx6Q8Wz7oIhfpNz91IB3k1ve6VDcTIZErkCgJ6MLaO606DS7V6VOifr6VRbn8ZkzdWi4rwiujQicth3oqUMys3Sk2UIhjW3J+DF/hBC5JDstCswZNoRYL3e7pDzDwMj+n1SBzcbsyQklFMjcyTkGu8hknHE/6UbcaPbrH1YAAAAAElFTkSuQmCC" />
                  <div className="time-text">9 am</div>
                </div>
                <div className="date">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAaElEQVR4nO3UQQqAMAxE0TmY7q3XFi9iD/JFoQuhGm0rguStpxmaRaSvADMwtcrlHu7UKJfCIxApF4FwVVAzPFnM79bS/wtUCC+w+IpMviLTk1PR2eOOgP5OwevnOmyBmuHAcFrglLEC0J/HIjy8EewAAAAASUVORK5CYII=" />
                  <div className="date-text">9th December, 2023</div>
                </div>
              </div>
            </div>
            <p style={{ color: "#fff", marginBottom: "10px" }}>
              Get your Tickets here:
            </p>
            <div className="link-address">
              <div className="link">https://dscunilag.dev/df_lagos</div>
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
      <div className="bg-[#f5f9fe]">
        <Footer />
      </div>
    </div>
  );
};

export default Banner;

import logo from "../assets/googleDevfest.svg";
import X from "../assets/Group.svg";
import Email from "../assets/Email.svg";
import IG from "../assets/InstagramLogo.svg";
import YT from "../assets/mdi_youtube.svg";


const Footer = () => {
    return (
        <footer className="italic">
            <div className="row font-sans italic">
                <div className="column">
                    <img src={logo} alt="" />
                </div>
                <div className="column">
                    <a href="j">Schedule/Workshops</a>
                    <a href="j">RSVP</a>
                </div>
                <div className="column">
                    <a href="#">Schedule/Workshops</a>
                    <a href="j">RSVP</a>
                    <a href="j">Schedule/Workshops</a>
                    <a href="j">Schedule/Workshops</a>
                </div>
                <div className="column">
                    <a href="j">Schedule/Workshops</a>
                    <a href="j">RSVP</a>
                    <a href="j">Schedule/Workshops</a>
                    <a href="j">Schedule/Workshops</a>
                    <div className="socials">
                        <a href=""><img src={X} alt="" /></a>
                        <a href=""><img src={IG} alt="" /></a>
                        <a href=""><img src={Email} alt="" /></a>
                        <a href=""><img src={YT} alt="" /></a>
                    </div>
                </div>
            </div>
            <p className="copyright">© 2023 Devfest Lagos. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer;

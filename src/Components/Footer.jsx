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
                    <a href="/Workshops">Schedule/Workshops</a>
                    <a href="/Workshops">RSVP</a>
                </div>
                <div className="column">
                    <a href="#volunteer">Apply as a speaker</a>
                    <a href="#volunteer">Apply as a sponsor</a>
                </div>
                <div className="column">
                <a href="#volunteer">GDSC Unilag</a>
                <a href="#volunteer">GDSC Lasu</a>
                <a href="#volunteer">GDSC Caleb </a>
                <a href="#volunteer">GDSC Babcock</a>
                </div>
            </div>
            <p className="copyright">© 2023 DevFest Lagos Student Edition 2023. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer;

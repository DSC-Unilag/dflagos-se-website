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
                    <a href="j">Join the Community</a>
                    <a href="j">Community guidelines</a>
                </div>
                <div className="column">
                    <a href="j">Privacy Policy</a>
                    <a href="j">Contact</a>
                    <a href="j">Follow us on</a>
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

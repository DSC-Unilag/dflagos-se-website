import logo from "../assets/googleDevfest.svg";
import X from "../assets/Group.svg";
import Email from "../assets/Email.svg";
import IG from "../assets/InstagramLogo.svg";
import YT from "../assets/mdi_youtube.svg";

const Footer = () => {
  return (
    <footer className="">
      <div className="row">
        <div className="column">
          <img src={logo} alt="" />
        </div>
        <div className="column">
          <a href="/Workshops">Schedule/Workshops</a>
          <a href="/Workshops">RSVP</a>
          <a href="https://dscunilag.dev/dflagos-se-cfv">
            Apply as a volunteer
          </a>
        </div>
        <div className="column">
          <a href="https://gdsc.community.dev/university-of-lagos/">
            GDSC Unilag
          </a>
          <a href="https://gdsc.community.dev/lagos-state-university/">
            GDSC Lasu
          </a>
          <a href="https://gdsc.community.dev/caleb-university/">GDSC Caleb </a>
          <a href="https://gdsc.community.dev/babcock-university/">
            GDSC Babcock
          </a>
          <a href="https://gdsc.community.dev/yaba-college-of-technology/">
            GDSC Yabatech
          </a>
        </div>
      </div>
      <p className="copyright">
        © 2023 DevFest Lagos Student Edition 2023. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

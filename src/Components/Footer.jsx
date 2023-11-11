import logo from "../assets/googleDevfest.svg";

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="column">
                    <img src={logo} alt="" />
                </div>
                <div className="column">
                    <a href="j">Schedule/Workshops</a>
                    <a href="j">RSVP</a>
                </div>
                <div className="column">
                    <a href="j">Schedule/Workshops</a>
                    <a href="j">RSVP</a>
                    <a href="j">Schedule/Workshops</a>
                    <a href="j">Schedule/Workshops</a>
                </div>
                <div className="column">
                    <a href="j">Schedule/Workshops</a>
                    <a href="j">RSVP</a>
                    <a href="j">Schedule/Workshops</a>
                    <a href="j">Schedule/Workshops</a>
                </div>
            </div>
            <p className="copyright">c 2023 Devfest Lagos. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer;
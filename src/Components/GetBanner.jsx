import { Link } from "react-router-dom";

const GetBanner = () => {
    return (
        <div className="generate-banner">
            <h1 sty>Generate Custom Banner</h1>
            <p>Let people know you would be attending the event by generating a custom banner for yourself</p>
            <Link to='/banner'>Generate Banner</Link>
        </div>
    );
}

export default GetBanner;
import { Link } from "react-router-dom";

const GetBanner = () => {
    return (
        <div className="get-banner">
            <h1>ReactJS</h1>
            <p>Library for building user interfaces</p>
            <Link to='/banner'>Generate Banner</Link>
        </div>
    );
}

export default GetBanner;
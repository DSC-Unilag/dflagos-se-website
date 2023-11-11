import '../App.css';
import PlaceHolder from "../assets/ph1.png";
import PlaceHolder2 from "../assets/ph2.png";
import PlaceHolder3 from "../assets/ph3.png";


const Speakers = () => {
    return (
        <div className="speakers">
            <h1>Featured Speakers</h1>
            <div className="container">
                <div className="frame">
                    <img src={PlaceHolder} alt="" />
                    <div className='meta'>
                        Temilola Peter - Product Designer, Google.
                    </div>
                </div>
                <div className="frame">
                    <img src={PlaceHolder2} alt="" />
                    <div className='meta'>
                        Temilola Peter - Product Designer, Google.
                    </div>
                </div>
                <div className="frame">
                    <img src={PlaceHolder3} alt="" />
                    <div className='meta'>
                        Temilola Peter - Product Designer, Google.
                    </div>
                </div>
                <div className="frame">
                    <img src={PlaceHolder2} alt="" />
                    <div className='meta'>
                        Temilola Peter - Product Designer, Google.
                    </div>
                </div>
                <div className="frame">
                    <img src={PlaceHolder} alt="" />
                    <div className='meta'>
                        Temilola Peter - Product Designer, Google.
                    </div>
                </div>
                <div className="frame">
                    <img src={PlaceHolder3} alt="" />
                    <div className='meta'>
                        Temilola Peter - Product Designer, Google.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Speakers;
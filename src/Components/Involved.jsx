import ArrowUp from "../assets/ArrowUp.svg";
import asset1 from "../assets/get_involved1.png";
import asset2 from "../assets/get_involved2.png";


const Involved = () => {
     return (
        <div id="volunteer" className="involved font-sans italic">
                <h1>Get involved</h1>
                <p className="header-text font-sans italic">
                    DevFest 2023 is open to individuals who are excited, to not just be a part of the event but also want to contribute to the success of the event. Want to be a key player in making DevFest SE a big hit? Feel free to apply here
                </p>
                <div className="flex flex-col xs:flex-row gap-[48px]">
                    <div className="frame">
                        <div className="header">
                            <p>RSVP for a session</p>
                            <img src={ArrowUp} alt="" />
                        </div>
                        <p>You could be a novice or a professional, our workshop sessions are tailored to your skill level</p>
                        <div className="img-container">
                            <img src={asset1} alt="" />
                        </div>
                    </div>
                    <div className="frame">
                        <div className="header">
                            <p>Apply as a volunteer</p>
                            <img src={ArrowUp} alt="" />
                        </div>
                        <p>Apply as a speaker for DevFest 2023 Student Edition</p>
                        <div className="img-container">
                            <img src={asset2} alt="" />
                        </div>
                    </div>
            </div>
        </div>
     )
}

export default Involved;
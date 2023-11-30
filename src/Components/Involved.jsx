import ArrowUp from "../assets/ArrowUp.svg";
import blackArrowRight from "../assets/black-arrow-right.svg";
import asset1 from "../assets/get_involved1.png";
import asset2 from "../assets/get_involved2.png";
import { useNavigate } from "react-router-dom";

const Involved = () => {
  const navigate = useNavigate();

  const navigateToWorkshops = () => {
    navigate("/workshops");
  };

  return (
    <div
      id="volunteer"
      className="involved px-6 min-[800px]:max-w-[1180px] mx-auto lg:py-[120px]"
    >
      <h1 className="font-bold text-[94px] leading-[81px] tracking-[-4.5px]">
        <span className="block">Get</span>
        <span className="block"> Involved </span>
      </h1>
      <p className="header-text font-medium text-lg leading-7 max-w-[755px] ml-auto">
        DevFest 2023 is open to individuals who are excited, to not just be a
        part of the event but also want to contribute to the success of the
        event. Want to be a key player in making DevFest SE a big hit? Feel free
        to apply here.
      </p>
      <div className="max-w-[430px] mx-auto min-[800px]:flex min-[800px]:max-w-[1180px]">
        <div
          className="frame cursor-pointer p-14 min-[800px]:flex min-[800px]:flex-col min-[800px]:justify-between md:max-w-[580px] md:mr-4"
          onClick={navigateToWorkshops}
        >
          <div>
            <div className="header min-[800px]:mb-2">
              <p className="text-[32px] font-bold leading-[41px]">
                RSVP for a session
              </p>
              <img src={ArrowUp} alt="" />
            </div>
            <p>
              You could be a novice or a professional, our workshop sessions are
              tailored to your skill level.
            </p>
          </div>
          <div className="img-container mt-8">
            <img src={asset1} className="object-cover md:h-[305px]" alt="" />
          </div>
        </div>
        <div className="frame cursor-pointer p-14 min-[800px]:flex min-[800px]:flex-col min-[800px]:justify-between md:max-w-[580px]">
          <div>
            <div className="header min-[800px]:mb-2">
              <p className="text-[32px] font-bold leading-[41px]">
                Apply as a volunteer
              </p>
              <img src={blackArrowRight} alt="" />
            </div>
            <p>Apply as a volunteer for DevFest Lagos Student Edition 2023</p>
          </div>
          <div className="mt-8">
            <img
              src={asset2}
              className="object-cover border-4 border-[#FDE293] w-full rounded-[48px] md:h-[305px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const InvolvedCard = () => {
  return;
};

export default Involved;

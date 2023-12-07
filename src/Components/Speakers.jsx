import "../App.css";
import {
  Goodness,
  Chinaza,
  Idris,
  Olayinka,
  Mileke,
  Adejoke,
  Jesus,
  Ijeoma,
  Salim,
} from "../assets";
import { speakers } from "../constants";

import Marquee from "react-fast-marquee";

const Speakers = () => {
  return (
    <div className="my-16 mb-32">
      <h1 className="min-[1280px]:max-w-[1200px] mx-auto max-[1280px]:px-6 mb-16 text-[70px] font-bold leading-[65px] tracking-[-4.5px]">
        <span className="block">Featured </span>
        <span className="block">Speakers</span>
      </h1>
      <Marquee pauseOnHover>
        <div className="flex">
          {speakers.map((speaker, idx) => (
            <Speaker key={idx} idx={idx} speaker={speaker} />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

//

const Speaker = ({ speaker }) => {
  return (
    <div className="border-[#211212] border-t-[2px] border-r-[8px] border-b-[8px] border-l-[1px] rounded-3xl w-[310px] mr-4 shrink-0">
      <div>
        <img
          className="h-[275px] w-full rounded-tl-[1.3rem] rounded-tr-[1.1rem] object-cover object-center"
          src={speaker.url}
          alt=""
        />
      </div>
      <div className="bg-[#f6eee5] h-[192px] p-6 rounded-bl-[1.3rem] rounded-br-[1.1rem] tracking-[-0.4px] flex flex-col justify-center ">
        <h2 className="text-2xl font-medium">{speaker.name}</h2>
        <p className="text-lg font-medium text-[#4d4d4d] leading-normal">
          {speaker.bio}
        </p>
      </div>
    </div>
  );
};

export default Speakers;

import React from "react";

const About = () => {
  return (
    <section id="about" className="pt-[40px] lg:pt-[92px]">
      <div className="flex flex-col w-full lg:h-[50vh]">
        <h1 className="lg:max-w-[253px] text-[54px] lg:text-[94px] leading-none font-bold tracking-[-1.5px]">
          About <br />
          Event
        </h1>

        <div className="w-full flex mt-[24px] lg:pl-[305px]">
          <div className="border-y-2 border-[#4285F4] w-[100%]">
            <div className="flex flex-col sm:flex-row">
              <p className="lg:max-w-[402px] pr-[14px] py-[19px] text-[20px] tracking-[-1.5px]">
          DevFest Lagos Student Edition 2023 marks the inaugural event tailored specifically for students, aiming to bridge the gap between technology and the student community. This edition is dedicated to bringing technology closer to students and fostering a vibrant environment for tech enthusiasts passionate about the latest advancements in technology.
              </p>
              <div className="hidden sm:block border-l-2 border-[#4285F4] " />

              <p className="lg:max-w-[434px] py-[19px] sm:pl-[37px] text-[20px] tracking-[-1.5px]">
              Explore developer tools, learn from experts, and connect with other developers from your local community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

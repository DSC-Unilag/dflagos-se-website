import React from "react";
import styles from "../style";

const Testimonials = () => {
  return (
    <section
      id="schedule"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col 
  relative py-[70px] md:py-[100px] lg:py-[200px] text-[#fff]`}
    >
      <div className="flex flex-col">
        <div className="flex flex-col">
          <p className="text-[25px] min-[460px]:text-[35px] whitespace-nowrap xs:whitespace-normal min-[640px]:text-[40px] lg:text-[80px] leading-[-10px] tracking-tighter text-[#fff] shadow-text font-bold mb-4">
            We are setting the standard <br /> for DevFest Student Edition!
          </p>

          <div className="flex text-[#FFFAEB] flex-col min-[640px]:flex-row min-[640px]:justify-between text-[16px] lg:text-[24px] py-[40px] xs:py-0">
            <p className="font-bold">When: 10th December⌚</p>
            <p className="font-bold">Where: Multipurpose hall, UNILAG📍</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const GetBanner = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const controls = useAnimation();
  const isMobile = window.innerWidth <= 768;
  React.useEffect(() => {
    if (inView && !isMobile) {
      controls.start({ y: 0, opacity: 100 });
    }
  }, [inView]);
  return (
    <motion.div
      className="generate-banner"
      ref={ref}
      initial={!isMobile && { opacity: 0, y: -100 }}
      animate={controls}
      transition={{ duration: 1 }}
    >
      <h1 className="text-[45px] md:text-[70px]" style={{ lineHeight: "110%" }}>
        Generate Custom Banner
      </h1>
      <p>
        Let people know you would be attending the event by generating a custom
        banner for yourself
      </p>
      <Link to="/banner">Generate Banner</Link>
    </motion.div>
  );
};

export default GetBanner;

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Building1 from "../../assets/images/buildings/1.svg";
import Building2 from "../../assets/images/buildings/2.svg";
import Building3 from "../../assets/images/buildings/3.svg";
import Building4 from "../../assets/images/buildings/4.svg";
import Building5 from "../../assets/images/buildings/5.svg";
import Cloud1 from "../../assets/images/clouds/1.svg";
import Cloud2 from "../../assets/images/clouds/2.svg";
import Sun from "../../assets/images/sun.svg";
import Moon from "../../assets/images/moon.svg";
import Car from "../../assets/images/car.svg";

const CityParallax = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0 1", "1 1"],
  });
  const cloudX1 = useTransform(scrollYProgress, [0.1, 0.3], ["-30vw", "100vw"]);
  const cloudX2 = useTransform(scrollYProgress, [0, 0.7], ["-30vw", "200vw"]);
  const sectionBackgroundColor = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.9],
    ["#87CFFF", "#FDCF5F", "#2E4482"]
  );
  const sunY = useTransform(scrollYProgress, [0.2, 0.45], ["5%", "100%"]);
  const moonY = useTransform(scrollYProgress, [0.55, 0.9], ["100%", "5%"]);

  return (
    <motion.section
      className="min-h-[800vh]"
      ref={sectionRef}
      style={{ backgroundColor: sectionBackgroundColor }}
    >
      <div className="sticky top-0 h-[100vh]">
        <div className="absolute top-0 left-0 w-full h-[80%] flex items-start justify-center overflow-hidden">
          <motion.span className="inline-block h-full" style={{ y: sunY }}>
            <motion.span
              className="inline-block"
              animate={{ scale: [1, 1.05, 1], y: sunY }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
              }}
            >
              <motion.img
                src={Sun}
                alt="sun 1"
                className="w-[180px]"
                animate={{ rotate: 180 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              />
            </motion.span>
          </motion.span>
        </div>
        <div className="absolute top-0 left-0 w-full h-[80%] flex items-start justify-center overflow-hidden">
          <motion.span className="inline-block h-full" style={{ y: moonY }}>
            <motion.img src={Moon} alt="moon 1" className="w-[180px]" />
          </motion.span>
        </div>
        <div className="absolute top-0 left-0 w-full flex">
          <motion.img
            src={Cloud1}
            alt="cloud 1"
            className="w-[200px]"
            style={{ x: cloudX1 }}
          />
          <motion.img
            src={Cloud2}
            alt="cloud 2"
            className="w-[200px]"
            style={{ x: cloudX2 }}
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-[80%] flex items-end gap-x-16">
          <div>
            <img src={Building1} alt="building 1" className="w-[280px]" />
          </div>
          <div>
            <img src={Building2} alt="building 2" className="w-[340px]" />
          </div>
          <div>
            <img src={Building3} alt="building 3" className="w-[210px]" />
          </div>
          <div>
            <img src={Building4} alt="building 4" className="w-[210px]" />
          </div>
          <div>
            <img src={Building5} alt="building 5" className="w-[210px]" />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center">
          <img src={Car} alt="car" className="h-[200px]" />
        </div>
      </div>
    </motion.section>
  );
};

export default CityParallax;

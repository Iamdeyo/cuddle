"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FEATURESNAV } from "@/constants";
import { CurvedLines } from "@/utils/svgs";

const Features = () => {
  const [selectFeature, setSelectFeature] = useState(1);

  const containerVariants = {
    offscreen: {},
    onscreen: {
      transition: { staggerChildren: 0.07, delayChildren: 0.5 },
    },
  };
  const variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  const imgVariants = {
    offscreen: {
      x: 0,
      opacity: 0,
    },
    onscreen: {
      x: "var(--slide-in-from-side, -33.33%)",
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="py-14 md:py-28 text-[#102137] overflow-x-hidden">
      <div className="custom-container">
        <ul className="features-nav relative flex items-center justify-between max-w-[870px] mx-auto mb-10 lg:mb-32">
          <div className="absolute -z-[1] bottom-full -left-[50px]">
            <CurvedLines />
          </div>
          <div className="absolute -z-[1]  bottom-full md:bottom-0 right-0 md:-right-[50px]">
            <CurvedLines className="rotate-180" />
          </div>
          {FEATURESNAV.map((item) => (
            <li key={item.id}>
              <button
                className={`px-2.5 h-[25px] xs:h-[35px] xs:text-sm md:h-[65px] md:px-10 lg:text-[1.0625rem] lg:font-bold rounded-[7px] leading-none capitalize  text-[0.6875rem] transition-all duration-300 ease-in-out hover:bg-[#F3E8FF] font-medium ${
                  selectFeature === item.id && "bg-[#F3E8FF]"
                }`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative ">
        <div className="custom-container">
          <div className="flex flex-col gap-y-10 lg:flex-row">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={containerVariants}
              className="lg:w-3/5 lg:pr-10"
            >
              <motion.h2
                variants={variants}
                className="text-2xl lg:text-4xl font-bold text-primary"
              >
                Asset Flip Investment:
              </motion.h2>
              <motion.h3
                variants={variants}
                className="text-2xl lg:text-4xl font-bold"
              >
                Diversify Your Portfolio with Minimal Effort
              </motion.h3>
              <motion.p
                variants={variants}
                className="mt-6 mb-9 text-xs xs:text-sm lg:text-lg"
              >
                Asset flip offers the opportunity to get in and out of a Real
                Estate deal quickly with a low minimum investment amount and the
                potential for high returns in which investors can diversify
                their funds into lands or houses. This category of investment
                offers a different range of opportunities in our quickest
                projects, with timeframes ranging from just 6-12 months. This
                project type is ideal for investors who are looking for a
                short-term investment. Heres why this category is a game-changer
                for savvy investors:
              </motion.p>
              <motion.button
                variants={variants}
                className="btn-primary h-[45px] px-8"
              >
                Explore Properties
              </motion.button>
            </motion.div>
            <div className="w-full lg:w-2/5 aspect-[9/10] sm:max-h-[850px] lg:max-h-none"></div>
          </div>
        </div>
        <div className="absolute bottom-0 lg:bottom-auto lg:top-0 right-0 w-full lg:w-2/5 overflow-hidden">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={containerVariants}
            className="w-[78%] sm:max-w-[630px] lg:max-w-[640px] aspect-[313.38/389.51] bg-[#552B94] rounded-[19px] translate-x-1/3 md:translate-x-[400px] lg:translate-x-1/3 max- flex items-center"
          >
            <motion.div
              variants={imgVariants}
              className=" rounded-[19px] w-[89%] aspect-[280.39/303.23] -translate-x-1/3 relative"
            >
              <div className=" border-4 border-white w-full h-[86%] rounded-[19px] overflow-hidden">
                <Image
                  src="/properties-2.jpg"
                  width={280.39}
                  height={262}
                  alt="properties-image"
                  sizes="100vh"
                  style={{
                    width: "auto",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="border-4 border-white rounded-[19px] aspect-[182.07/102.77] w-[65%] absolute left-1/2 -translate-x-1/2 bottom-0 overflow-hidden">
                <Image
                  src="/properties-1.jpg"
                  width={182.07}
                  height={102.77}
                  alt="properties-image"
                  sizes="100vh"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;

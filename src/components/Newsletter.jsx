"use client";
import { motion } from "framer-motion";
import { Dots, MailIcon } from "@/utils/svgs";

const Newsletter = () => {
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
  return (
    <section className="pt-28 newsletter">
      <div className="bg-[#d891f91c] sm:bg-transparent">
        <div className="custom-container">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={variants}
            className="sm:bg-[#d891f91c] text-[#191825] py-12 sm:py-14 sm:px-10 lg:px-16 lg:py-32 flex flex-col justify-center items-center text-center rounded-[32px] max-w-[1110px] mx-auto relative"
          >
            <div className="hidden sm:block absolute -top-14 -right-10">
              <Dots />
            </div>
            <p className="text-primary text-[0.625rem] sm:text-lg lg:text-[1.5rem] uppercase tracking-[20%] font-semibold mb-7 sm:mb-8">
              subscribe to our newsletter
            </p>
            <p className="font-semibold leading-[120%] lg:leading-tight text-xl sm:text-2xl lg:text-[3.5rem] mb-7 sm:mb-10 lg:mb-16">
              Prepare yourself & let’s explore the beauty of the world
            </p>
            <div className="flex w-full gap-2 sm:gap-4 lg:gap-16">
              <div className="w-full text-xs md:text-sm relative text-[rgba(25,24,37,0.75)] lg:text-[1.4375rem] h-[40px] sm:h-[60px] lg:h-[96px]">
                <span className="absolute left-[16px] top-1/2  -translate-y-1/2">
                  <MailIcon />
                </span>
                <input
                  type="text"
                  placeholder="Your Email"
                  name="email"
                  className="w-full h-full rounded-[11px] lg:rounded-[32px] indent-[58px] pr-[16px] placeholder:text-inherit outline-primary"
                />
              </div>
              <button className="btn-primary h-[40px] block w-44 lg:w-60 text-center lg:rounded-[32px] lg:h-[96px] sm:h-[60px] sm lg:text-[1.4375rem]">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

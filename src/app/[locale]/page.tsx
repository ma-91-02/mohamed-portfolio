"use client"
import { useTranslations } from "next-intl";
import Image from "next/image";
// import Content from "./components/home-page/content";
// import PraticlesContainer from "./components/particles-container";


// components 
import ParticlesContainer from "@/src/components/particles-container";
import ProjectsBtn from "@/src/components/projects-btn";
import Avatar from "@/src/components/avatar";

// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'

export default function Home() {
  // const t = useTranslations('HomePage');
  return (

    // <main className=" flex">
      <div className="xl:px-32 w-full h-full  xl:max-h-[820px] flex flex-col z-20 flex-1 items-center xl:justify-center  xl:flex-row  xl:my-0">
        <div className="mt-[120px]"></div>
        <ParticlesContainer />
        {/* image */}
        <div className="w-[60%] md:w-[50%]  xl:w-[40%] flex justify-center items-center">
          {/* particles */}
          {/* Avatar img */}
          <motion.div
            variants={fadeIn('up', 0.5)} initial='hidden' animate='show' exit='hidden' transition={{ duration: 1, ease: 'easeInOut' }}
            className="flex flex-col w-full h-full max-w-[737px] max-h-[578px]">
            <Avatar />
            <div className="bg-orange-600 text-white text-center flex items-center justify-center">
              <h1 className="h2 p-2 my-auto flex justify-center text-nowrap  items-center  h-full w-full">
                Mohamed Al-zurfi
              </h1>
            </div>
          </motion.div>
        </div>
        {/* text */}
        <div className="flex w-full h-full">
          <div className="flex text-center flex-col justify-center items-center xl:pt-40 xl:text-left h-full container mx-auto">
            {/* title */}
            <motion.h1
              variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden'
              className="h1">
              Transforming Ideas <br /> Into <span className=" text-orange-600">Digital Reality</span>
            </motion.h1>
            {/* subtitle */}
            <motion.p
              variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit='hidden'
              className=" max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est expedita blanditiis dicta, accusamus possimus repellendus sunt consequuntur accusantium voluptatum quo ducimus distinctio omnis id ipsam quisquam odit optio tenetur alias?
            </motion.p>
            {/* btn */}
            <div className="flex justify-center  xl:hidden relative">
              <ProjectsBtn />
            </div>
            <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className=" hidden xl:flex">
              <ProjectsBtn />
            </motion.div>
            <div className="mb-[120px]"></div>
            {/* <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-left xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div> */}
          </div>
        </div>


      </div>
    // </main>
    

  );
}

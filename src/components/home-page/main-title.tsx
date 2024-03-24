"use client"
// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'

import ProjectsBtn from '../projects-btn'
import { usePathname } from 'next/navigation'


interface MainTitleProps{
  title1?:string,
  title2?:string,
  title3?:string,
  desc:string
}

export default function MainTitle({title1, title2, title3, desc}:MainTitleProps) {
  const path = usePathname();
  return (
    <div className={`flex  text-center flex-col justify-center items-center py-8 xl:py-0  h-full w-full    mx-auto  ${path.includes('/ar')?"xl:text-right xl:pr-16":"xl:text-left"}`}>
      {/* title */}
      <motion.h1
        variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden'
        className="h1  w-full">
         {title1} <br />  {title2} <span className=" text-orange-600">{title3}</span>
      </motion.h1>
      {/* subtitle */}
      <motion.p
        variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit='hidden'
        className="  mx-auto xl:mx-0 mb-10 xl:mb-16 w-full text-2xl md:text-3xl  ">
        {desc}
      </motion.p>
      {/* btn md and sm screen */}
      <div className="flex justify-center  xl:hidden relative">
        <ProjectsBtn />
      </div>
      {/* btn xl screen */}
      <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className=" hidden xl:flex">
        <ProjectsBtn />
      </motion.div>

    </div>
  )
}
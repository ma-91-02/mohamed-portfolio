"use client"

// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'
import Avatar from '../avatar'

interface TitleProps{
  mohamed:string
}

export default function AvatarWithTitle({mohamed}:TitleProps){
  return(
    <div className=" pb-2 xl:pb-0  xl:w-full h-full flex justify-center items-center ">
    {/* Avatar img */}
    <motion.div
      variants={fadeIn('up', 0.5)} initial='hidden' animate='show' exit='hidden' transition={{ duration: 1, ease: 'easeInOut' }}
      className="flex flex-col w-full md:w-[99%] xl:w-full h-full max-w-[737px] max-h-[578px]  items-center justify-center z-10">
      <Avatar />
      <div className=" bg-white/10 w-full  text-orange-600 text-center flex items-center justify-center rounded-md">
        <h1 className="h1 p-2 my-auto flex  justify-center text-nowrap  items-center  text-center h-full w-full">
        {mohamed}
        </h1>
      </div>
    </motion.div>
  </div>
  )
}
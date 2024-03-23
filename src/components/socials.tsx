import Link from "next/link"
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiGithubLine,
} from 'react-icons/ri'
export default function Socials() {
  return (
    <div className='flex flex-row  items-center justify-center gap-x-2 xl:gap-x-4 px-1'>
      <Link className=" text-2xl xl:text-3xl hover:bg-orange-600 w-full text-center flex items-center justify-center" href='#'> <RiFacebookLine /></Link>
      <Link className=" text-2xl xl:text-3xl hover:bg-orange-600 w-full text-center flex items-center justify-center"  href='#'><RiInstagramLine /></Link>
      <Link className=" text-2xl xl:text-3xl hover:bg-orange-600 w-full text-center flex items-center justify-center"  href='#'><RiYoutubeLine/></Link>
      <Link className=" text-2xl xl:text-3xl hover:bg-orange-600 w-full text-center flex items-center justify-center"  href='#'><RiGithubLine/></Link>
    </div>
  )
}
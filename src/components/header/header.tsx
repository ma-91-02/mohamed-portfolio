"use client"
import ItemNav from "./item-nav"
import Socials from "../socials"
import LocalSwitcher from "./local-switcher"
import { usePathname } from "next/navigation"
export default function Header() {
  const path = usePathname();
  return (
    <div className="flex px-4 md:px-10 xl:px-[160px] flex-row w-full  items-center justify-between  absolute left-0 top-0 z-50">
      

      <div className="flex   w-full h-[80px] items-center justify-start ">

        <Socials />
      </div>
      <div className="flex  w-full h-[80px] items-center justify-end ">

        <LocalSwitcher />
      </div>
      </div>

   
  )
}
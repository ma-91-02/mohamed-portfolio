"use client"
import ItemNav from "./item-nav"
import Socials from "../socials"
import LocalSwitcher from "./local-switcher"
import { usePathname } from "next/navigation"
export default function Header() {
  const path = usePathname();
  return (
    <div className="flex flex-row w-full  items-center justify-between xl:justify-center absolute left-0 top-0 z-50">
      <div className="flex container  w-full h-[80px] items-center justify-start xl:px-[100px]">

        <Socials />
      </div>
      <div className="flex  w-full h-[80px] items-center justify-end xl:px-[160px]">

        <LocalSwitcher />
      </div>

    </div>
  )
}
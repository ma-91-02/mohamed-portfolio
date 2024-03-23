import { useTranslations } from "next-intl"
import Link from "next/link"
import LocalSwitcher from "./local-switcher";
import Header from "./header";

import TopLeftImg from "../top-left-img";
import LeftNav from "./left-nav";
import RightNav from "./right-nav";
export default function MainHeader() {
  const t = useTranslations("Navigation");
  return (
    <header className="">
      <Header/>
      <TopLeftImg/>
      <RightNav/>
      {/* <LeftNav/> */}
      {/* <Header /> */}
      {/* <LocalSwitcher /> */}
    </header>
  )
}
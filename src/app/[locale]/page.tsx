// "use client"
import { useTranslations } from "next-intl";
import Image from "next/image";



// components 
import ParticlesContainer from "@/src/components/particles-container";
import ProjectsBtn from "@/src/components/projects-btn";
import Avatar from "@/src/components/avatar";

// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'
import AvatarWithTitle from "@/src/components/home-page/avatar-title";
import MainTitle from "@/src/components/home-page/main-title";

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <main className=" h-full">
      <main className="px-[20px] xl:px-32 w-full h-full  flex flex-col z-20 flex-1 items-center xl:justify-center   xl:my-0">
        <div className="flex w-full h-full  pt-[250px] xl:pt-0 flex-col items-center justify-center xl:flex-row">
          <AvatarWithTitle mohamed={t("mohamed")} />
          <MainTitle desc={t("desc")}  title1={t("title1")} title2={t("title2")} title3={t("title3")}/>
        </div>
        <ParticlesContainer />
      {/* <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-left xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge animate-none duration-75 translate-z-0 "></div> */}
      </main>

      <main className=" h-full w-full ">
        <div>about som</div>
      </main>
    </main>
  );
}

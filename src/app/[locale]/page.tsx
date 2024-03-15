import { useTranslations } from "next-intl";
import Content from "./components/home-page/content";
import PraticlesContainer from "./components/particles-container";
export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <main className="h-subtract160 xl:h-subtract80  xl:pb-0 flex min-h-screen xl:flex-col items-center justify-between ">

      {/* bg img  */}
      {/* <div className=" w-[60%] h-[60%] absolute right-0 bottom-[0]">
        <div className=" bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
        </div>
      </div> */}
      <Content title={t('mainTitle')}subTitle={t('subTitle')} desc={t('desc')}/>
      {/* particles */}
      <PraticlesContainer />
      {/* avatar img */}
    </main>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import { useTranslations } from "next-intl";
import Header from "@/src/components/header";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "AL-Zurfi Mohamed" ,
  description: "Eng AL-Zurfi Mohamed",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  }
}
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  // console.log(locale);
  const t = useTranslations("Navigation");
  // useEffect(() => {
  //   document.title = t("pageTitle");
  // }, [t]);
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen  w-full mx-auto">
        <Header/>
        <div className=" flex-grow mt-20">

        {children}
        footer
        </div>
        </div>
        
        </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "@/src/app/globals.css";
import { useTranslations } from "next-intl";
// 
import MainHeader from "@/src/components/header/main-header";
import Layout from "@/src/components/layout";

const tajawal = Tajawal({
  subsets: ["latin"],
  variable: '--font-Tajawal',
  weight: ['200', '300', '400', '500', '700', '800', '900']

});


export const metadata: Metadata = {
  title: "AL-Zurfi Mohamed",
  description: "Eng AL-Zurfi Mohamed",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string
  }
}
export default function RootLayout({
  children,
  params: { locale }
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale} dir={locale==='ar'?"rtl":"ltr"}>
      <head>
      </head>
      <body className={tajawal.className}>
        <div className={`page bg-site bg-cover bg-no-repeat ${tajawal.variable} font-Tajawal relative text-white `}>
          <MainHeader />
          <Layout>
            {children}
          </Layout>
        </div>
      </body>
    </html>
  );
}

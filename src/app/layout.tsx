// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header/main-header";
// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "AL-Zurfi Mohamed",
//   description: "Eng AL-Zurfi Mohamed",
// };

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
//   console.log(locale);
  return (
      <body>{children}</body>
  );
}

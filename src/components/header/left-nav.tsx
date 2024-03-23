"use client"
// icons
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LocalSwitcher from './local-switcher';
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// components
import Socials from '../socials';
// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];


export default function LeftNav() {
  const path = usePathname();
  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max top-0 mt-auto xl:left-[2%] z-50  w-full xl:w-20 xl:max-w-md xl:h-screen'>
      {/* inner */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[40px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        <div className='flex flex-row justify-center items-center xl:flex-col'>
          <LocalSwitcher />
          <Socials/>
          <ul>
            {/* <li>f</li>
            <li>i</li>
            <li>g</li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}
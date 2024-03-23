"use client"
import { AnimatePresence, motion } from 'framer-motion'
import Transition from './transition';
import { usePathname } from 'next/navigation';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: RootLayoutProps) {
  const path = usePathname()
  return (
    <AnimatePresence mode="sync">
      <motion.div key={path} className='flex w-full h-full  flex-col items-center justify-center overflow-y-auto bg-gradient-to-b from-black/60 via-blue-950 to-black/60'>
        <Transition />
        {children}
      </motion.div>

    </AnimatePresence>
  )
}
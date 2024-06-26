'use client'
import React, { useEffect, useState } from 'react'
import { RiEnglishInput } from "react-icons/ri";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function LocalSwitcher() {
  const path = usePathname();

  return (
    <ul className="flex   items-center justify-between xl:justify-center gap-x-1 xl:gap-x-4 px-4  xl:px-0    py-8 text-sm md:text-lg xl:rounded-full">
      <li className={path.startsWith("/ar") ? 'px-2 w-full text-center bg-orange-600 ' : `px-2`} >
        <Link href={`/ar${path.replace('/ru', '').replace('/en', '').replace("/ar", '')}`}>عربي</Link>
      </li>
      <li className={path.startsWith("/ru") ? 'px-2 w-full text-center bg-orange-600' : `px-2 `}>
        <Link href={`/ru${path.replace('/ru', '').replace('/en', '').replace("/ar", '')}`}>Русский</Link>
      </li>
      <li className={path.startsWith("/en") ? 'px-2 w-full text-center bg-orange-600' : `px-2 `} >
        <Link href={`/en${path.replace('/ru', '').replace('/en', '').replace("/ar", '')}`}>English</Link>
      </li>
    </ul>
  )
}

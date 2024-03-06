'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function LocalSwitcher() {
  const path = usePathname();

  return (
    <ul className="flex flex-row justify-around">
      <li className={path.startsWith("/ar") ? 'px-2 bg-amber-500' : `px-2 `} >
        <Link href={`/ar${path.replace('/ru', '').replace('/en', '').replace("/ar", '')}`}>عربي</Link>
      </li>
      <li className={path.startsWith("/ru") ? 'px-2 bg-amber-500' : `px-2 `}>
        <Link href={`/ru${path.replace('/ru', '').replace('/en', '').replace("/ar", '')}`}>Русский</Link>
      </li>
      <li className={path.startsWith("/en") ? 'px-2 bg-amber-500' : `px-2 `} >
        <Link href={`/en${path.replace('/ru', '').replace('/en', '').replace("/ar", '')}`}>English</Link>
      </li>
    </ul>
  )
}

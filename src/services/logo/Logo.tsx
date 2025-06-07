"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import {setting} from '@/store/storage/clientSettingStore'
import { STORAGE_URL } from '@/utils/BaseApp'

function Logo() {
  return (
    <Link href="/">
        {setting ? <Image src={`${STORAGE_URL}${setting?.logo}`} alt="logo" width={150} height={150}/> : ""}
    </Link>
  )
}

export default Logo
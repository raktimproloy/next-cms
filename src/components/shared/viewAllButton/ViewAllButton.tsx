import { FaArrowRight } from '@/services/icon/Icon'
import Link from 'next/link'
import React from 'react'

interface Props{
    text: String,
    slug: String
}

function ViewAllButton({text, slug}: Props) {
  return (
    <div>
        <Link className="learn-more-btn1" href={`${slug}`}>{text} 
        <span>
            <FaArrowRight/>
        </span></Link>
    </div>
  )
}

export default ViewAllButton
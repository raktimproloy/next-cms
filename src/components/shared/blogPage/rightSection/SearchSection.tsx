'use client'
import React, { useState } from 'react'
import { FaMagnifyingGlass } from '@/services/icon/Icon'
import Link from 'next/link'

function SearchSection() {
  const [search, setSearch] = useState("")

  return (
    <div className="single-widget widget_search">
        <h3 className="font-f-2">Search</h3>
        <div className="space10"></div>
        <div className="search-form-widget">
        <form action={`/blog/search/${search}/1`}>
            <input type="search" placeholder="Search Your Blog" onChange={(e) => setSearch(e.target.value)} />
            <button type="submit" className="search-icon">
              <Link href={`/blog/search/${search}/1`}>
                <FaMagnifyingGlass/>
              </Link>
            </button>
        </form>
        </div>
    </div>
  )
}

export default SearchSection

import { UserButton, auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const { userId } = auth()
    return (
        <div className="navbar bg-transparent  px-2">
            <div className="flex-1">
                <Link href="/">
                    <img src="/logo.png" className='w-14' alt="" />
                </Link>
            </div>
            <div className="flex gap-5">
                <Link href="/watchlists">Feed</Link>
                <Link href="/create">Create List</Link>
                {
                    userId ?
                        <Link href="/my">My Watchlists</Link>
                        : null
                }
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    )
}

export default Navbar
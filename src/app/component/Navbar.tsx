
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
            <div className="">
                <button className="btn text-white btn-ghost text-xs">
                    <Link href="/watchlists">Feed</Link>
                </button>
                <button className="btn text-white btn-ghost text-xs ">
                    <Link href="/create">Create List</Link>
                </button>

                {
                    userId ? <button className="btn text-white btn-ghost text-xs">
                        <Link href="/my">My Watchlists</Link>
                    </button> : null
                }

                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    )
}

export default Navbar
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className=" min-h-[88dvh] " >

      <div className=" grid place-content-center">
        <div className="max-w-xl text-center">

          <div className='grid place-content-center'>
            <img src="/logo.png" alt="logo" className='max-w-xs' />
          </div>
          <h1 className="mb-5 text-5xl font-bold text-orange-600"> Welcome to Watchlist</h1>
          <p className="mb-5 text-center">Connect with friends and get recommendations on the latest movies, TV shows, and more</p>
          <Link href='/create'>

            <button className="btn btn-primary">Share what you are watching. Discover what to watch next.</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

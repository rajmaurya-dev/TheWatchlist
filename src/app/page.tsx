import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="hero h-[88vh] bg-cover bg-center" style={{ backgroundImage: 'url(/bg-1.jpeg)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold"> Welcome to Viewers</h1>
          <p className="mb-5">Connect with friends and get recommendations on the latest movies, TV shows, and more</p>
          <Link href='/create'>

            <button className="btn btn-primary">Share what you are watching. Discover what to watch next.</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

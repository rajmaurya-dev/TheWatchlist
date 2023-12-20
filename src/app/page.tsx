import Image from 'next/image'

export default function Home() {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.imgur.com/IrvE3Lz.jpeg)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold"> Welcome to Viewers</h1>
          <p className="mb-5">Connect with friends and get recommendations on the latest movies, TV shows, and more</p>
          <button className="btn btn-primary">Share what you're watching. Discover what to watch next.</button>
        </div>
      </div>
    </div>
  )
}

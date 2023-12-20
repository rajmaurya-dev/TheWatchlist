import Link from 'next/link'
import React from 'react'

const PostCard = () => {
    return (
        <div className="card w-96 bg-blue-900 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <Link href="/watchlists/1">
                        <button className="btn btn-primary">Explore watchlist</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PostCard
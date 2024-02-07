import Link from 'next/link'
import React from 'react'

interface PostCardProps {
    title: string
    description: string
    category: string
    id: string
}

const PostCard: React.FC<PostCardProps> = ({ title, description, category, id }) => {
    return (
        <div className="card bg-transparent shadow-xl backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden">
            <div className="card-body p-6 bg-blue-300 bg-opacity-30 text-white">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <p className="mt-4">{description}</p>
                <span className="badge badge-primary badge-outline">{category}</span>
                <div className="card-actions justify-end mt-6">
                    <Link href={`/watchlists/${id}`}>
                        <button className="btn-xs btn btn-primary bg-blue-500 hover:bg-blue-600 transition-colors duration-200 rounded-full py-2 px-4">Explore watchlist</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PostCard
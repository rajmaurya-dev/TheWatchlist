import Link from 'next/link'
import React from 'react'

interface PostCardProps {
    title: string
    description: string
    category: string
    id: number
}

const PostCard: React.FC<PostCardProps> = ({ title, description, category, id }) => {
    return (
        <div className="card w-96 bg-blue-900 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <span className="badge badge-primary badge-outline">{category}</span>
                <div className="card-actions justify-end">
                    <Link href={`/watchlists/${id}`}>
                        <button className="btn-xs btn btn-primary">Explore watchlist</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PostCard
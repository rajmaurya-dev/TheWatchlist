'use client'
import axios from 'axios'
import React from 'react'
import PostCard from '../component/PostCard'
import { useQuery } from '@tanstack/react-query'

const MyWatchlist = () => {
    const { data: watchlist, isLoading: isLoadingUserWatchlist } = useQuery({
        queryKey: ['title'],
        queryFn: async () => {
            const response = await axios.get('/api/watchlist/my')
            return response.data
        },

    })
    return (
        <section>
            <div className="grid place-content-center md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-10">
                {watchlist ? watchlist.map((watchlist: any) => (
                    <PostCard
                        key={watchlist.id}
                        title={watchlist.title}
                        description={watchlist.description}
                        category={watchlist.category}
                        id={watchlist.id}
                    />

                )) : <h1>Loading....</h1>}

            </div>
        </section>
    )
}

export default MyWatchlist
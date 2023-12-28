'use client'
import axios from 'axios'
import React from 'react'
import PostCard from '../component/PostCard'
import { useQuery } from '@tanstack/react-query'

const MyWatchlist = () => {
    const { data: watchlist, isLoading: isLoadingUserWatchlist, refetch } = useQuery({
        queryKey: ['title'],
        queryFn: async () => {
            const response = await axios.get('/api/watchlist/my')
            return response.data
        },


    })
    return (
        <section className=''>
            <div className="grid place-content-start md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-10 min-h-[88vh]">
                {watchlist ? watchlist.map((watchlist: any) => (
                    <PostCard
                        key={watchlist.id}
                        title={watchlist.title}
                        description={watchlist.description}
                        category={watchlist.category}
                        id={watchlist.id}
                    />

                )) :
                    <span className="loading loading-dots loading-lg"></span>
                }

            </div>
        </section>
    )
}

export default MyWatchlist
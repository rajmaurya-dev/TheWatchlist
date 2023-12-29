import BackButton from '@/app/component/BackButton'
import ButtonAction from '@/app/component/ButtonAction'
import ItemCard from '@/app/component/ItemCard'
import MovieDetail from '@/app/component/MovieDetail'
import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs'
import React from 'react'
interface Item {
    id: number;
    title: string;
    genre: string;
    status: string;
    rating: number | null
    review: string | null;
    watchlsitId: number;
}
interface DetailWatchlistProps {
    params: {
        id: number
    }
}


const DetailWatchlist: React.FC<DetailWatchlistProps> = async ({ params }) => {
    const { userId } = auth()
    const id = typeof params.id === 'string' ? parseInt(params.id) : params.id
    const watchlist = await db.watchlist.findFirst({
        where: {
            id: id
        },
        include: {
            movieTv: true
        }

    })


    return (
        <div className='px-10 pt-5  flex flex-col min-h-[88vh]'>
            <BackButton />

            <h1 className='text-center font-semibold text-white text-3xl'>{watchlist?.title}</h1>
            <div>
                <div className='flex gap-2 items-start justify-center flex-col my-2'>
                    <span className='font-semibold'>{watchlist?.description}</span>
                    <span className="badge badge-primary badge-outline">{watchlist?.category}</span>
                </div>

                <div className='grid gap-8 grid-cols-2 md:grid-cols-3  '>
                    {watchlist?.movieTv.map((item) => (
                        <MovieDetail key={item.id} movieId={item.MovieId} />
                    ))}
                </div>

            </div>
            <div className=' mt-10 pt-10'>

                {userId === watchlist?.UserId && <ButtonAction id={id} />}
            </div>
        </div>
    )
}

export default DetailWatchlist
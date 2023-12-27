import BackButton from '@/app/component/BackButton'
import ButtonAction from '@/app/component/ButtonAction'
import ItemCard from '@/app/component/ItemCard'
import { db } from '@/lib/db'
import React from 'react'
interface Item {
    id: number;
    title: string;
    genre: string;
    status: string;
    rating: number | null; // Allow for a nullable number
    review: string | null;
    watchlsitId: number;
}
interface DetailWatchlistProps {
    params: {
        id: number
    }
}

export const getWatchList = async (id: number) => {
    const intId = typeof id === 'string' ? parseInt(id) : id
    const response = await db.watchlist.findFirst({
        where: {
            id: intId
        },
        include: {
            items: true
        }

    })

    return response
}
const DetailWatchlist: React.FC<DetailWatchlistProps> = async ({ params }) => {
    const watchlist = await getWatchList(params.id)
    console.log(watchlist)
    return (
        <div className='px-10 pt-5'>
            <BackButton />
            <h1 className='text-center font-semibold text-blue-600 text-3xl'>{watchlist?.title}</h1>
            <div>
                <div className='flex gap-2 items-start justify-center flex-col'>
                    <span className='font-semibold'>{watchlist?.description}</span>
                    <span className="badge badge-primary badge-outline">{watchlist?.category}</span>
                </div>
                <ItemCard items={watchlist?.items} />
                <ButtonAction />
            </div>
        </div>
    )
}

export default DetailWatchlist
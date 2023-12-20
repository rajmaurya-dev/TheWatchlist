import BackButton from '@/app/component/BackButton'
import ButtonAction from '@/app/component/ButtonAction'
import React from 'react'

const DetailWatchlist = () => {
    return (
        <div className='px-10 pt-5'>
            <BackButton />
            <h1 className='text-center font-semibold text-blue-600 text-3xl'>Watchlist</h1>
            <div>
                <h1>
                    <span className='font-semibold'>User</span> Watchlist
                </h1>
                <ButtonAction />
            </div>
        </div>
    )
}

export default DetailWatchlist
'use client'

import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { PlusCircle, Trash } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

interface ButtonActionProps {
    id: number

}
const ButtonAction: React.FC<ButtonActionProps> = ({ id }) => {

    const router = useRouter()
    const { mutate: deleteWatchlist } = useMutation({

        mutationFn: async () => {
            const confirmDelete = window.confirm('Are you sure you want to delete this watchlist?');
            if (confirmDelete) {
                return axios.delete(`/api/watchlist/${id}`)

            } else {

                throw new Error('Deletion canceled by user');
            }

        },
        onError: (error) => {
            if (error.message === 'Deletion canceled by user') {
                toast.success('Deletion canceled by user');
            } else {
                toast.error('Something went wrong. Please try again later or contact support.');
                console.log(error);
            }
        },
        onSuccess: () => {
            const revalidate = 30
            toast.success('Watchlist deleted successfully')
            router.push('/watchlists')
            router.refresh()

        }
    })
    return (
        <div className='my-1'>
            <Link href={`/add/${id}`} className='btn mr-2'><PlusCircle />Add</Link>
            <button onClick={() => deleteWatchlist()} className='btn btn-error'>
                <Trash />
                Delete Watchlist</button>
        </div>
    )
}

export default ButtonAction
'use client'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { PlusCircle, Trash } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

interface ButtonActionProps {
    id: number

}
const ButtonAction: React.FC<ButtonActionProps> = ({ id }) => {
    console.log(typeof id)
    const router = useRouter()
    const { mutate: deleteWatchlist } = useMutation({
        mutationFn: async () => {
            return axios.delete(`/api/watchlist/${id}`)
        },
        onError: (error) => {
            console.log(error)
        },
        onSuccess: () => {
            router.push('/watchlists')
            router.refresh()
        }
    })
    return (
        <div className='my-1'>
            <Link href={`/add/${id}`} className='btn mr-2'><PlusCircle />Add</Link>
            <button onClick={() => deleteWatchlist()} className='btn btn-error'>
                <Trash />
                Delete</button>
        </div>
    )
}

export default ButtonAction
'use client'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { Delete, Pencil, Trash } from 'lucide-react'
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
        }
    })
    return (
        <div>
            <Link href='/edit/1' className='btn mr-2'><Pencil />Edit</Link>
            <button onClick={() => deleteWatchlist()} className='btn btn-error'>
                <Trash />
                Delete</button>
        </div>
    )
}

export default ButtonAction
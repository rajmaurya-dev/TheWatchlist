'use client'
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const BackButton = () => {
    const router = useRouter()
    return (
        <button className='py-2 px-4 flex justify-center items-center rounded-md bg-blue-500 bg-opacity-30 my-1' onClick={() => router.back()}>
            <ChevronLeft />  <span>

                Back
            </span>
        </button>
    )
}

export default BackButton
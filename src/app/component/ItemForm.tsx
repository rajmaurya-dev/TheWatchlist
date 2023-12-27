'use client'
import { FormInputItem } from '@/types'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
interface ItemFormProps {
    submit: SubmitHandler<FormInputItem>
    watchlist: any
}
const ItemForm: FC<ItemFormProps> = ({ submit, watchlist }) => {
    const { register, handleSubmit } = useForm<FormInputItem>()



    return (
        <form onSubmit={handleSubmit(submit)} className='flex flex-col justify-center items-center gap-5 mt-5'>
            <input {...register('title', { required: true })} type="text" placeholder="Item title" className="input input-bordered w-full max-w-lg" />


            <input {...register('genre', { required: true })} type="text" placeholder="Genre" className="input input-bordered w-full max-w-lg" />

            <select {...register('status', { required: true })} className="select select-error w-full max-w-lg">
                <option disabled value=''>Select status</option>
                <option>Watched</option>
                <option>Planning to Watch</option>
                <option>Watching</option>
            </select>

            {/* Optional fields */}
            <input {...register('rating')} type="number" placeholder="Rating" className="input input-bordered w-full max-w-lg" />
            <select {...register('watchlist', { required: true })} className="select select-error w-full max-w-lg">
                <option disabled value=''>Select watchlist</option>
                {watchlist.map((watchlist: any) => (
                    <option key={watchlist.id} value={watchlist.id}>{watchlist.title}</option>
                ))}
            </select>

            <textarea {...register('review')} placeholder="Review" className="textarea textarea-bordered textarea-sm w-full max-w-lg" />

            <button className='btn w-full max-w-lg'>Add to Watchlist</button>
        </form>
    )
}

export default ItemForm
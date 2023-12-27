'use client'
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormInputItem } from '@/types';
import { db } from '@/lib/db';
import { auth, useAuth } from '@clerk/nextjs';
import ItemForm from '@/app/component/ItemForm';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';



const EditWatchlist = () => {

    const { register, handleSubmit } = useForm<FormInputItem>();
    const handleItemCreate: SubmitHandler<FormInputItem> = (data) => {

        console.log(data)
    }

    const { data: dataWatchlist, isLoading: isLoadingUserWatchlist } = useQuery({
        queryKey: ['title'],
        queryFn: async () => {
            const response = await axios.get('/api/watchlist/my')
            return response.data
        },


    })

    return (
        <>

            <ItemForm submit={handleItemCreate} watchlist={dataWatchlist} />
        </>
    );
};

export default EditWatchlist
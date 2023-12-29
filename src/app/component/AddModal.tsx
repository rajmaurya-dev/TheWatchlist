'use client'
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { PlusCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface ModalProps {
    showModal: boolean;
    onClose: () => void;
    movieId: number;
}

interface FormInputs {
    rating: number;
    movieId: number;
    status: string;
    watchlist: any;
}

const AddModal: React.FC<ModalProps> = ({ showModal, onClose, movieId }) => {
    const router = useRouter()
    const { register, handleSubmit, setValue } = useForm<FormInputs>();
    const { data: dataWatchlist, isLoading: isLoadingUserWatchlist } = useQuery({
        queryKey: ['title'],
        queryFn: async () => {
            const response = await axios.get('/api/watchlist/my')
            return response.data
        },

    })
    const onSubmit = (data: FormInputs) => {

        createContent(data)
        onClose();
    };
    const { mutate: createContent, isPending } = useMutation({
        mutationFn: (newContent: any) => {
            return axios.post('/api/movietv/create', newContent)
        },
        onError: (error) => {
            toast.error('something went wrong, please try again later or contact support')

        },
        onSuccess: () => {
            toast.success('Content added successfully')

        }
    })
    useEffect(() => {
        setValue('movieId', movieId);
    }, [movieId, setValue]);

    return showModal ? (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-black rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium text-white" id="modal-title">
                                    Rate the movie
                                </h3>
                                <div className="mt-2">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input {...register('rating')} type="number" min="1" max="10" placeholder="Rating (1-10)" className="w-full px-4 py-2 rounded-md text-black placeholder-black bg-gray-200 mb-4" />
                                        <input {...register('movieId')} type="hidden" />
                                        <select {...register('status', { required: true })} className="block w-full p-2 bg-black text-white border rounded-md shadow-sm focus:outline-none">
                                            <option disabled value=''>Select status</option>
                                            <option>Watched</option>
                                            <option>Scheduling</option>
                                            <option>Watching</option>
                                        </select>

                                        <select {...register('watchlist', { required: true })} className="block w-full p-2 mt-2 bg-black text-white border rounded-md shadow-sm focus:outline-none">
                                            <option disabled value=''>Select watchlist</option>
                                            {dataWatchlist && dataWatchlist.map((watchlist: any) => (
                                                <option key={watchlist.id} value={watchlist.id}>{watchlist.title}</option>
                                            ))}
                                        </select>
                                        <button type="submit" className="w-fit mt-1 flex gap-2 px-4 py-2 rounded-md text-white bg-blue-500 cursor-pointer"><PlusCircle /> Add to list </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};

export default AddModal;
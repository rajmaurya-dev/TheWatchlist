
'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Plus, PlusCircle, Search } from 'lucide-react';
import { useState } from 'react';
import { set, useForm } from 'react-hook-form';
import AddModal from '../component/AddModal';

interface FormInputs {
    searchQuery: string;

}

const tmdbApiKey = process.env.NEXT_PUBLIC_TMDB_KEY
const fetchMovies = async (searchQuery: string) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${tmdbApiKey}`);
    return data;
};
const Dropdown = () => {
    const [showModal, setShowModal,] = useState(false);
    const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
    const { register, handleSubmit, setValue } = useForm<FormInputs>();
    const [searchQuery, setSearchQuery] = useState('');
    const onSubmit = (data: FormInputs) => {
        console.log(data);
        setShowModal(false);
    };

    const openModal = (movieId: number) => {
        setSelectedMovieId(movieId);
        setShowModal(true);
    };
    const { data, isLoading, error } = useQuery({
        queryKey: ['movies', searchQuery],
        queryFn: () => fetchMovies(searchQuery),
        enabled: searchQuery.length > 0,
    });

    if (isLoading) return 'Loading...';
    if (error) return 'An error has occurred: ' + error.message;
    const onSearch = (data: FormInputs) => {
        setSearchQuery(data.searchQuery);
    };
    return (
        <div className=" text-white min-h-[88vh] flex items-start justify-start">
            <div className="w-full mx-10">
                <form onSubmit={handleSubmit(onSearch)} className='pt-10 flex justify-center  gap-2 '>
                    <input
                        {...register('searchQuery')}
                        type="text"
                        placeholder="Search for a movie..."
                        className="  w-[250px] md:w-[500px] px-4  rounded-md text-gray-300 placeholder-black bg-[#202327] border-blue-600 border mb-4"
                    />
                    <button type='submit' className=' px-4 py-2 rounded-md text-white bg-blue-600 mb-4 cursor-pointer'><Search /></button>
                </form>
                {isLoading && <div>Loading...</div>}
                {error && <div>An error has occurred: {error}</div>}
                {data?.results && (
                    <div className="bg-black text-white shadow-sm shadow-white drop-shadow-2xl rounded-md p-4 grid gap-3 grid-cols-1 md:grid-cols-2 md:mx-10 ">
                        {data.results.map((movie: any) => (
                            <div key={movie.id} className="flex items-center justify-between space-x-4 mb-2">
                                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className="w-16  rounded-md" />
                                <h4 className='line-clamp-1'>{movie.title}</h4>
                                <button onClick={() => openModal(movie.id)} className="ml-auto bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center">+</button>
                            </div>
                        ))}
                    </div>
                )}
                <AddModal showModal={showModal} onClose={() => setShowModal(false)} movieId={selectedMovieId || 0} />
            </div>
        </div>
    );
};

export default Dropdown;

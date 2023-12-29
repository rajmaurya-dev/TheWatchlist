
'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface DropdownProps {
    searchQuery: string;
}
interface FormInputs {
    searchQuery: string;
}

const tmdbApiKey = process.env.NEXT_PUBLIC_TMDB_KEY
const fetchMovies = async (searchQuery: string) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${tmdbApiKey}`);
    return data;
};

const Dropdown: React.FC<DropdownProps> = () => {
    const { register, handleSubmit } = useForm<FormInputs>();
    const [searchQuery, setSearchQuery] = useState('');
    const { data, isLoading, error } = useQuery({
        queryKey: ['movies', searchQuery],
        queryFn: () => fetchMovies(searchQuery),
        enabled: searchQuery.length > 0,
    });

    if (isLoading) return 'Loading...';
    if (error) return 'An error has occurred: ' + error.message;
    const onSubmit = (data: FormInputs) => {
        setSearchQuery(data.searchQuery);
    };
    return (
        <div className="bg-twitterDarkBlue text-white min-h-[88vh] flex items-start justify-start">
            <div className="w-full mx-10">
                <form onSubmit={handleSubmit(onSubmit)} className='pt-10 flex justify-center  gap-2 '>
                    <input
                        {...register('searchQuery')}
                        type="text"
                        placeholder="Search for a movie..."
                        className="  w-[250px] md:w-[500px] px-4  rounded-md text-gray-300 placeholder-black bg-[#202327] border-blue-600 border mb-4"
                    />
                    <button className=' px-4 py-2 rounded-md text-white bg-blue-600 mb-4 cursor-pointer'><Search /></button>
                </form>
                {isLoading && <div>Loading...</div>}
                {error && <div>An error has occurred: {error}</div>}
                {data?.results && (
                    <div className="bg-black text-white shadow-sm shadow-white drop-shadow-2xl rounded-md p-4 grid grid-cols-1 md:grid-cols-2 md:mx-10 ">
                        {data.results.map((movie: any) => (
                            <div key={movie.id} className="flex items-center space-x-4 mb-2">
                                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className="w-16  rounded-md" />
                                <h4>{movie.title}</h4>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;

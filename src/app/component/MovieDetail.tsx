'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
type Genre = {
    id: number;
    name: string;
};
type Movie = {
    id: number;
    title: string;
    genres: Genre[];
    release_date: string;
    poster_path: string;
};

const tmdbApiKey = process.env.NEXT_PUBLIC_TMDB_KEY;

const fetchMovie = async (movieId: number): Promise<Movie> => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${tmdbApiKey}`);
    return data;
};

type MovieDetailProps = {
    movieId: number;
};

const MovieDetail: React.FC<MovieDetailProps> = ({ movieId }) => {
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        fetchMovie(movieId).then(setMovie);
    }, [movieId]);

    if (!movie) {
        return <div>Loading...</div>;
    }
    console.log(movie)
    return (
        <div className="flex flex-col items-center lg:items-start w-full md:w-[300px]">
            <img
                className="w-full h-full object-cover rounded-lg"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            />
            <div className="flex flex-col justify-center text-white mt-2 lg:mt-0 lg:ml-4">
                <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-2">{movie.title}</h2>
                <p className="mb-2 text-sm lg:text-base">
                    {movie.genres.map((genre) => genre.name).join(', ')}
                </p>
                <p className="text-sm lg:text-base">
                    {new Date(movie.release_date).getFullYear()}
                </p>
            </div>
        </div>

    );
};

export default MovieDetail;

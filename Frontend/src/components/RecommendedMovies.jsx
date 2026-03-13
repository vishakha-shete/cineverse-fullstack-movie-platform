import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const RecommendedMovies = ({ movieTitles }) => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMovie = async (title) => {

        try {

            const res = await fetch(
                `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(title)}`,
                {
                    headers: {
                        accept: "application/json",
                        Authorization: `Bearer ${API_TOKEN}`,
                    },
                }
            );

            const data = await res.json();

            return data.results?.[0] || null;

        } catch (error) {
            console.log("Error fetching movie:", error);
            return null;
        }

    };

    useEffect(() => {

        const loadMovies = async () => {

            if (!movieTitles?.length) return;

            setLoading(true);

            const moviePromises = movieTitles.map(fetchMovie);

            const results = await Promise.all(moviePromises);

            const filteredMovies = results.filter(Boolean);

            setMovies(filteredMovies);

            setLoading(false);

        };

        loadMovies();

    }, [movieTitles]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[60vh] text-white">
                <div className="animate-spin w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full"></div>
            </div>
        );
    }

    return (
        <div className="px-6">

            <h2 className="text-3xl font-bold text-white mb-8 text-center">
                🤖 AI Recommended Movies
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

                {movies.map((movie) => (

                    <Link
                        key={movie.id}
                        to={`/movie/${movie.id}`}
                        className="group relative rounded-xl overflow-hidden bg-[#232323] shadow-lg hover:scale-105 transition"
                    >

                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            className="w-full h-64 object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>

                        <div className="absolute bottom-0 p-3">

                            <h3 className="text-white font-semibold text-sm">
                                {movie.title}
                            </h3>

                            <p className="text-gray-300 text-xs">
                                {movie.release_date?.slice(0, 4)}
                            </p>

                        </div>

                    </Link>

                ))}

            </div>

        </div>
    );
};

export default RecommendedMovies;
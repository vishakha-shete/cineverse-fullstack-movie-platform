import { Play } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";


const Moviepage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [trailerKey, setTrailerKey] = useState(null);
    const [recommendations, setRecommendations] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzNmMTE1MzdlZmU2Nzc3Y2U2NTc1NjNkNGJkZDY4OSIsIm5iZiI6MTc3MzA0NDQ5Ny4yNCwic3ViIjoiNjlhZTgzMTFlMTlmNjUxZjdjYzFjOWZmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.qLw-WXJoDYaCVrkkQFXSLSZw0P82St9l_tYuulEB5lU'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
            .then((res) => res.json())
            .then((res) => setMovie(res))
            .catch((err) => console.error(err));

        fetch(
            `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
            options
        )
            .then((res) => res.json())
            .then((res) => setRecommendations(res.results || []))
            .catch((err) => console.error(err));

        fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
            options
        )
            .then((res) => res.json())
            .then((res) => {
                const trailer = res.results?.find(
                    (vid) => vid.site === "YouTube" && vid.type === "Trailer"
                );
                setTrailerKey(trailer?.key || null);
            })
            .catch((err) => console.error(err));
    }, [id]);

    if (!movie) {
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="text-xl text-red-500">Loading...</span>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#181818] text-white">
            <div
                className="relative min-h-[70vh] flex items-end"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-black/40 to-transparent"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end p-6 md:p-10 gap-6 max-w-6xl">

                    {/* Poster */}
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="rounded-lg shadow-lg w-40 md:w-52"
                    />

                    {/* Movie Info */}
                    <div>
                        <h1 className="text-2xl md:text-4xl font-bold mb-2">{movie.title}</h1>

                        <div className="flex flex-wrap items-center gap-3 text-sm md:text-base mb-3">
                            <span>⭐ {movie.vote_average?.toFixed(1)}</span>
                            <span>{movie.release_date}</span>
                            <span>{movie.runtime} min</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {movie.genres?.map((genre) => (
                                <span
                                    key={genre.id}
                                    className="bg-gray-800 px-3 py-1 rounded-full text-xs md:text-sm"
                                >
                                    {genre.name}
                                </span>
                            ))}
                        </div>

                        <p className="max-w-xl text-gray-200 text-sm md:text-base mb-4">
                            {movie.overview}
                        </p>

                        {trailerKey && (
                            <Link
                                to={`https://www.youtube.com/watch?v=${trailerKey}`}
                                target="_blank"
                            >
                                <button className="flex items-center gap-2 bg-[#e50914] px-5 py-2 rounded-full hover:bg-red-700 transition">
                                    <Play size={18} /> Watch Trailer
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            <div className="px-6 md:px-12 py-10">
                <h2 className="text-2xl font-semibold mb-4">Details</h2>
                <div className="bg-[#232323] rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                        <ul className="text-gray-300 space-y-3">
                            <li>
                                <span className="font-semibold text-white">Status: </span>
                                <span className="ml-2">{movie.status}</span>
                            </li>

                            <li>
                                <span className="font-semibold text-white">Release Date: </span>
                                <span className="ml-2">{movie.release_date}</span>
                            </li>

                            <li>
                                <span className="font-semibold text-white">
                                    Original Language:
                                </span>
                                <span className="ml-2">
                                    {movie.original_language?.toUpperCase()}
                                </span>
                            </li>

                            <li>
                                <span className="font-semibold text-white">Budget: </span>
                                <span className="ml-2">
                                    {movie.budget ? `$${movie.budget.toLocaleString()}` : "N/A"}
                                </span>
                            </li>

                            <li>
                                <span className="font-semibold text-white">Revenue:</span>{" "}
                                <span className="ml-2">
                                    {movie.revenue ? `$${movie.revenue.toLocaleString()}` : "N/A"}
                                </span>
                            </li>

                            <li>
                                <span className="font-semibold text-white">
                                    Production Companies:
                                </span>
                                <span className="ml-2">
                                    {movie.production_companies &&
                                        movie.production_companies.length > 0
                                        ? movie.production_companies.map((c) => c.name).join(", ")
                                        : "N/A"}
                                </span>
                            </li>

                            <li>
                                <span className="font-semibold text-white">Countries:</span>
                                <span className="ml-2">
                                    {movie.production_countries &&
                                        movie.production_countries.length > 0
                                        ? movie.production_countries.map((c) => c.name).join(", ")
                                        : "N/A"}
                                </span>
                            </li>

                            <li>
                                <span className="font-semibold text-white">
                                    Spoken Languages:
                                </span>
                                <span className="ml-2">
                                    {movie.spoken_languages && movie.spoken_languages.length > 0
                                        ? movie.spoken_languages
                                            .map((l) => l.english_name)
                                            .join(", ")
                                        : "N/A"}
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-white mb-2">Tagline</h3>
                        <p className="italic text-gray-400 mb-6">
                            {movie.tagline || "No tagline available."}
                        </p>

                        <h3 className="font-semibold text-white mb-2">Overview</h3>
                        <p className="text-gray-200">{movie.overview}</p>
                    </div>
                </div>
            </div>

            {recommendations.length > 0 && (
                <div className="p-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        You might also like...
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">                        {recommendations.slice(0, 10).map((rec) => (
                            <div
                                key={rec.id}
                                className="bg-[#232323] rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300"                            >
                                <Link to={`/movie/${rec.id}`}>
                                    <img
                                        src={
                                            rec.poster_path
                                              ? `https://image.tmdb.org/t/p/w300${rec.poster_path}`
                                              : "/no-image.png"
                                          }
                                    />
                                    <div className="p-2">
                                        <h3 className="text-sm font-semibold">{rec.title}</h3>
                                        <span className="text-xs text-gray-400">
                                            {rec.release_date?.slice(0, 4)}
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Moviepage

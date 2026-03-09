import { Bookmark, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Hero = () => {
  const [movie, setMovie] = useState(null);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzNmMTE1MzdlZmU2Nzc3Y2U2NTc1NjNkNGJkZDY4OSIsIm5iZiI6MTc3MzA0NDQ5Ny4yNCwic3ViIjoiNjlhZTgzMTFlMTlmNjUxZjdjYzFjOWZmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.qLw-WXJoDYaCVrkkQFXSLSZw0P82St9l_tYuulEB5lU'
    }
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/upcoming', options)
      .then(res => res.json())
      .then(res => {
        if (res.results && res.results.length > 0) {
          const randomIndex = Math.floor(Math.random() * res.results.length);
          setMovie(res.results[randomIndex]);
        }
      })
      .catch(err => console.error(err));
  }, []);

  if (!movie) {
    return <p>Loading...</p>;
  }



  return (
    <div className="relative w-full h-full rounded-2xl">

      {/* Background Image */}
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="bg-img"
        className="w-full rounded-2xl h-[480px] object-center object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white max-w-3xl">

        <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
          Discover Your Next Favorite Movie
        </h1>

        <p className="text-gray-300 mb-6 text-sm md:text-lg">
          Explore trending movies, TV shows, and anime. Watch trailers,
          save favorites, and track your watch history.
        </p>

        <div className="flex space-x-2 md:space-x-4 absolute bottom-3 left-4 md:bottom-8 md:left-10 font-medium">
          <button className="flex justify-center items-center bg-white  hover:bg-gray-200 text-[#e50914] py-3 px-4 rounded-full cursor-pointer text-sm md:text-base">
            <Bookmark className="mr-2 w-4 h-5 md:w-5 md:h-5" /> Save for Later
          </button>
          <Link to={`/movie/${movie.id}`}>
            <button className="flex justify-center items-center bg-[#e50914]  text-white py-3 px-4 rounded-full cursor-pointer text-sm md:text-base">
              <Play className="mr-2 w-4 h-5 md:w-5 md:h-5" /> Watch Now
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Hero;
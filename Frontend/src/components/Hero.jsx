import React from "react";
import hero from "../assets/herobg.jpg";

const Hero = () => {
  return (
    <div className="relative w-full h-[87vh]">

      {/* Background Image */}
      <img
        src={hero}
        alt="hero"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white max-w-3xl">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover Your Next Favorite Movie
        </h1>

        <p className="text-gray-300 mb-6 text-sm md:text-lg">
          Explore trending movies, TV shows, and anime. Watch trailers,
          save favorites, and track your watch history.
        </p>

        <div className="flex gap-4">
          <button className="bg-red-600 px-6 py-3 rounded-md hover:bg-red-700 transition">
            Explore Movies
          </button>

          <button className="border border-gray-400 px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
            Watch Trailer
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hero;
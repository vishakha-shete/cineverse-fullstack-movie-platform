import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CardList = () => {

  const movies = [
    { id: 1, title: "Avengers: Endgame", imageURL: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
    { id: 2, title: "The Dark Knight", imageURL: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
    { id: 3, title: "Spider-Man: No Way Home", imageURL: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" },
    { id: 4, title: "Interstellar", imageURL: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
    { id: 5, title: "Avatar", imageURL: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg" },
    { id: 6, title: "Inception", imageURL: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg" },
  ];

  return (
    <div className="text-white px-4 md:px-10 mt-10">

      {/* Section Title */}
      <h2 className="text-2xl font-semibold mb-6">
        Upcoming Movies
      </h2>

      {/* Swiper */}
      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        grabCursor={true}
      >
        {movies.map((item) => (
          <SwiperSlide key={item.id} className="!w-[220px]">

            <div className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer">

              {/* Movie Poster */}
              <img
                src={item.imageURL}
                alt={item.title}
                className="w-full h-[300px] object-cover transform group-hover:scale-110 transition duration-300"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

              {/* Movie Title */}
              <p className="absolute bottom-3 left-3 right-3 text-sm font-semibold">
                {item.title}
              </p>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default CardList;
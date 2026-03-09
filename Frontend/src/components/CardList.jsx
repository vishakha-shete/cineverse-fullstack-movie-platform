import { Search, Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router"

const CardList = ({ title, category }) => {
    const [data, setData] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzNmMTE1MzdlZmU2Nzc3Y2U2NTc1NjNkNGJkZDY4OSIsIm5iZiI6MTc3MzA0NDQ5Ny4yNCwic3ViIjoiNjlhZTgzMTFlMTlmNjUxZjdjYzFjOWZmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.qLw-WXJoDYaCVrkkQFXSLSZw0P82St9l_tYuulEB5lU'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category}`, options).then(res => res.json())
            .then(res => setData(res.results))
            .catch(err => console.error(err));
    }, []);


    return (
        <div className="text-white px-4 md:px-10 mt-10">

            {/* Section Title */}
            <h2 className="text-2xl font-semibold mb-6">
                {title}
            </h2>

            {/* Swiper */}
            <Swiper
                spaceBetween={20}
                slidesPerView={"auto"}
                grabCursor={true}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index} className="!w-[220px]">
                        <Link to={`/movie/${item.id}`}>

                            <div className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer">

                                {/* Movie Poster */}
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                    alt=""
                                    className="w-full h-[300px] object-cover transform group-hover:scale-110 transition duration-300"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                                {/* Movie Title */}
                                <p className="absolute bottom-3 left-3 right-3 text-sm font-semibold">
                                    {item.original_title}
                                </p>

                            </div>
                        </Link>

                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default CardList;
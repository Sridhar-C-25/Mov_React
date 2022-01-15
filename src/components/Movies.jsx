import MySwiper from "./Swiper";
import React, { useState, useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"
import SwiperCore, { Navigation } from 'swiper';
import Videos from "./Videos";
SwiperCore.use([Navigation]);

function Movies ({ section })
{
   const key = import.meta.env.VITE_API_KEY;
   const Basic = import.meta.env.VITE_START_POINT;

   const [moviearr, setMoviearr] = useState([])
   const [type, setType] = useState('movie')
   let endpoint = section === "Popular" ? `${Basic}/${type}/popular?api_key=${key}&language=en-US&page=1` : `${Basic}/trending/${type}/day?api_key=${key}&language=en-US&page=1`;

   const dataFetch = () =>
   {
      fetch(endpoint)
         .then(results => results.json())
         .then(data =>
         {
            setMoviearr(data.results)
         });
   }
   function ChangeType (ty)
   {
      setType(ty)
      console.log('---------')
      console.log(type)
   }
   useEffect(() =>
   {
      dataFetch()
   }, [type])


   return (
      <div className="container">
         <h1 className="text-3xl pb-7 text-gray-100">{section} Movies</h1>
         <div className="text-gray-100  bg-gray-700 inline-block mb-5">
            <button className={`p-2 px-4 font-semibold ${type === "movie" ? 'bg-teal-500' : " "}`} onClick={() => ChangeType('movie')}>MOVIE</button>
            <button className={`p-2 px-4 font-semibold ${type === "tv" ? 'bg-teal-500' : " "}`} onClick={() => ChangeType('tv')}>TV</button>
         </div>
         <MySwiper>
            {
               moviearr?.map((movie) => (
                  <SwiperSlide key={movie.id} >
                     <Videos movie={movie} type={type} />
                  </SwiperSlide>
               ))
            }
         </MySwiper>
      </div>
   )
}

export default Movies
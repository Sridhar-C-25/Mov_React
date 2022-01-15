import React from 'react'
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

const Videos = ({ movie, type }) =>
{
   return (
      <div className='relative'>
         <Link to={`/${type}/${movie.id}`}  >
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
               className="border-2  mb-1 relative hover:border-teal-500" />
         </Link>
         <span className="w-11 h-11 absolute  top-3 right-2 rounded-full flex justify-center items-center" style={{ background: `conic-gradient(#14b8a6 ${10 * movie.vote_average}%, rgb(252, 252, 252) ${10 * movie.vote_average}%)` }} >
            <span className="absolute text-gray-100 w-9 h-9 text-center leading-9 text-sm bg-gray-900 rounded-full font-semibold">
               {movie.vote_average.toFixed(1)}<span className="text-[9px]">%</span>
            </span>
         </span>
         <h1 className="font-semibold pb-1 text-gray-200">
            {type === 'movie' ? movie.title?.length > 20 ? movie.title.slice(0, 20) + '...' : movie.title : movie.original_name?.length > 20 ? movie.original_name.slice(0, 20) + '...' : movie.original_name}</h1>
         <h2 className="text-sm font-semibold text-gray-400">
            {type === 'movie' ? movie.release_date : movie.first_air_date}</h2>
      </div>
   )
}

export default Videos

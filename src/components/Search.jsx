import { useEffect, useState } from "react";
import Videos from "./Videos";

const Search = () =>
{
   const key = import.meta.env.VITE_API_KEY;
   const Basic = import.meta.env.VITE_START_POINT;
   const [moviearr, setMoviearr] = useState([])
   const [query, setQuery] = useState('')
   const [load, setLoad] = useState(null)

   let endpoint = `${Basic}/movie/now_playing?api_key=${key}&language=en-US&page=1`;
   let endpointSearch = `${Basic}/search/movie?api_key=${key}&language=en-US&page=1&query=${query}`;
   const dataFetch = () =>
   {
      fetch(endpoint)
         .then(results => results.json())
         .then(data =>
         {
            setMoviearr(data.results)
         });
   }
   const dataFetchSearch = () =>
   {
      fetch(endpointSearch)
         .then(results => results.json())
         .then(data =>
         {
            if (query !== '') {
               setLoad(true)
               setMoviearr([])
               setMoviearr(data.results)
               setQuery('')
               setLoad(null)
            }
         });
   }

   useEffect(() =>
   {
      dataFetch()
   }, [])
   return (
      <div className="container">
         <div className="bg-gray-400 p-[0.5px] mb-5" ></div>
         <h1 className="text-3xl pb-7 text-gray-100">Now Playing</h1>
         <div className="mb-9">
            <input type="text" className="p-2 md:w-1/3 focus:outline-none" value={query} onInput={(e) => setQuery(e.target.value)} />
            <button className="p-2 px-5 font-semibold text-white bg-teal-400" onClick={dataFetchSearch}>Search</button>
         </div>
         < div className="grid lg:grid-cols-5 md:grid-cols-3  grid-cols-2  gap-4">
            {
               moviearr.length > 0 ? moviearr.map((movie) => (
                  <div className="" key={movie.id}>
                     {!load && <Videos movie={movie} type='movie' />}
                  </div>
               )) : <h1 className="text-2xl text-gray-50 absolute md:left-[40%] py-3">No Results !!!</h1>
            }
         </div >
      </div>
   )
}

export default Search

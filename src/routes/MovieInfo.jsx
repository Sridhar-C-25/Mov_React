import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"
import SwiperCore, { Navigation } from 'swiper';
import MySwiper from "../components/Swiper";
import Videos from "../components/Videos";
import Footer from "../components/Footer/Footer";
SwiperCore.use([Navigation]);

const key = import.meta.env.VITE_API_KEY;
const Basic = import.meta.env.VITE_START_POINT;

const MovieInfo = () =>
{
   let { id } = useParams()
   let { type } = useParams()

   const [data, setData] = useState([])
   const [cast, setCast] = useState([])
   const [video, setVideo] = useState([])
   const [recommend, setRecommend] = useState([])

   let endpoint = `${Basic}/${type}/${id}?api_key=${key}`;
   let endpointCast = `${Basic}/${type}/${id}/credits?api_key=${key}`;
   let endpointVideo = `${Basic}/${type}/${id}/videos?api_key=${key}`;
   let endpointRecommend = `${Basic}/${type}/${id}/recommendations?api_key=${key}`;
   const FetchSingleData = () =>
   {
      fetch(endpoint)
         .then(results => results.json())
         .then(dt =>
         {
            setData(dt)
         });
   }
   const FetchCast = () =>
   {
      fetch(endpointCast)
         .then(results => results.json())
         .then(dt =>
         {
            setCast(dt.cast)
         });
   }
   const FetchVideo = () =>
   {
      fetch(endpointVideo)
         .then(results => results.json())
         .then(dt =>
         {
            dt.results.length = 1
            setVideo(dt.results[0].key)
         });
   }
   const FetchRecommend = () =>
   {
      fetch(endpointRecommend)
         .then(results => results.json())
         .then(dt =>
         {
            setRecommend(dt.results)
         });
   }

   useEffect(() =>
   {
      window.scrollTo(0, 0)
      FetchSingleData()
      FetchCast()
      FetchVideo()
      FetchRecommend()
   }, [id])

   return (
      <>
         <div className="text-white container py-12" >
            <div className="md:flex items-center md:px-1 px-3 ">
               <img className="border-4 mx-auto md:mb-0 mb-4 border-teal-500"
                  src={`https://image.tmdb.org/t/p/w400${data.poster_path}`} />
               <div className="md:ml-10">
                  {
                     type === 'movie' ? <div>
                        <h1 className="text-4xl pb-3 text-gray-100 font-semibold">{data.original_title}</h1>
                        <h2 className="py-3 text-xl"><span className="text-teal-400">TAGLINE :</span> {data.tagline ? data.tagline : '---'}</h2>
                        <h2 className="py-3 text-xl"><span className="text-teal-400">RELEASE :</span>{data.release_date}</h2>
                        <h2 className="py-3 text-xl"><span className="text-teal-400">BUDGET :</span> {data.budget}</h2>
                        <span className="text-teal-400 text-xl">Genres : </span>
                        {
                           data.genres?.map((dt, i) => (
                              <span className="py-1 md:my-0 my-1  px-2 rounded bg-teal-500 mr-2 inline-block"
                                 key={i}>{dt.name}</span>
                           ))
                        }
                     </div>
                        :
                        <div>
                           <h1 className="text-4xl pb-3 text-gray-100 font-semibold">{data.original_name}</h1>
                           <h2 className="py-3 text-xl"><span className="text-teal-400">Episodes :</span> {data.number_of_episodes}</h2>
                           <h2 className="py-3 text-xl"><span className="text-teal-400">DATE :</span>{data.first_air_date}</h2>
                           <h2 className="py-3 text-xl"><span className="text-teal-400">POPULARITY :</span> {data.popularity}</h2>
                        </div>
                  }
                  <h2 className="py-3 text-xl"><span className="text-teal-400"> VOTE: </span>{data.vote_average}</h2>
                  <a href={`https://youtube.com/watch?v=${video}`} target={"_blank"} className="text-sm bg-gray-800 p-2 px-3 rounded-full leading-8 my-4 hover:bg-gray-700 inline-block">
                     <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                        className="bi bi-play-circle-fill inline pb-1 text-teal-400" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                     </svg> Watch Video</a>
                  <span className="text-teal-400 text-xl mt-5 block">OVERVIEW :</span>
                  <p className="text-gray-400 text-sm leading-7 "> {data.overview}</p>
               </div>
            </div>
            <br />
            <div className="bg-gray-400 p-[0.5px]" ></div>
            <h1 className="text-3xl py-5">CAST</h1>
            <MySwiper>
               {
                  cast.map((ct, i) => (
                     ct.profile_path && <SwiperSlide key={i} className="bg-gray-800 text-center px-5 pb-1 pt-4">
                        <img src={`https://image.tmdb.org/t/p/w300/${ct.profile_path}`} className="border-4 border-teal-400" alt="" />
                        <h1 className="text-md font-semibold text-gray-100 mt-1">{ct.name.slice(0, 10)}..</h1>
                        <h1 className="text-sm font-semibold text-teal-400 mt-1">{ct.known_for_department}</h1>
                     </SwiperSlide>
                  ))
               }
            </MySwiper>
            <br />
            <br />

            <h1 className="text-3xl py-5">Recommended</h1>

            <MySwiper>
               {
                  recommend.map((movie, i) => (
                     <SwiperSlide key={i}>
                        <Videos movie={movie} type={type} />
                     </SwiperSlide>
                  ))
               }
            </MySwiper>


         </div>
         <Footer />
      </>

   )
}

export default MovieInfo

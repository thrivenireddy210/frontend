import React, { useEffect,useState } from 'react'
import MovieCards from './MovieCards';
import axios from 'axios';
const MovieList = () => {
const [movies,setmovies] = useState([])
console.log("thriveni",movies.movies)

//     const movies=[{
//         name:'rama seetha',
//         rating:5,
//         release_Date:'04-05-2023'
//     },
//     {
//         name:'rama seetha',
//         rating:4,
//         release_Date:'04-05-2023'
//     },
//     {
//         name:'rama seetha',
//         rating:3,
//         release_Date:'04-05-2023'
//     },
// ];
useEffect(()=>{
  axios.get('http://localhost:8000/movies').then(res => setmovies(res.data));
},[]);
  return (
    <div>
            <h1>Movies list</h1>

        {
            movies?.movies?.map((movie,index)=>(
                <MovieCards key={index} name={movie.name} rating={movie.rating} release_Date={movie.release_Date}/> 
            ))
            
        }
    </div>
  )
}

export default MovieList
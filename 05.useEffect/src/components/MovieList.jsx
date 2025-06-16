import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MovieList = () => {

    const[movie, setMovie] = useState([]);
    const DATE = "20250611"
    const API_KEY = import.meta.env.VITE_MOVIE_LIST_API_KEY;
    const MOVIE_URL = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${API_KEY}&targetDt=${DATE}`;;

    const getMovieList= async ()=>{
        try{
            
            const res = await axios.get(MOVIE_URL);
            console.log(res);
            
            setMovie(res.data.boxOfficeResult.dailyBoxOfficeList);
            
        }catch(err){
            console.error("영화 데이터를 불러오는데 실패했습니다:", err);
        }
    }

    useEffect(()=>{
        getMovieList();
    },[])

  return (
    <div>
        <h1>영화 순위</h1>
        <ul>
            {movie.map((movies, index) => (
          <li key={movies.movieCd}>
            {index + 1}. {movies.movieNm} | {movies.openDt}
          </li>
        ))}
        </ul>

    </div>
  )
}

export default MovieList
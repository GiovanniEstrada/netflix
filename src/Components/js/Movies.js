import React, {useState, useEffect} from 'react'
import axios from '../../axios';
import '../css/Movies.css'

function Movies({title, url, main}) {

    const img_url = "http://image.tmdb.org/t/p/original/";
    const [movies, setMovies] = useState([]);

    useEffect(() =>{

        async function getMovies(){
            const request = await axios.get(url);
            setMovies(request.data.results)
        } 
        getMovies();
    }, [url])

  return (
    <div className='movies'>
        <h1 className='movie_title'>{title}</h1>
        <div className='posters'>
        {movies.map((movie)=>(
        <img
            key={movie.id}
            className={`movie_poster ${main && "movie_posterMain"}`}
            src={`${img_url}${main? movie.poster_path: movie.backdrop_path}`}
            alt={movie.name}
        />
        ))}
        </div>
    </div>
  )
}

export default Movies
import React, { useState, useEffect } from 'react'
import '../css/Banner.css'
import requests from '../../requests';
import axios from '../../axios';

function Banner() {

    const [banner, setBanner] = useState([]);
    const img_url = "http://image.tmdb.org/t/p/original/";
     

    useEffect(() => {
        async function getBanner() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            const random = Math.floor(Math.random() * request.data.results.length - 1);
            console.log(random)
            setBanner(request.data.results[random])
            console.log(banner)
            return request;
        }
        getBanner();
    }, [banner]);

    return (
        <header
            className='banner-main'
            style={{
                backgroundSize: `cover`,
                backgroundImage: `url(${img_url}${banner.backdrop_path})`,
                backgroundPosition: "20% center"
            }}>
            <div className='banner-text'>
                <h1>{banner.name}</h1>
                <button className='btn'>Reproducir</button>
                <button className='btn'>Mas Info</button>
                <h3>{banner.overview}</h3>
            </div>
            <div className='fade'></div>
        </header>
    )
}

export default Banner
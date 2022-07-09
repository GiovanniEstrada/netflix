import React from 'react'
import './App.css'
import request from './requests'
import Movies from './Components/js/Movies'
import Banner from './Components/js/Banner'
import Navbar from './Components/js/Navbar'
import Credits from './Components/js/Credits'

const App = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
      <Movies title="Orignales de NETFLIX" url={request.fetchNetflixOriginals} main/>
      <Movies title="Tendencias" url={request.fetchTrending} />
      <Movies title="Mejores Puntuadas" url={request.fetchTopRated} />
      <Movies title="Peliculas de Accion" url={request.fetchActionMovies} />
      <Movies title="Si te gusta la comedia" url={request.fetchComedyMovies} />
      <Movies title="Especial Halloween" url={request.fetchHorrorMovies} />
      <Movies title="Cine Romantico" url={request.fetchRomanceMovies} />
      <Movies title="Documentales" url={request.fetchDocumentaries} />
      <Credits/>
    </>
  )
}

export default App
import Movie from '../../types/Movies'
import { ArrowClockwise, CaretDown, CaretLeft, CaretRight, Info, Play, SquaresFour } from 'phosphor-react'
import { useState, useEffect } from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'

import ImageFilms from '../../assets/films.png'
import MovieFilms from '../../assets/pk.png'

import { apiKey } from '../../services/api'
import axios from 'axios'
import Image from 'next/image'


export default function Main() {
  const [page, setPage] = useState(0);
  const [pageSeries, setPageSeries] = useState(0);
  const [pageRated, setPageRated] = useState(0);
  const [pageRatedSeries, setPageRatedSeries] = useState(0);

  const [ratedSeries, setRatedSeries] = useState<Movie[]>([])
  const [rated, setRated] = useState<Movie[]>([])
  const [movies, setMovies] = useState<Movie[]>([])
  const [series, setSeries] = useState<Movie[]>([])

  const image_path = 'https://image.tmdb.org/t/p/w500'

  //////////////////////// Movies ////////////////////////

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`).then(response => response.data).then(data => setMovies(data.results))
  }, [])

  useEffect(() => {
    if (page === -1) setPage(0);
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=${page + 1}`).then(response => response.data).then(data => setMovies(data.results))
  }, [page])

  //////////////////////// Series ////////////////////////

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=pt-BR&page=1`).then(response => response.data).then(data => setSeries(data.results))
  }, [])


  useEffect(() => {
    if (pageSeries === -1) setPageSeries(0);
    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=pt-BR&page=${pageSeries + 1}`).then(response => response.data).then(data => setSeries(data.results))
  }, [pageSeries])

  //////////////////////// Top-Rated Movies ////////////////////////

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=pt-BR&page=1`).then(response => response.data).then(data => setRated(data.results))
  }, [])

  useEffect(() => {
    if (pageRated === -1) setPageRated(0);
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=pt-BR&page=${pageRated + 1}`).then(response => response.data).then(data => setRated(data.results))
  }, [pageRated])

  //////////////////////// Top-Rated Series ////////////////////////

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=pt-BR&page=1`).then(response => response.data).then(data => setRatedSeries(data.results))
  }, [])

  useEffect(() => {
    if (pageRatedSeries === -1) setPageRatedSeries(0);
    axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=pt-BR&page=${pageRatedSeries + 1}`).then(response => response.data).then(data => setRatedSeries(data.results))
  }, [pageRatedSeries])



  return (
    <>
      <div className="principal-image">
        <div className="title-image">
          <Image
            src={ImageFilms}
          />
          <p>Uma equipe de filmagem desperta acidentalmente uma força alienígena na zona rural da Noruega. Agora, os convidados de uma despedida de solteiro vão ter que salvar o mundo.</p>
          <button className='play'>
            <Play className='play-image' size={40} weight='fill' />
            <span>Assistir</span>
          </button>
          <button className='more-info'>
            <Info className='info-image' size={46} weight='bold' />
            <span>Mais informações</span>
          </button>
          <div className="right-area">
            <button className='reload'>
              <ArrowClockwise size={36} weight="bold" />
            </button>
            <div className='background'>
              <button className='white'></button>
              <button className='restrict'>
                14
              </button>
            </div>
          </div>
        </div>
        <div className="image">
          <Image
            className='image-class'
            src={MovieFilms}
            width={2000}
            height={1120}
            alt="" />
        </div>
      </div>
      <main>
        <div className="select-movies">
          <h1>Filmes</h1>
          <button className='set-gen'>
            Gêneros
            <CaretDown
              className='arrow-down'
              size={22}
              weight='fill'
              color='white'
            />
          </button>
          <div className="buttons">
            <button className='organization'>
              <HiMenuAlt1
                color='white'
                size={28} />
            </button>
            <button className='organization'>
              <SquaresFour
                color='white'
                size={28}
                weight="fill" />
            </button>
          </div>
        </div>
      </main>
      <div className="movies">
        <span>Popular na Netflix</span>

        <div className='movies-container'>
          {movies.map(movie => {
            return (
              <div key={movie.id}>
                <img className="movies-image" src={`${image_path}${movie.poster_path}`} alt="" />
              </div>
            )
          })}
        </div>

        <button onClick={() => setPage(page - 1)} className='left'>
          <CaretLeft
            className='arrow'
            weight='bold'
          />
        </button>
        <button onClick={() => setPage(page + 1)} className='right'>
          <CaretRight
            className='arrow'
            weight='bold'
          />
        </button>

      </div>
      <div className='series'>
        <h1>Séries</h1>
        <span>Em alta</span>

        <div className="series-container">
          {series.map(serie => {
            return (
              <div key={serie.id}>
                <img className="series-image" src={`${image_path}${serie.poster_path}`} alt="" />
              </div>
            )
          })}
        </div>

        <button onClick={() => setPageSeries(pageSeries - 1)} className='left'>
          <CaretLeft
            className='arrow'
            weight='bold'
          />
        </button>
        <button onClick={() => setPageSeries(pageSeries + 1)} className='right'>
          <CaretRight
            className='arrow'
            weight='bold'
          />
        </button>
      </div>

      <div className="top-rated">
        <h1>Filmes mais votados</h1>

        <div className="rated-container">
          {rated.map(rated => {
            return (
              <div key={rated.id}>
                <img className="rated-image" src={`${image_path}${rated.poster_path}`} alt="" />
              </div>
            )
          })}
        </div>

        <button onClick={() => setPageRated(pageRated - 1)} className='left'>
          <CaretLeft
            className='arrow'
            weight='bold'
          />
        </button>
        <button onClick={() => setPageRated(pageRated + 1)} className='right'>
          <CaretRight
            className='arrow'
            weight='bold'
          />
        </button>
      </div>

      <div className="series-rated">
        <h1>Séries mais votadas</h1>

        <div className="ratedSeries-container">
          {ratedSeries.map(ratedSeries => {
            return (
              <div key={ratedSeries.id}>
                <img className="rated-image" src={`${image_path}${ratedSeries.poster_path}`} alt="" />
              </div>
            )
          })}
        </div>

        <button onClick={() => setPageRatedSeries(pageRatedSeries - 1)} className='left'>
          <CaretLeft
            className='arrow'
            weight='bold'
          />
        </button>
        <button onClick={() => setPageRatedSeries(pageRatedSeries + 1)} className='right'>
          <CaretRight
            className='arrow'
            weight='bold'
          />
        </button>
      </div>

    </>
  )
}
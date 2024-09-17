import React from 'react'
import MovieCard from './MovieCard'
import MovieRow from './MovieRow'
import { requests } from '../util/constants'

const MovieList = () => {

  return (
    <>
      <MovieRow row="1" url={requests.PopularMovies} title='Popular Movies' />
      <MovieRow row='2' url={requests.TopRatedMovies} title='Top Rated Movies' />
      <MovieRow row="3" url={requests.ActionMovies} title="Action Movies" />
      <MovieRow row="4" url={requests.ComedyMovies} title="Comedy Movies" />
      <MovieRow row="5" url={requests.RomanceMovies} title="Romance Movies" />
      <MovieRow row="6" url={requests.DramaMovies} title="Drama Movies" />
      <MovieRow row="7" url={requests.ScienceAndFiction} title="Sci-fi Movies" />
      <MovieRow row="8" url={requests.AdventuresMovies} title="Adventure Movies" />
      <MovieRow row="9" url={requests.ThrilledMovies} title="Thriller Movies" />
    </>
  )
}

export default MovieList

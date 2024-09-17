import React from 'react'
import { IMAGE_URL } from '../util/constants'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`video/${id}`)
  }
  return (
    <div>
      <img
        onClick={() => handleClick(movie?.id)}
        className='h-36'
        src={`${IMAGE_URL}${movie?.backdrop_path}`}
        alt={movie?.title}
      />
    </div>
  )
}

export default MovieCard

import React, { useEffect } from 'react'
import { API_OPTIONS } from '../util/util'

const VideoBackground = ({movieId}) => {

    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/365177/videos?language=en-US' ,API_OPTIONS)
        const json = await data.json();
        console.log(json)
        const filteredData = json.results.filter((video)=> video.type === 'Teaser')
        const trailer =  filteredData.length === 0 ? filteredData[0] : json.results[0]
        console.log(trailer)
    };

    useEffect(()=> {
        getMovieVideos()
    },[])
  return (
    <div>
      
    </div>
  )
}

export default VideoBackground

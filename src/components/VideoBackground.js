import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../util/util'

const VideoBackground = ({ movieId }) => {

    const [trailer, setTrailer] = useState('')

    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/365177/videos?language=en-US', API_OPTIONS)
        const json = await data.json();
        console.log('json data',json.results)
        const filteredData = json.results.filter((video) => video.type === 'Teaser')
        console.log("filteredData    ", filteredData  )
        const selectedTrailer = filteredData.length === 0 ? filteredData[0] : json.results[0]
        console.log("trailerr ",selectedTrailer)

        if (selectedTrailer) {
            setTrailer(selectedTrailer.key);
            console.log("Selected trailer key:", selectedTrailer.key);
        }
    };

    useEffect(() => {
        getMovieVideos()
    }, [])
    console.log(trailer)
    return (
        <div className='w-screen'>
            <iframe className='w-screen aspect-video'
                src={`https://www.youtube.com/embed/${trailer}?autoplay=1&mute=1&loop=1&playlist=${trailer}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" >
            </iframe>
        </div>
    )
}

export default VideoBackground

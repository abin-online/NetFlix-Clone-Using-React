import React, { useEffect, useState } from 'react'
import axios from "axios"
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'
import MovieCard from './MovieCard'


const MovieRow = ({ row, url, title }) => {
    const [movies, setMovies] = useState([])

    const hoverLeft = () => {
        var slider = document.getElementById("slider" + row);
        slider.scrollLeft = slider.scrollLeft - 600
    }

    const hoverRight = () => {
        var slider = document.getElementById("slider" + row);
        slider.scrollLeft = slider.scrollLeft + 600
    }
    const fetchData = async ()=> {
        try {
            const {data} = await axios.get(url)
            setMovies(data?.results || [])
            console.log(data?.results)
        } catch (error) {
            console.error('Error fetching data ', error)
        }
    }

    useEffect(()=> {
        fetchData()
    })

    return (
        <>
            <p className='p-3 text-2xl font-bold'>{title}</p>
            <div className='flex items-center'>
                <MdNavigateBefore onClick={hoverLeft} />
                <div id={'slider' + row}  className="flex items-center gap-3 overflow-x-scroll scroll-smooth no-scrollbar">
                    {movies.map((movie) => (
                        <MovieCard key={movie?.id} movie={movie} />
                    ))}
                </div>
                <MdNavigateNext
                    onClick={hoverRight} />
            </div>
        </>
    )
}

export default MovieRow

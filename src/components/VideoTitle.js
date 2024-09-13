import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className='pt-36'>
        <h1>{title} poda myree</h1>
        <p>{overview}</p>
        <div>
            <button className='bg-white text-black p-4 px-16 text-lg'>Play</button>
            <button>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle

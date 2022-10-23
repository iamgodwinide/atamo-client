import React from 'react'
import './bg-video.css'

const BgVideo = () => {
    return (
        <div className='bg-video'>
            <video src={"/Green girl_4.mp4"} preload autoPlay muted loop />
        </div>
    )
}

export default BgVideo
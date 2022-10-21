import React from 'react'
import './bg-video.css'

const BgVideo = () => {
    return (
        <div className='bg-video'>
            <video src={require("./assets/videos/Green girl_4.mov")} preload autoPlay muted loop />
        </div>
    )
}

export default BgVideo
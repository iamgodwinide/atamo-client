import React, { useRef, useState } from 'react'
import './loader.css'

const Loader = ({ setIsOpended, audio }) => {
    const videoplayer = useRef();


    const handleClick = () => {
        setTimeout(() => {
            videoplayer.current.style.zIndex = 10;
            videoplayer.current.play();
        }, 2000)
    }

    const handleEnded = () => {
        setIsOpended(false);
        audio.current.play()
    }

    return (
        <div className={"loader-bg"}>
            <video onEnded={handleEnded} ref={videoplayer} className="video-bg-full" src='/Elevator elevated_3.mp4' preload='true' />
            <div className='preload-wrap'>
                <h1 onClick={handleClick} className='animate'>Click to ascend</h1>
            </div>
        </div>

    )
}

export default Loader
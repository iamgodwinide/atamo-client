import React, { useEffect, useRef, useState } from 'react'
import { Progress } from 'reactstrap';
import './loader.css'

const Loader = ({ setIsOpended, audio }) => {
    const videoplayer = useRef();
    const [loading, setLoading] = useState(true);


    const handleClick = () => {
        setTimeout(() => {
            videoplayer.current.style.zIndex = 10;
            videoplayer.current.play();
        }, 2000)
    }

    const handleEnded = () => {
        setIsOpended(false);
        audio.current.play();
    }

    useEffect(() => {
        window.addEventListener('load', function () {
            setLoading(false);
        })
        setTimeout(() => {
            setLoading(false);
        }, 5000)
    }, [])

    return (
        <div className={"loader-bg"}>
            <video onEnded={handleEnded} ref={videoplayer} className="video-bg-full" src='/Elevator elevated_3.mp4' preload='true' />
            <div className='preload-wrap'>
                <h1 onClick={handleClick} className='animate'>
                    Click to ascend</h1>
            </div>
            {
                loading
                &&
                <div className='loading-wrap'>
                    <Progress
                        animated
                        className="my-3"
                        color="danger"
                        value="100"
                        style={{
                            width: "30%",
                            height: "1.7em"
                        }}
                    />
                </div>
            }
        </div>

    )
}

export default Loader
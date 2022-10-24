import { useEffect, useRef, useState } from 'react';

const Slider = ({ setMuted, audio }) => {

    const rangeSliderRef = useRef();
    const [volume, setVolume] = useState((audio.current?.volume || 1) * 100);

    useEffect(() => {
        const slider = rangeSliderRef.current;
        const onChange = evt => {
            const value = Math.round(evt.detail.value);
            if (value === 0) setMuted(true);
            else setMuted(false);
            setVolume(value);
            audio.current.volume = value / 100;
        };

        slider?.addEventListener('change', onChange);

        return () => {
            slider?.removeEventListener('change', onChange);
        };
    }, []);

    return (
        <toolcool-range-slider
            slider-width="300px"
            slider-height="10px"
            style={{ margin: "0 10px", width: "75%" }}
            slider-radius="1rem"
            pointer-width="1.2em"
            pointer-height="1.2em"
            pointer-bg="#e22020"
            pointer-bg-hover="#e22020"
            pointer-bg-focus="#e22020"
            slider-bg="white"
            slider-bg-fill="#e22020"
            // slider-bg-fill="#2E2D92"
            value={volume}
            ref={rangeSliderRef}
        ></toolcool-range-slider>

    )
};

export default Slider;
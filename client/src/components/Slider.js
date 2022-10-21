import { useEffect, useRef, useState } from 'react';
import 'toolcool-range-slider';

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
            slider-height="5px"
            style={{ margin: "0 10px", width: "75%" }}
            slider-radius="0.5rem"
            value={volume}
            ref={rangeSliderRef}
        ></toolcool-range-slider>

    )
};

export default Slider;
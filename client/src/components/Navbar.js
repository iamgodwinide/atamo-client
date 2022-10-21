import React from "react";
import medium from './assets/social-media-icons/medium.svg';
import ethersan from './assets/social-media-icons/etherscan-logo-circle.png';
import './nav.css'
import Slider from "./Slider";

const Navbar = ({ audio, muted, setMuted }) => {

    return (
        <nav>
            <ul>
                <li
                >
                    {
                        muted
                            ? <div className="speaker-wrap">
                                <i class="fas fa-volume-mute fa-2x mr-1" style={{ marginRight: ".3em", color: "#E74B2C" }}></i>
                                <Slider audio={audio} setMuted={setMuted} />
                            </div>
                            :
                            <div className="speaker-wrap">
                                <i class="fas fa-volume-up fa-2x mr-1" style={{ marginRight: ".3em", color: "#E74B2C" }}></i>
                                <Slider audio={audio} setMuted={setMuted} />
                            </div>
                    }

                </li>
            </ul>
        </nav>
    )
}

export default Navbar

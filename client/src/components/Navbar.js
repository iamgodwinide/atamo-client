import React from "react";
import medium from './assets/social-media-icons/medium.svg';
import ethersan from './assets/social-media-icons/etherscan-logo-circle.png';
import './nav.css'
import Slider from "./Slider";

const Navbar = ({ audio, muted, setMuted }) => {

    return (
        <nav>
            <div className='logo-wrap'>
                <img src="/LOGO.png" />
            </div>
            <ul>
                <li
                >
                    {
                        muted
                            ? <div className="speaker-wrap">
                                <i class="fas fa-volume-mute fa-2x text-dark mr-1" style={{ marginRight: ".3em" }}></i>
                                <Slider audio={audio} setMuted={setMuted} />
                            </div>
                            :
                            <div className="speaker-wrap">
                                <i class="fas fa-volume-up text-dark fa-2x mr-1" style={{ marginRight: ".3em" }}></i>
                                <Slider audio={audio} setMuted={setMuted} />
                            </div>
                    }

                </li>
                <li className="hide-mobile">
                    <a href="#">
                        <img src={ethersan} />
                    </a>
                </li>
                <li className="hide-mobile">
                    <a href="https://medium.com/@atamoascension/the-atamo-ascension-first-stop-98f52ae07f4e">
                        <i class="fab fa-medium fa-3x"></i>
                    </a>
                </li>
                <li className="hide-mobile">
                    <a href="https://opensea.io">
                        <img src={"https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.svg"} />
                    </a>
                </li>
                <li className="hide-mobile">
                    <a href="https://twitter.com/home">
                        <i className="fab fa-3x fa-twitter" />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

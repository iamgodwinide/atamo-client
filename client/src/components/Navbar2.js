import React from "react";
import './nav2.css'
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
            <ul>
                <li>
                    <a href="https://medium.com/@atamoascension/the-atamo-ascension-first-stop-98f52ae07f4e">
                        medium
                    </a>
                </li>
                <li>
                    <a href="#">
                        etherscan
                    </a>
                </li>
                <li>
                    <a href='/'>
                        twitter
                    </a>
                </li>
                <li>
                    <a href='/'>
                        opensea
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

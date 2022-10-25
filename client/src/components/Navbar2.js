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
                                <i class="fas fa-volume-mute fa-2x mr-1" style={{ marginRight: ".3em", color: "#000" }}></i>
                                <Slider audio={audio} setMuted={setMuted} />
                            </div>
                            :
                            <div className="speaker-wrap">
                                <i class="fas fa-volume-up fa-2x mr-1" style={{ marginRight: ".3em", color: "#000" }}></i>
                                <Slider audio={audio} setMuted={setMuted} />
                            </div>
                    }

                </li>
            </ul>

            <ul className='links'>
                {/* <li>
                    <a href="#">
                        <img src={"/etherscan.svg"} />
                    </a>
                </li> */}
                <li>
                    <a href="https://medium.com/@atamoascension/the-atamo-ascension-first-stop-98f52ae07f4e">
                        <i class="fab fa-medium"></i>
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <i className='fab fa-twitter' />
                    </a>
                </li>
                {/* <li>
                    <a href='/'>
                        <img src={"/opensea.svg"} className="opensea" />
                    </a>
                </li> */}
            </ul>

        </nav>
    )
}

export default Navbar

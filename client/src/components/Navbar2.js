import React from "react";
import './nav2.css'
import Slider from "./Slider";
import { MediumOutlined, TwitterOutlined } from '@ant-design/icons'

const Navbar = ({ audio, muted, setMuted }) => {

    return (
        <div className="nav">
            {
                muted
                    ? <div className="speaker-wrap">
                        <i class="fas fa-volume-mute fa-2x mr-1" style={{ marginRight: ".3em", color: "#000" }}></i>
                        <Slider audio={audio} setMuted={setMuted} />
                    </div>
                    :
                    <div className="speaker-wrap">
                        <i class="fas fa-volume-up fa-2x mr-1" style={{ marginRight: ".3em", color: "#DC2913" }}></i>
                        <Slider audio={audio} setMuted={setMuted} />
                    </div>
            }

            <ul className='links2'>
                <li>
                    <a href='https://twitter.com/AtamoAscension'>
                        <TwitterOutlined />
                    </a>
                </li>
                <li>
                    <a href="https://medium.com/@atamoascension">
                        <MediumOutlined />
                    </a>
                </li>
                <li>
                    <a href="https://www.premint.xyz/atamo-ascension/">
                        <img src="/premint.svg" />
                    </a>
                </li>
            </ul>

        </div>
    )
}

export default Navbar

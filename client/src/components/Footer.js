import React from 'react'
import './footer.css'
import medium from './assets/social-media-icons/medium.svg';
import ethersan from './assets/social-media-icons/etherscan-logo-circle.png';

const Footer = () => {
    return (
        <footer id='footer'>
            <p>
                ALL RIGHTS RESERVED ATAMO ASCENSION 2022
            </p>
            <img src='/logo.png' />
            <hr />
            <ul className='links'>
                <li>
                    <a href="#">
                        <img src={ethersan} />
                    </a>
                </li>
                <li>
                    <a href="https://medium.com/@atamoascension/the-atamo-ascension-first-stop-98f52ae07f4e">
                        <img src={medium} />
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <i className='fab fa-twitter' />
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <img src={require("./assets/social-media-icons/Logomark-Blue.png")} />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
import React from "react";
import medium from './assets/social-media-icons/medium.svg';
import ethersan from './assets/social-media-icons/etherscan-logo-circle.png';
import './nav.css'

const Navbar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }
    return (
        <nav>
            <div className='logo-wrap'>
                <img src="/LOGO.png" />
            </div>
            <ul>
                {/*   Connect */}
                {isConnected ? (
                    <p>Connected</p>
                ) : (
                    <button color="btn btn-primary" onClick={connectAccount}>Connect</button>
                )

                }
                <li className="hide-mobile">
                    <a href="#">
                        <img src={ethersan} />
                    </a>
                </li>
                <li className="hide-mobile">
                    <a href="https://medium.com/@atamoascension/the-atamo-ascension-first-stop-98f52ae07f4e">
                        <img src={medium} />
                    </a>
                </li>
                <li className="hide-mobile">
                    <a href="https://opensea.io">
                        <img src={"https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.svg"} />
                    </a>
                </li>
                <li className="hide-mobile">
                    <a href="https://twitter.com/home">
                        <i className="fab fa-2x fa-twitter" />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

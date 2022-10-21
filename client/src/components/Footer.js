
const Footer = () => {
    return (
        <footer id='footer'>
            <p>
                ALL RIGHTS RESERVED ATAMO ASCENSION 2022
            </p>
            <img src='/LOGO.png' />
            <ul className='links'>
                <li>
                    <a href="#">
                        <img src={require("./assets/social-media-icons/etherscan-logo-circle.png")} />
                    </a>
                </li>
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
                <li>
                    <a href='/'>
                        <img src={"https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.svg"} />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App2.css'
import Navbar from "./components/Navbar2";
import Footer from './components/Footer'
import Loader from "./components/Loader";
import { useRef, useState } from "react";
import MainMint from "./MainMint2";
import atamoSound from './components/assets/sound/Atamo.mp3';

function App() {
    const [isOpened, setIsOpended] = useState(true);
    const [accounts, setAccounts] = useState([]);
    const audio = useRef();
    const [muted, setMuted] = useState(false);


    return (
        <div id="app" className="App">
            {
                isOpened
                &&
                <Loader setIsOpended={setIsOpended} audio={audio} />
            }
            {/* audio */}
            <audio ref={audio} muted={muted} loop hidden src={atamoSound} preload="true" />
            {/* nav start */}
            <Navbar accounts={accounts} setAccounts={setAccounts} audio={audio} muted={muted} setMuted={setMuted} />
            {/* nav end */}
            {/* showcase section  start*/}
            <section className="showcase">
                <video autoPlay loop muted src={'/Robot_in_Alleyway_With_SFX.mp4'} />
                <MainMint accounts={accounts} setAccounts={setAccounts} />
            </section>
            <Footer />
            {/* showcase section end */}
        </div >
    );
}

export default App;

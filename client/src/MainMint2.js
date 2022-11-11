import './mint2.css'
import shortid from 'shortid';
import axios from 'axios'


const MainMint = () => {

    // connect button
    // async function connectAccount() {
    //     const link = `https://enter.gatesofpolis.xyz`;
    //     window.open(link, "_blank");
    // }

    async function connectAccount() {

        const code = shortid.generate().slice(0, 6);
        console.log(code)
        axios.get(`/api/code-gen/${code}`)
        const tweetContent = `Acquiring new @AtamoAscension key...%0A%0AAscension sequence initiating. %0A%0APersonal key found: ${code}`
        const link = `https://twitter.com/intent/tweet?text=${tweetContent}&url=https://atamoascension.xyz`;
        window.open(link, "_blank");
    }



    return (
        <div className='mint-root'>
            <div className="connect-btn-wrap">
                <button color="btn btn-primary" onClick={connectAccount}>
                    {" "}Generate Ascension key{" "}
                </button>
            </div>
        </div>
    )
};

export default MainMint;
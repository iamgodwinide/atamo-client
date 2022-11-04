import './mint2.css'
import shortid from 'shortid';

const MainMint = () => {

    // connect button
    async function connectAccount() {
        const link = `https://enter.gatesofpolis.xyz`;
        window.open(link, "_blank");
    }

    // async function connectAccount() {
    //     const code = shortid.generate();
    //     const tweetContent = `Searching for @AtamoAscension key… %0A%0AOpening up the gates to the Polis soon %0A%0APersonal key found: ${code}`
    //     const link = `https://twitter.com/intent/tweet?text=${tweetContent}&url=https://atamoascension.xyz`;
    //     window.open(link, "_blank");
    // }



    return (
        <div className='mint-root'>
            <div className="connect-btn-wrap">
                <button color="btn btn-primary" onClick={connectAccount}>
                    <i class="fas fa-link"></i>
                    <span></span>
                    {" "}Click To Ascend{" "}
                </button>
            </div>
        </div>
    )
};

export default MainMint;
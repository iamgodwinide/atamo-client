import { useEffect, useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import newcontract from './Newcontract.json';
import './mint.css'
import { useAlert } from 'react-alert';

const newcontractAddress = "0x17cC48c7e5C2D76b371cC4FbB96C2F91470fEe41";

const MainMint = ({ accounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const [freemintAmount] = useState(1);
    const [totalSupply, settotalSupply] = useState("0");
    const [maxSupply, setMaxSupply] = useState("0");
    const [loading, setLoading] = useState(true);
    const [code, setCode] = useState("");

    const isConnected = Boolean(accounts[0]);
    const alert = useAlert();

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                newcontractAddress,
                newcontract,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.005 * (mintAmount - 1)).toString())
                });
                alert.success("minted successfully");
                console.log(response);
            } catch (err) {
                alert.error(err?.reason);
                console.log("error: ", err)
            };
        };
    };

    async function handlefreeMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                newcontractAddress,
                newcontract,
                signer
            );
            try {
                const value = ethers.utils.parseEther((0).toString())
                const response = await contract.mint(BigNumber.from(freemintAmount), {
                    value
                });
                alert.success("minted successfully");
                console.log(response)
            } catch (err) {
                alert.error(err?.reason);
                console.log("error: ", err)
            };
        };
    };


    //for getting the total supply
    async function gettotalsupply() {
        try {
            // Get the provider from web3Modal, which in our case is MetaMask
            // No need for the Signer here, as we are only reading state from the blockchain
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            // We connect to the Contract using a Provider, so we will only
            // have read-only access to the Contract
            const contract = new ethers.Contract(
                newcontractAddress,
                newcontract,
                signer
            );
            // call the tokenIds from the contract
            const _totalsupply = await contract.totalSupply();
            const _maxsupply = await contract.maxSupply();
            //_tokenIds is a `Big Number`. We need to convert the Big Number to a string
            settotalSupply(_totalsupply.toString());
            setMaxSupply(_maxsupply.toString());
            setLoading(false);
            setTimeout(gettotalsupply, 5000)
        } catch (err) {
            setTimeout(gettotalsupply, 5000);
            console.error(err);
        }
    }


    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };
    const handleIncrement = () => {
        if (mintAmount >= 10) return;
        setMintAmount(mintAmount + 1);
    };

    const handleClick = () => {
        // stop user from miniting
        alert.info("Minting has not started yet.");
        return;
        // 
        if (mintAmount > 1) {
            handleMint();
        } else {
            handlefreeMint();
        }
    }


    const generateCode = async () => {
        try {
            fetch(`/api/code-generate/${accounts[0]}`)
                .then(res => {
                    const data = res.json();
                    setCode(data.code);
                })
        } catch (err) {
            console.log(err);
            setTimeout(generateCode, 3000)
        }
    }

    useEffect(() => {
        if (accounts[0]) generateCode();
    }, [accounts])


    useEffect(() => {
        gettotalsupply();
    }, [])

    {/* <h1>{totalSupply}/{maxSupply}</h1> */ }

    const tweetContent = `
    %0A%0A AtamoAscension  🚀. %0A%0A I am ascending. %0A%0A Join Me: https://atamoascension.xyz %0A%0A ⚡CODE: ${code} %0A%0A Free mint: @atamoascension #atamoascension
    `


    return (
        <div className='mint-root'>
            {isConnected ? (
                <div className='mint-container'>
                    {
                        loading === false
                            &&
                            totalSupply == maxSupply
                            ? <h1 className="sold-out-text">SOLD OUT</h1>
                            : <h1>0/5555</h1>
                    }
                    <h3>Total supply</h3>
                    <div className="mintwrap">
                        <button className='btn crementors' onClick={handleDecrement}>-</button>
                        <input className="form-control" type='number' value={mintAmount} />
                        <button className='btn crementors' onClick={handleIncrement}>+</button>
                    </div>
                    <button className='btn mint' onClick={handleClick}>{mintAmount === 1 ? "Mint Free Now" : "Mint Now"}</button>
                    <a
                        href={`https://twitter.com/intent/tweet?text=${tweetContent}&url=https://atamoascension.xyz`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='btn mint tweet mt-5'>
                        <i className='fab fa-twitter' />
                        {" "}Tweet</a>
                </div>
            ) : (
                <p className='mint-text text-dark'>Please Connect <p>Metamask!</p></p>
            )
            }
        </div>
    )
};

export default MainMint;
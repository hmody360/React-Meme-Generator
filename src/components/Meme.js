import React from "react";

const Meme = () => {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        memeImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])
    const handleChange = (event) => {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }
    const randomMeme = () => {
        const memeElems = allMemes.map(elem => elem.url)

        let RandomImage = memeElems[Math.floor(Math.random() * memeElems.length)]
        console.log(RandomImage);
        // document.querySelector(".meme-image").src = RandomImage //This is the original way to do it in JS, but not React has better ways
        setMeme(meme => {
            return ({
                ...meme,
                memeImage: RandomImage
            })
        })
    }
        React.useEffect(() => {
            fetch("https://api.imgflip.com/get_memes")
            .then(memes => memes.json())
            .then(data => setAllMemes(data.data.memes))
        }, [])   
    
    return (
        <div className="meme-container">
            <div className="input-container">
                <input type="text" placeholder="Insert top part" className="meme-input" id="top-input" name="topText" onChange={handleChange} value={meme.topText}></input>
                <input type="text" placeholder="Insert bottom part" className="meme-input" id="bottom-input" name="bottomText" onChange={handleChange} value={meme.bottomText}></input>
            </div>
            <button className="generate-btn" onClick={randomMeme}>Generate new meme image<i className="fa-solid fa-image" id="image-icon"></i>
            </button>
            <div className="meme">
                <img className="meme-image" src={meme.memeImage} />
                <h2 className="meme-top-text">{meme.topText}</h2>
                <h2 className="meme-bottom-text">{meme.bottomText}</h2>
            </div>
        </div>
    )
}
export default Meme
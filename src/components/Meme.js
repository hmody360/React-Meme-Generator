import React from "react";
import memeData from "../memedata"

const Meme = () => {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        memeImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeData, setAllMemeData] = React.useState(memeData.data.memes)
    const randomMeme = () => {
        const memeElems = allMemeData.map( elem => elem.url)
        
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
    return (
        <div className="meme-container">
            <div className="input-container">
                <input type="text" placeholder="Insert top part" className="meme-input" id="top-input"></input>
                <input type="text" placeholder="Insert bottom part" className="meme-input" id="bottom-input"></input>
            </div>
            <button className="generate-btn" onClick={randomMeme}>Generate new meme image<i className="fa-solid fa-image" id="image-icon"></i>
            </button>
            <img className="meme-image" src={meme.memeImage}/>
        </div>
    )
}
export default Meme
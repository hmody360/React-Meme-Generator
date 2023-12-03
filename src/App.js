import React from "react";

import Header from "./components/Header"
import Meme from "./components/Meme"

const App = () => {

    return(
        <div className="app-container">
            <Header />
            <Meme
            // imgURL={randomMeme}
            />
        </div>
    )
}

export default App
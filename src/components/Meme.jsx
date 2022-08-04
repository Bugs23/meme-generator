import React from "react"
import memesData from "../memesData.js"

function Meme() {
    // Create new state called `memeImage` with a random meme image as default
    const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")

	function getMemeImage() {
		// Get all the memes from the the memeasData file
		const memesArray = memesData.data.memes
		// See how many memes there are and pick a random number between 1 and the total number of memes
		const randomNumber = Math.floor(Math.random()*memesArray.length)
		
		/* When the getMemeImage function is called, update the 
		`memeImage` state to be the random chosen image URL */
		setMemeImage(memesArray[randomNumber].url)

	}

	return (
		<main>
			<div className="form">
                <input className="form--input" type="text" placeholder="Top Text"/>
                <input className="form--input" type="text" placeholder="Bottom Text"/>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
			</div>
			<img className="meme--image" src={memeImage} />
		</main>
	)
}

export default Meme
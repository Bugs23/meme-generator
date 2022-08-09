import React from "react"
import memesData from "../memesData.js"

function Meme() {
	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg"
	})

	const [allMemeImages, getAllMemeImages] = React.useState(memesData)

	function getMemeImage() {
		// Get all the memes from the the memeasData file
		const memesArray = allMemeImages.data.memes
		// See how many memes there are and pick a random number between 1 and the total number of memes
		const randomNumber = Math.floor(Math.random()*memesArray.length)

		const url = memesArray[randomNumber].url
		
		/* When the getMemeImage function is called, update the 
		`memeImage` state to be the random chosen image URL */
		setMeme(prevMeme => ({
			...prevMeme,
			topText: prevMeme.topText,
			bottomText: prevMeme.bottomText,
			randomImage: url
		}))

	}

	return (
		<main>
			<div className="form">
                <input className="form--input" type="text" placeholder="Top Text"/>
                <input className="form--input" type="text" placeholder="Bottom Text"/>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
			</div>
			<img className="meme--image" src={meme.randomImage} />
			<h2>{meme.topText}</h2>
			<h2>{meme.bottomText}</h2>
		</main>
	)
}

export default Meme
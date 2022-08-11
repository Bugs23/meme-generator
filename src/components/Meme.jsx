import React from "react"

function Meme() {
	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg"
	})

	const [allMemes, setAllMemes] = React.useState([])

	React.useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then(res => res.json())
			.then(data => setAllMemes(data.data.memes))
	}, [])

	function getMemeImage() {
		// See how many memes there are and pick a random number between 1 and the total number of memes
		const randomNumber = Math.floor(Math.random() * allMemes.length)

		const url = allMemes[randomNumber].url
		
		/* When the getMemeImage function is called, update the 
		`memeImage` state to be the random chosen image URL */
		setMeme(prevMeme => ({
			...prevMeme,
			randomImage: url
		}))

	}

	function handleChange(event) {
		const {name, value} = event.target
		setMeme(prevMeme => ({
			...prevMeme,
			[name]: value
		}))

	}

	return (
		<main>
			<div className="form">
				<input className="form--input" type="text" placeholder="Top Text" name="topText" onChange={handleChange} value={meme.topText} />
				<input className="form--input" type="text" placeholder="Bottom Text" name="bottomText" onChange={handleChange} value={meme.bottomText} />
				<button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
			</div>
			<div className="meme">			
				<img className="meme--image" src={meme.randomImage} />
				<h2 className="meme--text top">{meme.topText}</h2>
				<h2 className="meme--text bottom">{meme.bottomText}</h2>
			</div>
		</main>
	)
}

export default Meme
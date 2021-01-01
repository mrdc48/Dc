
import React, { useState } from 'react';
import './styles.css';
 function App(){
	const [playing, setPlaying] = useState(false);

	const HEIGHT = 500;
	const WIDTH = 500;

	const start = () => {
		setPlaying(true);
		navigator.getUserMedia(
			{
				video: true,
        audio: true,
			},
			(stream) => {
				let video = document.getElementsByClassName('app__videoFeed')[0];
				if (video) {
					video.srcObject = stream;
				}
			},
			(err) => console.error(err)
		);
	};

	const stop = () => {
		setPlaying(false);
		let video = document.getElementsByClassName('app__videoFeed')[0];
		video.srcObject.getTracks()[0].stop();
	};

	return (
		<div style={{border: "2px solid #fff",boxShadow:"5px 5px 6x #ddd"}}>
			<div className="app__container">
				<video
					height={HEIGHT}
					width={WIDTH}
					muted
					autoPlay
					className="app__videoFeed"
				></video>
			</div>
			<div>
				{playing ? (
					<button onClick={stop}>Stop</button>
				) : (
					<button onClick={start}>Start</button>
				)}
			</div>
		</div>
	);
}
export default App;

 

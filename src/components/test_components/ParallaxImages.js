import React, {useState, useEffect} from 'react'
import {parallaxStyles} from './parallaxStyles'



const useMousePosition = _ => {
	const [position, setSPosition] = useState({x: 0, y: 0})
	useEffect( _=> {
		const setFromEvent = e => setSPosition({x: e.clientX, y: e.clientY})
		window.addEventListener('mousemove', setFromEvent)
		return _ => {window.removeEventListener('mousemove')}
	}, [])
	return position
}

const ParallaxImages = props => {

	const {images, speed} = props
	const jss = parallaxStyles()
	const position = useMousePosition()

	return (
		<div className={jss(['parallax_container'])}>
			<div className={jss(['parallax'])}>
				{images.map( (url, i) =>
					<div
						key={i}
						className={jss(['image'])}
						style={{
							backgroundImage: `url(${url})`,
							top: -position.y * (speed * i) + speed,
							left: -position.x * (speed * i) + speed
						}}
					/>
				)}
			</div>
		</div>
	)
}



export default ParallaxImages
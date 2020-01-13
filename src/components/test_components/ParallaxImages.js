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
	
	const jss = parallaxStyles()
	const position = useMousePosition()

	return (
		<div className={jss(['parallax_container'])}>
			<div className={jss(['parallax'])}>
				<div className={jss(['image', 'layer_a'])} style={{top: -position.y * .015, left: -position.x * .015}}/>
				<div className={jss(['image', 'layer_b'])} style={{top: -position.y * .025, left: -position.x * .025}}/>
				<div className={jss(['image', 'layer_c'])} style={{top: -position.y * .035, left: -position.x * .035}}/>
				<div className={jss(['image', 'layer_d'])} style={{top: -position.y * .045, left: -position.x * .045}}/>
			</div>
			<div className={jss(['hola'])}>
				<div>HOLA</div>
			</div>

		</div>
	)
}



export default ParallaxImages
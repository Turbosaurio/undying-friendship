import React from 'react'
import PropTypes from 'prop-types'
import {createUseStyles} from 'react-jss'

import * as mixins from '../../jss/mixins'
import * as settings from '../../jss/settings'

const {large} = settings.viewports

const decorativeVideoAttr = {
	loop: true,
	autoPlay: true,
	muted: true,
	controls: false,
	playsInline: true
}

const videoStyles = custom => {
	const styles = createUseStyles({
		video_holder:{
			position: 'relative',
		 	backgroundColor: props => props.backgroundColor,
			zIndex: 0,
			...mixins.respondTo(large, {
				clip: "rect(0, auto, auto, 0)",
				"-webkit-clip-path": "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
				"clip-path": "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
			})
		},

		video:{
			...mixins.objectCover(),
			display: 'block',
			opacity: props => props.videoOpacity,
			
		},

		fullscreen: {
			position: 'absolute',
		},

		parallax:{
			position: 'fixed',
		}

	})(custom)

	return (classes = []) => {
		return classes
			.reduce((acc, curr) => {
				if (styles[curr]) {
					acc.push(styles[curr])
				}
			return acc
			}, [])
			.join(" ")
	}
}

const VideoBackground = props =>{
	const {
		src,
		backgroundColor,
		videoOpacity,
		videoPosition,
		children,
	} = props
	const jss = videoStyles({
		backgroundColor,
		videoOpacity,
	})
	console.log('video props',props)
	return(
		<div className={jss(['video_holder'])}>
			<video className={jss(['video', videoPosition])} src={src} {...decorativeVideoAttr} />
			{children}
		</div>
	)
}

VideoBackground.propTypes = {
	src: PropTypes.string.isRequired,
	videoPosition: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string,
	videoOpacity: PropTypes.number,
	children: PropTypes.element
}

VideoBackground.defaultProps = {
	src: '',
	videoPosition: 'absolute',
	backgroundColor: '#fff',
	videoOpacity: 1,
}

export default VideoBackground
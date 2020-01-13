
import {createUseStyles} from'react-jss'
import * as mixins from '../../jss/mixins'
import * as settings from '../../jss/settings'

export function parallaxStyles (custom){
	const styles = createUseStyles({
		parallax_container:{
			...mixins.flexAll('row','center','center'),
			position: 'relative',
			width: '100%',
			height: '100vh',
		},
		parallax:{
			position: 'absolute',
			width: '100%',
			height: '100%',
			left: 0,
			top: 0,
			zIndex: 0,
		},

		image:{
			backgroundSize: 'cover',
			position: 'absolute',
			width: '100%',
			height: '100%',
		},
		
		layer_a:{ backgroundImage: 'url(http://elikirk.com/demos/liquipel/images/water-layer-1.png)'},
		layer_b:{ backgroundImage: 'url(http://elikirk.com/demos/liquipel/images/water-layer-2.png)'},
		layer_c:{ backgroundImage: 'url(http://elikirk.com/demos/liquipel/images/water-layer-3.png)'},
		layer_d:{ backgroundImage: 'url(http://elikirk.com/demos/liquipel/images/water-layer-4.png)'},

		hola:{
			padding: '1rem',
			fontSize: 30,
			fontWeight: 700,
			zIndex: 99,
			background: 'black',
			color: 'white',
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
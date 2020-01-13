
import {createUseStyles} from'react-jss'
import * as mixins from '../../jss/mixins'
import * as settings from '../../jss/settings'

export function parallaxStyles (custom){
	const styles = createUseStyles({
		parallax_container:{
			...mixins.flexAll('row','center','center'),
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
		},
		parallax:{
			position: 'absolute',
			width: '100%',
			height: '100%',
			left: 0,
			top: 0,
			zIndex: 0,
			opacity: .15,
		},

		image:{
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'contain',
			backgroundPosition: 'center center',
			position: 'absolute',
			width: '100%',
			height: '100%',
		},

		// layer_a:{ backgroundImage: 'url(http://elikirk.com/demos/liquipel/images/water-layer-1.png)'},
		// layer_b:{ backgroundImage: 'url(http://elikirk.com/demos/liquipel/images/water-layer-2.png)'},
		// layer_c:{ backgroundImage: 'url(http://elikirk.com/demos/liquipel/images/water-layer-3.png)'},
		// layer_d:{ backgroundImage: 'url(http://elikirk.com/demos/liquipel/images/water-layer-4.png)'},

		// hola:{
		// 	padding: '1rem',
		// 	fontSize: 60,
		// 	fontWeight: 700,
		// 	zIndex: 99,
		// 	background: 'inherit',
		// 	textShadow: '0 0 5px rgba(0,0,0,.75)'
		// }

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
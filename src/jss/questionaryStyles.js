import {createUseStyles} from 'react-jss'
import * as mixins from './mixins'
import * as settings from './settings'
const {large, mid, small} = settings.viewports


export default function questionaryStyles(custom) {
  const styles = createUseStyles({
  	hidden:{
  		...mixins.hidden()
  	},

  	full_container:{
  		...mixins.flexAll('column', 'center', 'center'),
  		width: '100%',
  		height: '100vh',
  		zIndex: 99,
  		position: 'relative',
  	},

  	main_container: props => ({
  		...mixins.widthConstrain(props.sliderWidth),
  		boxSizing: 'border-box',
  	}),


    question_item: {
    	boxSizing: 'border-box',
    	padding: props => props.spacing,
    	// width: 300,
    },

    question_text:{
    	marginTop: 0,
    	marginBottom: props => props.spacing,
    	textAlign: 'center',
    	fontWeight: 700,
    	fontSize: 24,
    },

    form:{
    	...mixins.flexAll('column', 'center', 'center'),
    },

    input:{
    	border: 'none',
    	textAlign: 'center',
    	padding: props => props.spacing / 2,
    	borderRadius: props => props.spacing / 2,
    	boxSizing: 'border-box',
  		width: '100%',
    },

    options_container: props => ({
    	...mixins.flexedGrid(
    		{cols: 1, margin: props.spacing },
    		{cols: 2, margin: props.spacing },
    		{cols: 2, margin: props.spacing },
    		false,
    		{large: props.sliderWidth, mid: props.sliderWidth, small: small}
    	),
    }),

    button:{
    	display: 'inline-block',
    	border: '1px solid white',
    	textAlign: 'center',
    	color: 'white',
    	backgroundColor: 'transparent',
    	padding: props => props.spacing / 2,
    	borderRadius: props => props.spacing / 2,
    	boxSizing: 'border-box',
      '&.active':{
        backgroundColor: '#234584'
      },
    },




    slider_controls:{
    	...mixins.flexAll('row', 'flex-end', 'center'),
    	boxSizing: 'border-box',
    	paddingLeft: props => props.spacing,
    	paddingRight: props => props.spacing,
    },

    slider_button: props => ({
    	display: 'block',
  	  padding: [props.spacing / 2, props.spacing],
    	borderRadius: props.spacing / 2,
    	border: 'none',
    	fontWeight: 700,
    	color: 'white',
      textTransform: 'uppercase',
    	backgroundColor: '#77827e',
      ...mixins.notFirst({
        marginLeft: props.spacing,        
      }),
    	'&.disabled':{
    		opacity: .25,
    	}
    }),

    alerts: props => ({
      ...mixins.widthConstrain(props.sliderWidth),
      marginTop: props.spacing,
      padding: [0, props.spacing],
      boxSizing: 'border-box',
    }),

    alert_message:{
      width: '100%',
      padding: [3, 6],
      boxSizing: 'border-box',
      backgroundColor: '#c12d22',
      color: 'white',
      fontSize: 14,
      borderRadius: 3,
      border: 'none',
      textAlign: 'left',
      '&:not(:first-child)':{
        marginTop: 3,
      },
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

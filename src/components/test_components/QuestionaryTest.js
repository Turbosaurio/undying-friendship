import React, {useState, useRef} from 'react'
import Slider from 'react-slick'
import {createUseStyles} from 'react-jss'

import * as mixins from '../../jss/mixins'
import * as settings from '../../jss/settings'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const {large, mid} = settings.viewports


const questionaryStyles = createUseStyles({

	full_container:{
		...mixins.flexAll('row', 'center', 'center'),
		width: '100%',
		height: '100vh',
	},

	main_container:{
		...mixins.widthConstrain(mid),
		boxSizing: 'border-box',
	},

	column_parallax: {
	  ...mixins.fullSize(),
	  zIndex: 0,
	  ...mixins.respondTo(large, {
	    clip: "rect(0, auto, auto, 0)",
	    "-webkit-clip-path": "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
	    "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
	  })
	},
	item_video_parallax: {
		display: "block",
		...mixins.respondTo(large, {
		  width: "100%"
		}),
    ...mixins.respondToMax(large, {
      position: "absolute",
      left: 0,
      top: 0,
      width: "auto",
      height: "100vh"
    }),
    ...mixins.respondToMax(mid, {
      width: "100vw",
      height: "auto"
    }),
    ...mixins.respondTo(large, {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%"
    })
  },

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
  	...mixins.flexAll('row', 'center', 'center'),
  	...mixins.flexedGrid(
  		{cols: 1, margin: props.spacing },
  		{cols: 2, margin: props.spacing },
  		{cols: 3, margin: props.spacing },
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
  },

  next_button: props => ({
  	display: 'block',
  	width: props.spacing * 2,
  	height: props.spacing * 2,
  	padding: 0,
  	textAlign: 'center',
  	border: 'none',
  	borderRadius: '50%',
  	marginTop: props.spacing,
  	marginLeft: 'auto',
  	fontWeight: 700,
  	color: 'white',
  	backgroundColor: '#77827e',
  	position: 'relative',
  	
  }),

})


const QuestionaryTest = _ => {

	const [state, setState] = useState({
		slideIndex: 0,
		updateCount: 0,
		slider: useRef(null),
		slickSettings:{
			infinite: false,
			dots: true,
		  infinite: true,
		  speed: 500,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  adaptiveHeight: 1,

		  // afterChange: _ => { setState( state => ({ ...state, updateCount: state.updateCount + 1}))},
		  // beforeChange: (current, next) => setState({slideIndex: next})

		  // centerMode: true,
		},

		questions:[
			{
				key: 'q1',
				textQuestion: 'provide your details',
				type: 'input',
				options: ['name', 'first name', 'second name', 'date of birth', 'nationality', 'email'],
				answer: '',
			},
			{
				key: 'q5',
				textQuestion: 'Whats the worst thing you can say on a first date?',
				type: 'options',
				options: ['talk about her daddy issues', 'tell her to shut up, that you know best', 'talk about the shit you took earlier'],
				answer: '',
			},
			{
				key: 'q6',
				textQuestion: 'Would you rather be stuck in a house with someone you hate or be stuck in a house alone?',
				type: 'options',
				options: ['yes', 'no', 'I dont know'],
				answer: '',
			}
		],
	})



	const jss = questionaryStyles({
		spacing: 20
	})

	const InputOptions = options => {
		return(
			<form className={jss.options_container}>
				{options.options.map( o => <input className={jss.input} type="text" placeholder={o} />)}
			</form>
		)
	}

	const ButtonOptions = options => {
		return(
			<div className={jss.options_container}>
				{options.options.map( o => <button className={jss.button}>{o}</button>)}
			</div>
		)
	}

	const OptionsType = ({type, options}) => {
		switch(type){
			case 'options':
				return <ButtonOptions options={options}/>
			case 'input':
				return <InputOptions options={options} />
			default: return <div>options not valid</div>
		}
	}

	return(
		<div className={jss.full_container}>
			<div className={jss.main_container}>
				<Slider {...state.slickSettings} ref={state.slider}>
					{
						state.questions.map(({key, textQuestion, type, options}) =>{
							return(
								<div className={jss.question_item} key={key}>
									<h3 className={jss.question_text}>{textQuestion}</h3>
									<OptionsType type={type} options={options} />
									<button
										className={jss.next_button}
										value={state.slideIndex}
										onClick={ e => state.slider.slickGoTo(e.target.value)}
									>next</button>
								</div>
							)
						})
					}
				</Slider>
			</div>
		</div>
	)
}



export default QuestionaryTest
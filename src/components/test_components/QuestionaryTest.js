import React, {useState, useRef} from 'react'
import Slider from 'react-slick'
import {createUseStyles} from 'react-jss'

import * as mixins from '../../jss/mixins'
import * as settings from '../../jss/settings'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const {large, mid, small} = settings.viewports


const questionaryStyles = createUseStyles({

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

	column_parallax: {
	  ...mixins.fullSize(),
	  ...mixins.flexAll('row', 'center', 'center'),
	  backgroundColor: 'black',
	  zIndex: 0,
	  ...mixins.respondTo(large, {
	    clip: "rect(0, auto, auto, 0)",
	    "-webkit-clip-path": "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
	    "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
	  })
	},

	item_video_parallax: {
		display: "block",
		margin: 'auto',
		opacity: .25,
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
      width: "100vw",
      height: '100vh',
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
  },

  slider_controls:{
  	...mixins.flexAll('row', 'space-between', 'center'),
  	boxSizing: 'border-box',
  	marginTop: props => props.spacing,
  	paddingLeft: props => props.spacing,
  	paddingRight: props => props.spacing,
  },

  slider_button: props => ({
  	display: 'block',
	  padding: props.spacing / 2,
  	borderRadius: props.spacing / 2,
  	border: 'none',
  	fontWeight: 700,
  	color: 'white',
  	backgroundColor: '#77827e',
  	'&.disabled':{
  		opacity: .25,
  	}
  }),
})


const QuestionaryTest = _ => {



	const [slider, setSlider] = useState({
		slideIndex: 0,
		updateCount: 0,
	})

	const sliderRef = useRef(null)

	const slickSettings = {
		infinite: false,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		adaptiveHeight: 1,
		afterChange: _ => {setSlider( slider => ({...slider, updateCount: slider.updateCount + 1}))},
		beforeChange: (current, next) => setSlider( slider => ({...slider, slideIndex: next})),
	}


	const [state, setState] = useState({

		questions:[
			{
				key: 'q1',
				text: 'provide your details',
				type: 'input',
				options: ['first name', 'second name', 'date of birth', 'nationality', 'email'],
			},
			{
				key: 'q2',
				text: 'Whats the worst thing you can say on a first date?',
				type: 'options',
				options: ['talk about her daddy issues', 'tell her to shut up, that you know best', 'talk about the shit you took earlier'],
			},
			{
				key: 'q3',
				text: 'Would you rather be stuck in a house with someone you hate or be stuck in a house alone?',
				type: 'options',
				options: ['yes', 'no', 'I dont know'],
			},
			{
				key: 'q4',
				text: 'If you were the opposite gender for one day, what would you do?',
				type: 'options',
				options: ['abuse my male/female privilege', 'talk shit about my previous gender']
			},
			{
				key: 'q5',
				text: 'give us more infomation about yourself',
				type: 'input',
				options: ['profession', 'hours of sleep', 'zodiac sign']
			},
			{
				key: 'q6',
				text: 'select your favorite president',
				type: 'select',
				options: ['lopez obrador', 'AMLO', 'Gansopolis'],
			}
		],
		answers:{
			'q1': {},
			'q5': {},
		}
	})



	const jss = questionaryStyles({
		spacing: 20,
		sliderWidth: 600,
	})

	const InputOptions = ({options, questionID}) => {
		return(
			<form className={jss.options_container}>
				{options.map( option =>{
					const key = option.toLowerCase().trim()
					return <input
						onChange={ e => {
							setState( state => ({
								...state,
								answers:{
									...state.answers,
									[questionID]:{
										...state.answers[questionID],
										[key]: e.target.value
									}
								}
							}))
						}}
						value={state.answers[questionID][key]}
						className={jss.input}
						type="text"
						placeholder={option} />
					})
				}
			</form>
		)
	}

	const ButtonOptions = ({options, questionID}) => {
		return(
			<div className={jss.options_container}>
				{options.map( option =>
					<button
						className={jss.button}
						value={option}
						onClick={ e => {
							setState(state => ({
								...state,
								answers: {
									...state.answers,
									[questionID]: e.target.value
								}
							}))
						}} 
					>{option}</button>)}
			</div>
		)
	}

	const SelectOptions = ({options, questionID}) => {
		return(
			<select onChange={ e => { setState( state => ({
				...state,
				answers:{
					...state.answers,
					[questionID]: e.target.value
				}
			}))}}>
				{options.map( option => 
					<option value={option}>
						{option}
					</option>
				)}
			</select>
		)
	}

	const OptionsType = ({type, ...restOfProps}) => {
		switch(type){
			case 'options':
				return <ButtonOptions {...restOfProps}/>
			case 'input':
				return <InputOptions {...restOfProps}/>
			case 'select':
				return <SelectOptions {...restOfProps}/>
			default: return <div>options not valid</div>
		}
	}

	return(
		<div className={jss.column_parallax}>
			<video loop={true} controls={false} autoPlay={true} muted={true} className={jss.item_video_parallax} src="https://first-metal.mozky.dev/video/main.mp4" />
			<div className={jss.full_container}>
				<div className={jss.main_container}>
					<Slider {...slickSettings} ref={sliderRef}>
						{
							state.questions.map(({
								key: questionKey,
								text: questionText,
								type: questionType,
								options: questionOptions
							}) =>{
								return(
									<div className={jss.question_item} key={questionKey}>
										<h3 className={jss.question_text}>{questionText}</h3>
										<OptionsType type={questionType} options={questionOptions} questionID={questionKey}/>
									</div>
								)
							})
						}
					</Slider>
					<div class={jss.slider_controls}>
						<button
							disabled={!slider.slideIndex > 0}
							className={`${jss.slider_button} ${!slider.slideIndex > 0 && 'disabled'}`}
							value={state.slideIndex - 1}
							onClick={ e => {sliderRef.current.slickGoTo(e.target.value)}}
						>Prev</button>
						<button
							disabled={slider.slideIndex === (state.questions.length - 1)}
							className={`${jss.slider_button} ${slider.slideIndex === (state.questions.length - 1) && 'disabled'}`}
							value={state.slideIndex + 1}
							onClick={ e => {sliderRef.current.slickGoTo(e.target.value)}}
						>Next</button>
					</div>
					<div style={{textAlign: 'center'}}>
						<div>{JSON.stringify(slider)}</div>
						<div>{JSON.stringify(state.answers)}</div>
					</div>
				</div>
			</div>
		</div>
	)
}



export default QuestionaryTest
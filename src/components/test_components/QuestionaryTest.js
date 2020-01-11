import React, {Fragment, useState, useRef} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import questionaryStyles from '../../jss/questionaryStyles'


const QuestionaryTest = _ => {
	const [slider, setSlider] = useState({
		slideIndex: 0,
		updateCount: 0,
	})

	const sliderRef = useRef(null)

	const slickSettings = {
		infinite: false,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		adaptiveHeight: true,
		afterChange: _ => {setSlider( slider => ({...slider, updateCount: slider.updateCount + 1}))},
		beforeChange: (current, next) => setSlider( slider => ({...slider, slideIndex: next})),
	}


	const [state, setState] = useState({
		thankyou: false,
		alerts: ['please fill all the fields', 'you forgot something in the first question'],
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
			<form className={jss(['options_container'])}>
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
						key={option.trim()}
						value={state.answers[questionID][key]}
						className={jss(['input'])}
						type="text"
						placeholder={option} />
					})
				}
			</form>
		)
	}

	const ButtonOptions = ({options, questionID}) => {
		return(
			<div className={jss(['options_container'])}>
				{options.map( option =>
					<button
						key={option.trim()}
						className={jss(['button'])}
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
					<option key={option.trim()} value={option}>
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

	const Alerts = ({message}) =>
		<div className={jss(['alerts'])}>
			{message.map( (m, i) => <div key={i} className={jss(['alert_message'])}>{m}</div>)}
		</div>

	const Thankyou = _ => <div>Thanks for participating</div>

	return(
		<div className={jss(['column_parallax'])}>
			<video loop={true} controls={false} autoPlay={true} muted={true} className={jss(['item_video_parallax'])} src="https://first-metal.mozky.dev/video/main.mp4" />
			<div className={jss(['full_container'])}>
				{
					!state.thankyou
					?	<div className={jss(['main_container'])}>
							<Slider {...slickSettings} ref={sliderRef}>
								{
									state.questions.map(({
										key: questionKey,
										text: questionText,
										type: questionType,
										options: questionOptions
									}) =>{
										return(
											<div className={jss(['question_item'])} key={questionKey}>
												<h3 className={jss(['question_text'])}>{questionText}</h3>
												<OptionsType type={questionType} options={questionOptions} questionID={questionKey}/>
											</div>
										)
									})
								}
							</Slider>
							<div className={jss(['slider_controls'])}>
								<button
									title="Go to previous question"
									disabled={!slider.slideIndex > 0}
									className={`${jss(['slider_button'])} ${!slider.slideIndex > 0 && 'disabled'}`}
									onClick={ _ => {sliderRef.current.slickGoTo(slider.slideIndex - 1)}}
								>Prev</button>
								<button
									title="Go to next question"
									disabled={slider.slideIndex === (state.questions.length - 1)}
									className={`${jss(['slider_button'])} ${slider.slideIndex === (state.questions.length - 1) && 'disabled'}`}
									onClick={ _ => {sliderRef.current.slickGoTo(slider.slideIndex + 1)}}
								>Next</button>
								<button
									title="Finish questionary"
									disabled={slider.slideIndex !== (state.questions.length - 1)}
									className={`${jss(['slider_button'])} ${slider.slideIndex !== (state.questions.length - 1) && 'disabled'}`}
									onClick={ _ => {setState(state=> ({...state, thankyou: true}))}}
								>End</button>
							</div>
						</div>
						: <div className={jss(['main_container'])}><Thankyou /></div>
				}
				<Alerts message={state.alerts} />
			</div>
		</div>
	)
}



export default QuestionaryTest
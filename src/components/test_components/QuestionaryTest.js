import React, {Fragment, useState, useRef} from 'react'
import uuidv4 from 'uuid/v4'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import questions from './questions'
import questionaryStyles from '../../jss/questionaryStyles'

import BackgroundVideo from './BackgroundVideo'
import ParallaxImages from './ParallaxImages'


const QuestionaryTest = _ => {

	const sliderRef = useRef(null)
	const jss = questionaryStyles({
		spacing: 20,
		sliderWidth: 600,
	})

	const [state, setState] = useState(questions)

	const [slider, setSlider] = useState({
		slideIndex: 0,
		updateCount: 0,

		currentQuestion: '',

		prevButtonStatus: false,
		nextButtonStatus: true,
		submitButtonStatus: false,
	})


	const slickSettings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		adaptiveHeight: true,
		focusOnSelect: true,
		
		afterChange: _ => {setSlider( slider => ({...slider, updateCount: slider.updateCount + 1}))},
		beforeChange: (current, next) =>{
			const {key} = state.questions[next]
			const prevButtonStatus = next > 0 ? true : false
			const nextButtonStatus = next === (state.questions.length - 1) ? false : true
			// const submitButtonStatus = next === (state.questions.length - 1) ? true : false
			setSlider( slider => ({
				...slider,
				slideIndex: next,
				currentQuestion: key,
				prevButtonStatus,
				nextButtonStatus,
				submitButtonStatus: !nextButtonStatus,
			}))


		},
	}

	function prevSlide(){
		sliderRef.current.slickGoTo(slider.slideIndex - 1)
	}

	function nextSlide(){
		sliderRef.current.slickGoTo(slider.slideIndex + 1)
		const {slideIndex} = slider
		const {key} = state.questions[slideIndex]
		if(Object.keys(state.answers[key]).length === 0){
			pushAlert(`errors in ${key}, click to go there`, slideIndex)
		}
	}



	function submit(){
		setState(state=> ({...state, thankyou: true, alerts: []}))
	}

	function pushAlert(text, inSlide){
		const alert = uuidv4()
		setState(state=>({
			...state,
			alerts:{
				...state.alerts,
				[alert]:{text: `${text}, in slide: ${inSlide}`, inSlide}
			}
		}))
	}

	function removeAlert(uuid){
		const {[uuid]: alertToRemove, ...restOfAlerts} = state.alerts
		setState( state=>({
			...state,
			alerts: restOfAlerts
		}))
	}



	const InputOptions = ({options, questionID}) => {
		return(
			<form className={jss(['options_container'])}>
				{options.map( ({placeholder, name, type}) =>{
					const attributes = {placeholder, name, type}
					return(
						<div key={`${questionID}${name}`}>
							<input
								onChange={ e => {
									setState( state => ({
										...state,
										answers:{
											...state.answers,
											[questionID]:{
												...state.answers[questionID],
												[name]: e.target.value
											}
										}
									}))
								}}
								value={state.answers[questionID][name]}
								className={jss(['input'])}
								{...attributes}
							/>
							<label className={jss(['hidden'])}>{placeholder}</label>
						</div>
					)
					})
				}
			</form>
		)
	}

	const ButtonOptions = ({options, questionID}) => {
		return(
			<div className={jss(['options_container'])}>
				{options.map( option =>{
					return <button
						key={option.trim()}
						className={`${jss(['button'])} ${state.answers[questionID] === option ? 'active' : ''}`}
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
					>{option}</button>
				})}
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

	const Alerts = ({messages}) =>
		<div className={jss(['alerts'])}>
			{Object.keys(messages).map( (mess, i) => {
				const m = messages[mess]
				return <button
					key={i}
					onClick={ _ => {sliderRef.current.slickGoTo(m.inSlide)}}
					className={jss(['alert_message'])}
				>{m.text}</button>
			})}
		</div>

	const Thankyou = _ => <div className={jss(['tanks_message'])}>Thanks for participating!</div>

	return(
		<BackgroundVideo src="https://first-metal.mozky.dev/video/main.mp4" videoPosition="parallax" backgroundColor="#000" videoOpacity={.25}>
			
			<ParallaxImages images={[
				'http://elikirk.com/demos/liquipel/images/water-layer-1.png',
				'http://elikirk.com/demos/liquipel/images/water-layer-2.png',
				'http://elikirk.com/demos/liquipel/images/water-layer-3.png',
				'http://elikirk.com/demos/liquipel/images/water-layer-4.png'
				]}
				speed={.015}
			/>

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
									disabled={!slider.prevButtonStatus}
									className={`${jss(['slider_button'])} ${!slider.prevButtonStatus ? 'disabled' : ''}`}
									onClick={prevSlide}
								>Prev</button>
								<button
									title="Go to next question"
									disabled={!slider.nextButtonStatus}
									className={`${jss(['slider_button'])} ${!slider.nextButtonStatus ? 'disabled' : ''}`}
									onClick={nextSlide}
								>Next</button>
								<button
									title="Finish questionary"
									disabled={!slider.submitButtonStatus}
									className={`${jss(['slider_button'])} ${!slider.submitButtonStatus ? 'disabled' : ''}`}
									onClick={submit}
								>End</button>
							</div>
							<div className={jss(['privacy'])}><a href="#">Privacy Policy</a></div>
						</div>
						: <div className={jss(['main_container'])}><Thankyou /></div>
				}
				<Alerts messages={state.alerts} />
				<div style={{
					position: 'fixed',
					right: 0,
					bottom: 0,
					padding: 10,
					background: 'white',
					color: 'black',
					width: 400,
				}}>
					<button onClick={ _ => {
						const randomSlide = Math.floor(Math.random() * state.questions.length)
						pushAlert('hola push alert', randomSlide)
					}}>push new alert</button>
					<div>{Object.keys(slider).map( i => <div>{`${i}: ${slider[i]}`}</div>)}</div>
					<div>{JSON.stringify(state.answers)}</div>
				</div>
			</div>
		</BackgroundVideo>
	)
}



export default QuestionaryTest
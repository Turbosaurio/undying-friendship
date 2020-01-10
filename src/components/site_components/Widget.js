import React, {Fragment} from 'react'
import {siteColors, widgetStyles} from '../../jss/site'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Widget = ({contents, widgetSettings}) => {

	const {name, img, excerpt, itemsList} = contents
	const {colorScheme, summaryLayout, listColumns, widgetSpacing, showImage, slick} = widgetSettings

	const jssProps = {
		margin: widgetSpacing,
		cols: listColumns
	}

	const jss = widgetStyles(jssProps)

	const jssColors = siteColors({
		bg_1: '#0f3559',
		bg_2: '#36422f',
		bg_3: '#8e1f1f',
		bg_4: '#4b5e50',
	})

	const WidgetTitle = _ => <h3 className={jss(['item_name'])}>{name}</h3>
	const WidgetImage = _ => showImage ? <div className={jss(['image_holder'])}><img className={jss(['image'])} src={img.src} alt={img.alt}/></div> : null
	const WidgetExcerpt = _ => <div show={excerpt.show.toString()}>{excerpt.text}</div>

	const InnerRow = ({children}) => <div className={jss(['item_inner_row'])}>{children}</div>
	const BackgroundSummary = ({children}) => <div className={jss(['item_summary_background'])} style={{backgroundImage: `url(${img.src})`}}>{children}</div>


	const WidgetContents = _ => {
		switch(summaryLayout){
			case 'a': return (
				<Fragment>
					<WidgetTitle/>
					<InnerRow>
						<WidgetImage/>
						<WidgetExcerpt/>
					</InnerRow>
				</Fragment>
			)
			case 'b': return (
				<InnerRow>
					<WidgetImage/>
					<div>
						<WidgetTitle/>
						<WidgetExcerpt/>
					</div>
				</InnerRow>
			)
			case 'c': return (
				<Fragment>
					<BackgroundSummary><WidgetTitle/></BackgroundSummary>
					<WidgetExcerpt/>
				</Fragment>
			)
			case 'd': return (
				<InnerRow>
					<WidgetTitle/>
					<BackgroundSummary>
						<WidgetExcerpt/>
					</BackgroundSummary>
				</InnerRow>
			)
			case 'e': return (
				<Fragment>
					<WidgetTitle/>
					<BackgroundSummary>
						<WidgetExcerpt/>
					</BackgroundSummary>
				</Fragment>
			)
			case 'f': return (
				<BackgroundSummary>
					<WidgetTitle/>
					<WidgetExcerpt/>
				</BackgroundSummary>
			)
			default: return null
		}
	}


	const list = itemsList.list.map( (i, x) =>
		<div className={jss(['list_item'])} key={x}>
			<div>{i.name}</div>
			<div>{i.text}</div>
		</div>
	)

	const slickSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}

	return(
		<section>
			<div className={jssColors([`coloring_${colorScheme}`])}>
				<div className={jss([`item_summary_${summaryLayout}`, 'item_summary'])}>
					<WidgetContents />
				</div>
				{slick
					? <Slider {...slickSettings}>{list}</Slider>
					: <div show={itemsList.show.toString()} className={jss(['list_grid', `list_grid_${listColumns}`])}>
						{list}
					</div>
				}
			</div>
		</section>
	)
}

export default Widget
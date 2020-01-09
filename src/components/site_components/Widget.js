import React, {Fragment} from 'react'
import {siteColors, widgetStyles} from '../../jss/site'

const Widget = ({contents, widgetSettings}) => {

	const {name, img, excerpt, itemsList} = contents
	const {colorScheme, summaryLayout, listColumns, widgetSpacing, showImage} = widgetSettings

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

	const wTitle = <h3 className={jss(['item_name'])}>{name}</h3>
	const wImage = showImage ? <div className={jss(['image_holder'])}><img className={jss(['image'])} {...img}/></div> : null
	const wExcerpt = <div show={excerpt.show.toString()}>{excerpt.text}</div>

	const InnerRow = ({children}) => <div className={jss(['item_inner_row'])}>{children}</div>
	const BackgroundSummary = ({children}) => <div className={jss(['item_summary_background'])} style={{backgroundImage: `url(${img.src})`}}>{children}</div>


	const WidgetContents = _ => {
		switch(summaryLayout){
			case 'a': return (
				<Fragment>
					{wTitle}
					<div className={jss(['item_inner_row'])}>{wImage}{wExcerpt}</div>
				</Fragment>
			)
			case 'b': return (
				<Fragment>
					<div className={jss(['item_inner_row'])}>
						{wImage}
						<div>{wTitle}{wExcerpt}</div>
					</div>
				</Fragment>
			)
			case 'c': return (
				<Fragment>
					<BackgroundSummary>{wTitle}</BackgroundSummary>
					{wExcerpt}
				</Fragment>
			)
			case 'd': return (
				<InnerRow>
					{wTitle}
					<BackgroundSummary>{wExcerpt}</BackgroundSummary>
				</InnerRow>
			)
			case 'e': return (
				<Fragment>
					{wTitle}
					<BackgroundSummary>{wExcerpt}</BackgroundSummary>
				</Fragment>
			)
			case 'f': return (
				<BackgroundSummary>
					{wTitle}{wExcerpt}
				</BackgroundSummary>
			)
			default: return null
		}
	}

	return(
		<section className={jss(['col_fill'])}>
			<div
				className={`${jss(['col_inner'])} ${jssColors([`coloring_${colorScheme}`])}`}
			>
				<div
					className={jss([`item_summary_${summaryLayout}`, 'item_summary'])}
				>
					<WidgetContents />
					
					
				</div>
				<div
					show={itemsList.show.toString()}
					className={jss(['list_grid', `list_grid_${listColumns}`])}
				>
					{
						itemsList.list.map( i =>
							<div className={jss(['list_item'])} key={i}>
								<div>{i.name}</div>
								<div>{i.text}</div>
							</div>
						)
					}
				</div>
			</div>
		</section>
	)
}

export default Widget
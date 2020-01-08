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

	const wTitle = <h3 className={jss.item_name}>{name}</h3>
	const wImage = showImage ? <div className={jss.image_holder}><img className={jss.image} {...img}/></div> : null
	const wExcerpt = <div show={excerpt.show.toString()}>{excerpt.text}</div>



	const WidgetContents = _ => {
		switch(summaryLayout){
			case 'a': return (
				<Fragment>
					{wTitle}
					<div className={jss.item_inner_row}>{wImage}{wExcerpt}</div>
				</Fragment>
			)
			case 'b': return (
				<Fragment>
					<div className={jss.item_inner_row}>
						{wImage}
						<div>{wTitle}{wExcerpt}</div>
					</div>
				</Fragment>
			)
			case 'c': return (
				<Fragment>
					{wImage}
					<div className={jss.item_inner_row}>{wTitle}{wExcerpt}</div>
				</Fragment>
			)
			case 'd': return (
				<Fragment>
					{wTitle}
					{wImage}
					{wExcerpt}
				</Fragment>
			)
			case 'e': return (
				<Fragment>
					{wTitle}
					<div className={jss.item_summary_background} style={{backgroundImage: `url(${img.src})`}}>{wExcerpt}</div>
				</Fragment>
			)
			case 'f': return (
				<div className={jss.item_summary_background} style={{backgroundImage: `url(${img.src})`}}>
					{wTitle}{wExcerpt}
				</div>
			)
			default: return null
		}
	}

	return(
		<section className={jss.col_fill}>
			<div className={`${jss.col_inner} ${jssColors[`coloring_${colorScheme}`]}`}>
				<div className={`${jss[`item_summary_${summaryLayout}`]} ${jss.item_summary}`}>
					<WidgetContents />
					
					
				</div>
				<div show={itemsList.show.toString()} className={`${jss.list_grid} ${jss[`list_grid_${listColumns}`]}`}>
					{
						itemsList.list.map( i =>
							<div className={jss.item} key={i}>{i}</div>
						)
					}
				</div>
			</div>
		</section>
	)
}

export default Widget
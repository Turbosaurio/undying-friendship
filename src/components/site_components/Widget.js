import React, {useEffect} from 'react'
import {siteColors, widgetStyles} from '../../jss/site'

const Widget = ({contents, widgetSettings}) => {

	const {name, img, excerpt, itemsList} = contents
	const {colorScheme, summaryLayout, listColumns, widgetSpacing} = widgetSettings

	const jssProps = {
		margin: widgetSpacing,
		cols: listColumns
	}

	const jss = widgetStyles(jssProps)

	const jssColors = siteColors({
		bg_color_1: '#ef2c13',
		color_1: '#fff',
		bg_color_2: '#134aef',
		color_2: '#fff',
		bg_color_3: '#ef1334',		
		color_3: '#fff',
	})

	// useEffect( _ => {
	// 	const rule = sheet.getRule('list_grid')
	// 	jss.deleteRule('list_grid').addRule(rule)
	// }, [listColumns])


	return(
		<section className={jss.col_fill}>
			<div className={`${jss.col_inner} ${jssColors[`coloring_${colorScheme}`]}`}>
				<div className={`${jss[`item_${summaryLayout}_summary`]} ${jss.item_summary}`}>
					<img className={jss.image} {...img} />
					<div>
						<h3>{name}</h3>
						<div show={excerpt.show.toString()}>{excerpt.text}</div>
					</div>
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
import React from 'react'
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
		bg_1: '#0f3559',
		bg_2: '#36422f',
		bg_3: '#8e1f1f',
		bg_4: '#4b5e50',
	})

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
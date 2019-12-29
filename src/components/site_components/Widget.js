import React from 'react'
import {connect} from 'react-redux'
import {siteColors, widgetStyles} from '../../jss/site'

const Widget = ({contents, widgetSettings}) => {

	const {name, img, excerpt, itemsList} = contents
	const {colorScheme, summaryLayout, listColumns, widgetSpacing} = widgetSettings

	const theme = {
		bg_color_1: '#ef2c13',
		color_1: '#a58f68',
		bg_color_2: '#134aef',
		color_2: '#68a586',
		bg_color_3: '#ef1334',		
		color_3: '#9f68a5',
	}

	const jss = widgetStyles({
		margin: widgetSpacing,
		cols: listColumns
	})
	const jssColors = siteColors(theme)

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


const mapStateToProps = ({mongo}) => {
	const widgetSettings = mongo.settings.widgets
	return {widgetSettings}
}

export default connect(mapStateToProps)(Widget)
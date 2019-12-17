import React, {useState} from 'react'
import {siteColors, widgetStyles} from '../../jss/site'

import TogglePanel from '../ui_components/TogglePanel'

const Widget = ({contents}) => {
	const {name, img, excerpt, itemsList} = contents

	const [listColumns, setListColumns] = useState(itemsList.columns)
	const [spacing, changeSpacing] = useState(20)

	const [colors, changeColors] = useState('a_a')

	const theme = {
		bg_color_1: '#ef2c13',
		color_1: '#a58f68',
		bg_color_2: '#134aef',
		color_2: '#68a586',
		bg_color_3: '#ef1334',		
		color_3: '#9f68a5',
	}

	const jss = widgetStyles(parseInt(spacing))
	const jssColors = siteColors(theme)

	return(
		<section className={jss.col_fill}>
			<div className={`${jss.col_inner} ${jssColors[`coloring_${colors}`]}`}>

				<TogglePanel name="Widget Options" initial={true}>
					<div>
						<select defaultValue={colors} onChange={ e => changeColors(e.target.value)}>
							<option disabled>Colour theme</option>
							<option>a_a</option>
							<option>a_b</option>
							<option>b_b</option>
							<option>b_c</option>
							<option>c_c</option>
						</select>
					</div>
					<div>
							<select defaultValue={listColumns} onChange={ e => setListColumns(e.target.value)}>
							<option disabled>Numer of columns for lists</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
						</select>
					</div>
					<div>
							<select defaultValue={parseInt(spacing)} onChange={ e => changeSpacing(e.target.value)}>
							<option disabled>Spacing in pixels</option>
							<option>10</option>
							<option>20</option>
							<option>30</option>
						</select>
					</div>
				</TogglePanel>


				<h3>{name}</h3>
				<img show={img.show.toString()} className={jss.image} {...img} />
				<div show={excerpt.show.toString()}>{excerpt.text}</div>
				<div show={itemsList.show.toString()} className={jss[`list_${listColumns}_cols`]}>
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
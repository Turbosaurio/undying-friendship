import React from 'react'

const Widget = ({contents, jss}) => {
	const {name, img, excerpt, itemsList} = contents
	return(
		<section className={jss.col_fill}>
			<div className={jss.col_inner}>
				<h3>{name}</h3>
				<img show={img.show.toString()} className={jss.image} {...img} />
				<div show={excerpt.show.toString()}>{excerpt.text}</div>
				<div show={itemsList.show.toString()} className={jss.list_3_cols}>
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
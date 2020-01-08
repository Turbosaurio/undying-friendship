import {
	viewports,

} from './settings'

const {large, mid, small} = viewports

export const rePixel = num => `${num}px`
export const unPixel = num => parseInt(num, 10)


export const hidden = _ =>{
	return{
		position: 'absolute',
		top: 0,
		left: 0,
		width: 0,
		height: 0,
		overflow: 'hidden',
	}
}




export const strippedList = _ =>{
	return{
		padding: 0,
		margin: 0,
		listStyle: 'none',
	}
}


export const hideText = _ =>{
	return{
		color: 'transparent',
		overflow: 'hidden'
	}
}

export const buttonHideText = _ => {
	return{
		...hideText(),
		border: 'none',
	}
}

export const makeSquare = size => {
	return{
		display: 'block',
		width: size,
		height: size
	}
}

export const makeCircle = size => {
	return{
		...makeSquare(size),
		borderRadius: '50%',
	}
}

export const widthConstrain = maxWidth => {
	return{
		maxWidth,
		width: '100%',
		marginLeft: 'auto',
		marginRight: 'auto',
	}
}


export const fullSize = _ => ({
	display: 'block',
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
})

export const pseudo = (position = 'before', rest) =>{
	return{
		[`&:${position}`]:{
			...rest,
			content: '""',
			display: 'block',
		}
	}
}

export const pseudoBoth = rest => {
	return{
		'&:before,&:after':{
			content: '""',
			display: 'block',
			...rest,
		}
	}
}

export const mask = (position = 'before', rest) => ({
	position: 'relative',
	...pseudo(position, {
		position: 'absolute',
		...rest
	})
})

export const maskFullsize = (position = 'before', rest) => ({
	...mask(position, {
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		...rest
	})
})

export const pseudosCross = color => {
	return{
		...pseudoBoth({
			position: 'absolute',
			top: '49%',
			left: 'calc(50% - 8px)',
			width: 'calc(100% - 16px)',
			height: '6%',
			backgroundColor: color,
		}),
		'&:before':{ transform: 'rotate(45deg)'},
		'&:after':{ transform: 'rotate(-45deg)'},
	}
}

export const notFirst = obj =>{
	return{
		'&:not(:first-child)':{
			...obj
		}
	}
}

export const hamburgerGradient = (width, height, color) => {
	const left = `calc(50% - ${width / 2}px)`
	const top = `calc(50% - ${height / 2}px)`
	return{
		...pseudo('before', {
			top, left, width, height,
			position: 'absolute',

			backgroundImage:`
				linear-gradient(to bottom,
					${color} 20%,
					transparent 20%,
					transparent 40%,
					${color} 40%,
					${color} 60%,
					transparent 60%,
					transparent 80%,
					${color} 80%
				)
			`,
		})
	}
}

export const optionsGradient = (width, height, color, bg) => {
	return{
		...hamburgerGradient(width, height, color),
		...pseudo('after', {
			position: 'absolute',
			top: 8,
			left: 11,
			width: 2,
			height: 16,
			backgroundColor: bg,
		})
	}
}

export const respondToMax = (max, obj) => {
	return{
		[`@media (max-width: ${max}px)`]:{
			...obj
		}
	}
}

export const respondToMinMax = (min, max, obj) => {
	return{
		[`@media (min-width: ${min}px) and (max-width: ${max}px)`]:{
			...obj
		}
	}
}

export const respondTo = (min, obj) => {
	return{
		[`@media (min-width: ${min}px)`]:{
			...obj
		}
	}
}


export const hover = (content, descriptor = null) => {
	const des = descriptor === null ? '' : `,&:${descriptor}`
	return{
		[`&:hover,&:focus,&.open${des}`]:{
			...content,
		}
	}

}

export const flexAll = (
	flexDirection = 'row',
	justifyContent = 'flex-start',
	alignItems = 'stretch',
	flexWrap = 'nowrap') => {
	return{
		display: 'flex',
		flexDirection,
		justifyContent,
		alignItems,
		flexWrap,
	}
}

export const flexedGridItem = (total, margin, expand = true) => {
	const minus = total - 1
	const plus = total + 1
	

	const width = `calc(100% / ${total} - ${Math.floor(margin * minus / total)}px - 1px)`
	const stretch = expand
		? {
			
			flexGrow: 1,
			flexBasis: width,
		} : {
			flex: 'none',
			width
		}

	if(margin > 0){
		return{
			'&>*':{
				...stretch,
				marginLeft: margin,
				[`&:nth-child(n+${plus})`]:{ marginTop: margin},
				[`&:nth-child(${total}n-${minus})`]:{ marginLeft: 0},
			}
		}
	}
	return{
		'&>*':{
			width: `calc(100% / ${total})`
		}
	}
}

export const flexedGrid = (
		mobile = {}, 
		tablet = {}, 
		desktop = {}, 
		expand = true
	) =>{
	const stretch = expand ? 'stretch' : 'flex-start'
	
	const mobileGrid = Object.values(mobile).length > 0
		&& respondToMax(large, {
			...flexedGridItem(mobile.cols, mobile.margin)
		})
	const tabletGrid = Object.values(tablet).length > 0
		&& respondToMinMax(mid, large, {
			...flexedGridItem(tablet.cols, tablet.margin)
		})
	const desktopGrid = Object.values(desktop).length > 0
		&& respondTo(large, {
			...flexedGridItem(desktop.cols, desktop.margin)
		})
	return{
		...flexAll('row', 'center', stretch, 'wrap'),
		...mobileGrid, ...tabletGrid, ...desktopGrid,
	}
}


// export const flexedGridNonResponsive = (columns, margin, expand) => {
// 	return{'&>*':{ ...flexedGridBase(columns, margin, expand)}}
// }


export const singleRow = marginLeft => {
	return{
		...flexAll(),
		'&>*':{
			flex: 1,
		},
		'&>*:not(first-child)':{
			marginLeft
		}
	}
}

export const invertTheme = theme => {
	const {
		color_1, bg_color_1,
		color_2, bg_color_2,
		color_3, bg_color_3,
	} = theme
	return{
		color_1: bg_color_1,
		bg_color_1: color_1,
		color_2: bg_color_2,
		bg_color_2: color_2,
		color_3: bg_color_3,
		bg_color_3: color_3,

	}
}


export const bgCover = _ => ({
	background:{
		position: 'center center',
		repeat: 'no-repeat',
		size: 'cover',
	}
})


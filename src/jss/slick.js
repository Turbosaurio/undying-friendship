import {createUseStyles} from 'react-jss'

export default createUseStyles({
	'slider':{

		position: 'relative',
		display: 'block',
		boxSizing: 'border-box',
		'-webkit-user-select': 'none',
		userSelect: 'none',
		'-webkit-touch-callout': 'none',
		'-khtml-user-select': 'none',
		'touch-action': 'pan-y',
		'-webkit-tap-highlight-color': 'transparent',

		'&.slick-list':{
			position: 'relative',
			display: 'block',
			overflow: 'hidden',
			margin: 0,
			padding: 0,

			'&:focus':{ outline: 'none'},
			'&.dragging':{
				cursor: 'pointer',
				cursor: 'hand',
			},

			'&.slick-track, &.slick-list':{
				transform: 'translate3d(0,0,0)'
			},

			'&.slick-track':{
				position: 'relative',
				top: 0,
				left: 0,
				display: 'block',
				marginLeft: 'auto',
				marginRight: 'auto',
				'&:before, &:after':{
					content: '""',
					display: 'table'
				},
				'&:after':{
					clear: 'both',
				},

				'&.slick-loading':{
					'&.slick-track':{
						visibility: 'hidden',
					}
				},

				
			},


		},




	}
})
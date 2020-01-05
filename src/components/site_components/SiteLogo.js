import React from 'react'
import {createUseStyles} from 'react-jss'
import * as mixins from '../../jss/mixins'
import * as settings from '../../jss/settings'

const {small, mid, large} = settings.viewports
const {white} = settings.ui_colours

const siteLogoStyles = createUseStyles({
	header_logo: props => ({
		...mixins.flexAll('row', 'flex-start', 'center'),
		padding: [11, 0],
		fontSize: '1.5rem',
		textDecoration: 'none',
		textTransform: 'uppercase',
		...mixins.pseudo('before', {
			width: '1rem',
			height: '1rem',
			marginRight: 10,
			backgroundColor: white,
		}),
		...mixins.respondTo(large, {
			justifyContent: 'center',
			fontSize: '2.5rem',
			'&:before':{
				width: props.logo_size,
				height: props.logo_size,
			}
		})
	}),
	header_logo_inner:{

	},
})

const SiteLogo = () => {
	const logoJSS = siteLogoStyles({logo_size: 70})
	return(
		<a className={logoJSS.header_logo}>
			<div className={logoJSS.header_logo_inner}>Here goes a name</div>
		</a>
	)
}

export default SiteLogo
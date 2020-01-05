import React from 'react'
import SiteLogo from './SiteLogo'
import {createUseStyles} from 'react-jss'
import SiteMenu from './SiteMenu'
import * as mixins from '../../jss/mixins'
import * as settings from '../../jss/settings'

const {large} = settings.viewports

const jss = createUseStyles({
	header_main:{
		...mixins.widthConstrain(large),
		boxSizing: 'border-box',
		padding: [0, 10],
		...mixins.respondTo(large, {
			padding: 0
		})
	}
})

const SiteHeader = () => {
	const headerJSS = jss()
	return(
		<header className={headerJSS.header_main} aria-label="Site's header">
			<SiteLogo />
			<SiteMenu />
		</header>
	)
}

export default SiteHeader
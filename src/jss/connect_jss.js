import React from 'react'

export default (jss, Component) =>{
	return props => {
		return <Component jss={jss()} {...props}/>
	}
}
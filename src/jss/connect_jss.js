import React from 'react'

export default (jss, Component) =>{
	return _ => {
		return <Component jss={jss()}/>
	}
}
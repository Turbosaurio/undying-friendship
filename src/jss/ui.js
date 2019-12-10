import React from 'react'
import {createUseStyles} from 'react-jss'

export const connect_jss = (jss, Component) =>{
	return _ => {
		return <Component jss={jss()}/>
	}
}
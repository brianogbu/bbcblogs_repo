import { useState } from 'react'

export default function Topic(props) {
	return (
		<>
			<div className="a">{props.title}</div>
			<>{props.children}</>
		</>
	)
}

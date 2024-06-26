import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Post(props) {
	return (
		<Link to={`/read/${props.id}`}>
			<div className="post">
				<span>
					<img src={props.image} width={'240'} height={'100'} />
				</span>
				<span className="text1">
					<div className="link1">{props.link}</div>
					<div className="text2">{props.text}</div>
				</span>
			</div>
		</Link>
	)
}

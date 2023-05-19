import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/boards'>Board</Link>
			</nav>
		</>
	);
}

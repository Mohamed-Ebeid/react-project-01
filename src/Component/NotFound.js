import {Link} from 'react-router-dom'

const NotFound = () => {
	return (
		<div className="not-found">
		<h1>Wrong Address!</h1>		
		<Link to="/">Home</Link>	
		</div>
	);
}

export default NotFound;
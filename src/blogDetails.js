import {useParams, useHistory} from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
	const {id} = useParams();
	const { data:blog, isPen, error } = useFetch('http://localhost:8000/blogs/' + id);
	const direct = useHistory();

	const handleClick=()=>{
		fetch('http://localhost:8000/blogs/' + id,
		{ method: "DELETE" }). then(()=>{
			direct.push('/');
		})
	}

	return(
		<div className="blog-details">
			{isPen && <div>Loading...</div>}
			{error && <div>{ error }</div>}
			{blog && (
				<article>
					<h1>{ blog.title }</h1>
					<small>Written by { blog.auth }</small>
					<div>{ blog.body }</div>
					<button onClick= {handleClick}>Delete</button>
				</article>
				)}
		</div>

	);
}

export default BlogDetails;
import {useParams, useHistory} from "react-router-dom";
import useFetch from '../useFetch';

const BlogDetails = () => {
	const {id} = useParams();

	const { data:blog, isPen, error } = useFetch('http://localhost:5000/blogs/' + id);

	const direct = useHistory();

	const handleClick=()=>{
		fetch('http://localhost:5000/blogs/' + id, { method: "DELETE" })
		.then( () => { direct.push('/');
			setTimeout(()=> alert('The blog was deleted successfully'), 1000) 
		 } )
	}

	const handleClickEdit=()=>{
		direct.push('/edit/'+id)
	}

	// json-server --watch db.json --port 8000

	return(
		<div className="blog-details">
			{isPen && <div>Loading...</div>}
			{error && <div>{ error }</div>}
			{blog && (
				<article >
					<h1>The Title is: { blog.title }</h1>
					<small>Written by { blog.auth }</small>
					<div>{ blog.body }</div>
					<button onClick= {handleClick}>Delete</button>
					<button onClick= {() => handleClickEdit(blog.id)}>Edit</button>
				</article>
				)}
		</div>

	);
}

export default BlogDetails;
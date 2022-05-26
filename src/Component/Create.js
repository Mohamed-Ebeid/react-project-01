import {useState} from "react"; 
import {useHistory} from 'react-router-dom'
import axios from 'axios';

const Create = () => {
	
	const [title, setTitle]= useState('');
	const [body, setBody]= useState('');
	const [auth, setAuth]= useState('John');
	const [isPen, setIsPen]= useState(false);
	const direct= useHistory();

	// const handleSubmit =(e) =>{
	// 	e.preventDefault();
	// 	const blog = {title, body, auth};

	// 	setIsPen(true);

	// 	fetch('http://localhost:8000/blogs',{
	// 		method:'POST', headers:{"Content-Type": "application/json"}, body:JSON.stringify(blog)
	// 	}).then(()=> {
	// 		setIsPen(false);
	// 		direct.push('/');
	// 	}); 
	// }

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsPen(true);
        axios.post(`http://localhost:5000/blogs`, {
            title,
            body,
            auth
        }).then(()=>{
        	setIsPen(false);
        	direct.push('/');
        	setTimeout(()=> alert('The blog was added successfully'), 1000) 
        })
        
    }

	return (
		<div className= "create">
			<h1>Add a new Blog:</h1>
			<form onSubmit={handleSubmit}>
				<label>Blog Title:*</label>
				<input type= "text" required value={title} onChange={(e) => setTitle(e.target.value)}/>

				<label>Blog Body:*</label>
				<textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>

				<label>Blog Auther: *</label>
				<select value={auth} onChange ={(e)=> 
					setAuth(e.target.value)}>

					<option value="John">John</option>
					<option value="Jane">Jane</option>
				</select>
				{!isPen && <button>Add</button>}
				{isPen && <button disabled >Adding...</button>}
				

			</form>
		</div>
	);
}

export default Create
import {useState} from "react";
import {useParams, useHistory} from "react-router-dom";
import useFetch from '../useFetch';
import axios from 'axios'


const Edit = () => {

	const {id} = useParams();

	const direct= useHistory();

    const [title, setTitle]= useState('');
	const [body, setBody]= useState('');
	const [auth, setAuth]= useState('John');

	const { data:blog, error } = useFetch('http://localhost:5000/blogs/' + id)

	// componentDidMount() {
 //   		setTitle({inputValue: this.props.inputValue});
	// 	}

	// var bb = blog.title;


	const handleSubmit = (e) => {
		e.preventDefault();
        axios.put(`http://localhost:5000/blogs/${id}`, {
            title,
            body,
            auth
        }).then(()=>{
        	direct.push('/');
        	setTimeout(()=> alert('The blog was editted successfully'), 1000) 
        })
        
    }

	
	return (
		<div className="create">
			{error && <div>{ error }</div>}
			{blog && (
					<form onSubmit={handleSubmit} >
						<label>Blog Title:</label>
						<input type= "text" name="title" defaultValue={blog.title}  onChange={(e) => setTitle(e.target.value)}/>

						<label>Blog Body:</label>
						<textarea  required defaultValue={blog.body} onChange={(e) => setBody(e.target.value)}></textarea>

						<label>Blog Auther:</label>
							<select defaultValue={blog.auth} onChange ={(e)=> 
							setAuth(e.target.value)}>

								<option value="John">John</option>
								<option value="Jane">Jane</option>
							</select>
							<button onClick= {handleSubmit}>Submit</button>
					</form>
				)
		}
		</div>
			)

	}

	


export default Edit
import Blog from './BlogList';
import useFetch from './useFetch';

const Home = () => {

	const { data:blogs, isPen, error } = useFetch('http://localhost:8000/blogs');
	return(
		<div className="home">
			{error && <div>{ error }</div>}
			{isPen && <div>Loading...</div>}
			{blogs && <Blog blogs={blogs} title="All Blogs"  />}
		</div>

		);
}

export default Home;					 
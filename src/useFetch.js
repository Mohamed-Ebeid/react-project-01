import {useState, useEffect} from 'react';


const useFetch = (url) => {

	const [data, setData] = useState(null);
	const [isPen, setIsPen] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {

		const abortC = new AbortController();

		setTimeout(()=>{
			fetch(url, {signal:abortC.signal})
		.then(res=> {
			if (!res.ok){ 
				throw Error('Could not fetch!');
			} 
			return res.json();
		})

		.then(data=>{
			setData(data);
			setIsPen(false); 
			setError(null);
		})
		
		.catch(err=> {
			if(err.name==='AbortError'){ console.log ('Your fetch for the Json data was aborted!')}
			else{
			setIsPen(false); 
			setError(err.message);
			}
		})
		},500);
		

		return ()=> abortC.abort();

	},[url]);

	return {data, isPen, error}

}

export default useFetch;
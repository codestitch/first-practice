import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../Main/Card";

export default function Detail() {
   let params = useParams();
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

   let navigate = useNavigate(); 
   const routeChange = () => {
      navigate('../');
   }

	useEffect(() => {
		setLoading(true);
		fetch(
			`https://ghibliapi.herokuapp.com/films/${params.filmId}`
		)
		.then((response) => response.json())
		.then(setData)
		.then(() => setLoading(false))
		.catch(setError);
	}, []);

	if (loading) return <h1>Loading...</h1>;
	if (error)
		return <pre>{JSON.stringify(error)}</pre>;
	if (!data) return null;

    return(
        <div>
           <a onClick={() => routeChange()}>Back</a> 
           <Card title={data.title} description={data.description} image={data.image}/>
        </div>
    )
}
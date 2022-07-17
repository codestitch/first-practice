import { useEffect, useState } from "react";
import Card from "./Card";
import CardList from "./CardList";

export default function Main() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch(
			`https://ghibliapi.herokuapp.com/films`
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
		<CardList 
			data={data}
			renderEmtpy={<p>No Data</p>}
		/>
	)
}
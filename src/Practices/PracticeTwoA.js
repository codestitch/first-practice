// TRAINING ONE: Fetching and Lists

import { useState, useEffect } from "react";

function Movie({ title, image }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} height={150} alt={title} />
    </div>
  );
}

function MovieList({data, renderItem, renderEmtpy}) {
  return !data.length ? renderEmtpy : 
  data.map(movie => (
    <div key={movie.id}>{renderItem(movie)}</div>
  ))
}

function PracticeTwo() {
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
  
  return (
    <MovieList 
      data={data}
      renderEmtpy={<p>No Data</p>}
      renderItem={(movie) =><Movie title={movie.title} image={movie.image}/>}
    />
  );
}

export default PracticeTwo;

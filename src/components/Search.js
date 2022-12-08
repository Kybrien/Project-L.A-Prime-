import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

const Search = () => {
  const [movies, setMovies] = useState([]);
  let recherche=""

  async function getData() {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1395e4604a9209fca31ffa96d10545f7&language=en-US&query=${recherche}`);
    console.log("res", res.data);
    setMovies(res.data.results);
  }

  useEffect(() => {
    getData()
  }, []);

  function handleChange(e) {
    recherche=e.target.value
    if (!e.target.value) {
      return;
    }
    getData()
  }

  
  return (
    <div>
      <input onChange={handleChange} type="text" />
      {movies.map((movie, index) => {
        return (
          <p key={movie.orinal_title}>
            <Link to={`/pokemon/${index + 1}`}>{movie.original_title}</Link>
          </p>
        );
      })}

    </div>
  )
}

export default Search;
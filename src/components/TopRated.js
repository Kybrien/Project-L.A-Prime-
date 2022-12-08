import axios from 'axios';
import React from 'react';
import { useState, useEffect } from "react";

function TopRated() {
    const[trending, setTrending] = useState ([]);

    async function getData() {
        const res = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=1395e4604a9209fca31ffa96d10545f7");
        console.log("res", res.data);
        setTrending(res.data.results);
    }

    useEffect(() => {
        getData();
    }, []);
    
    return (
    <div className="moviii">
        {trending.map((results) => {
            return (
                <div className='moviecss'>
                    <h3 key={results.title}>
                    {results.title}
                    </h3>
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${results.backdrop_path}`} class="d-block" alt="..."></img>
                    <p key={results.overview}>
                    {results.overview}
                    </p>
                </div>
            );
        })}
    </div>
)}

export default TopRated;
import { useEffect, useState } from "react";
import axios from 'axios';
import SingleJoke from "./SingleJoke";
import SetupJoke from "./SetupJoke";

function Jokes(){

    const [jokes, setJokes] = useState(null);

    useEffect(()=> {
        axios.get('https://v2.jokeapi.dev/joke/Programming?amount=10')
        .then(res => {
            setJokes(res.data.jokes);
        })
    }, [])

    return (
        <>
        <h1>Programming Jokes</h1>
        <div className="jk-bin">
            {
            jokes === null ? <div>Loading...</div> :  jokes.map((j,i) => j.type === 'single' ? <SingleJoke key={j.id} jk={j} index={i}/> : <SetupJoke key={j.id} jk={j} index={i}/>)
            }
        </div>
        </>
    )
}

export default Jokes;
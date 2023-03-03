import { useEffect, useState } from "react";
import axios from 'axios';

function Jokes(){

    const [jokes, setJokes] = useState(null);

    useEffect(()=> {
        axios.get('https://v2.jokeapi.dev/joke/Programming?amount=10')
        .then(res => {
            setJokes(res.data.jokes);
        })
    }, [])

    return (

        <div>{jokes === null ? <div>Loading...</div> :  console.log(jokes)}</div>
    )
}

export default Jokes;
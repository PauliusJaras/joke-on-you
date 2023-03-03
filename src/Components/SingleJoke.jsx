function SingleJoke({jk, index}){
    return (
        <div className={'jk'}>
        <h3 className="joke">#{index+1} Joke</h3>
        <div>{jk.joke}</div>
        </div>
    )
}

export default SingleJoke;
function SetupJoke({jk, index}){
    return (
        <div className={'jk'}>
            <h3 className="setup-n-delivery">#{index+1} Setup and Delivery</h3>
            <div className="setup">Setup: {jk.setup}</div>
            <div className="delivery">Delivery: {jk.delivery}</div>
        </div>
    )
}

export default SetupJoke;
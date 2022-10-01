const Home = () => {

    const handleClick = () => {
        console.log("Got it");
    }

    const handleClickAgain = (name) => {
        console.log(`Name is ${name}`);
    }

    return (
        <nav className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>

            <button onClick={() => {handleClickAgain('Mario')}}>Heyy yea</button>
        </nav>
    );

}


export default Home;
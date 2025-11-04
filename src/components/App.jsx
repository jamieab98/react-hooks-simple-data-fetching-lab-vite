// create your App component here
import { useEffect, useState } from "react";
const dogURL = "https://dog.ceo/api/breeds/image/random";

function App() {
    const [dogImage, setDogImage] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        newDog()
    }, []);

    function newDog() {
        setLoading(true);
        fetch(dogURL)
        .then(response => {
            if (!response.ok) {console.log("Failed to fetch Image");}
            return response.json();
        })
        .then(data => {
            setDogImage(data.message);
            setLoading(false);
        })
        .catch(error => console.log(error));
    }
    
    return(
        <>
            <button onClick={newDog}>Click for New Dog</button>
            <div>
                {loading ? <p>Loading...</p> : <img src={dogImage}></img>}
            </div>
        </>
    )
}

export default App
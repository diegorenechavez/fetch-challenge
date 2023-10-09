import { useEffect, useState } from "react";
import { fetchMatch } from "../../dogApiUtil";
import { useNavigate } from "react-router-dom";


export default function MatchButton(props) {
    const navigate = useNavigate();
 
    const [error, setError] = useState("");
   

    const handleClick = async (e) => {
        e.stopPropagation()
        const myObject = JSON.parse(localStorage.getItem('myObject') || '{}');
        const arrayOfIds = Object.keys(myObject)
        try {

            const res = await fetchMatch(arrayOfIds);
            


            const dogId = res.match;

            navigate(`/${dogId}`)
            
        } catch (error) {
            setError("you must favorite at least one dog first")

        }



    }









    return (
        <>
            <button className={`match-button`} onClick={handleClick} >
                Match With My Perfect pup!
            </button>
            {error && <p id="error">{error}</p>}
            <h2>After you like a few dogs, click here to be matched with your pefect one</h2>


        </>
    )
}

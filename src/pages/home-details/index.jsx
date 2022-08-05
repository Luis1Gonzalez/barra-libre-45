import './style.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

export default function HomeDetails(){
    const { idDrink } = useParams();
const [details, setDetails] = useState([])

    useEffect(() => {
fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
.then((r => r.json()))
.then(d => setDetails(d))
    },[idDrink])

    console.log(idDrink)
    console.log(details)

    return(
        <div className='wrap-details'>
            {details.drinks?.map((c) =>(
                <div className="card-details" key={c.idDrink}>
                    <h6>{c.strDrink}</h6>
                </div>
            ))}
        </div>
    )
}
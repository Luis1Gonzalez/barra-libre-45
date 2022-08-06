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

    return(
        <div className='wrap-details p-1'>
            {details.drinks?.map((c) =>(
                <div className="card-details px-2 bg-warning" key={c.idDrink}>
                    <img  className="w-100 border my-2" src={c.strDrinkThumb} alt="foto de cocktails" />
                                
            <h3>{c.strDrink}</h3>
            <p>{c.strDrinkAlternate ? `Alternative Name: ${c.strDrinkAlternate}` : "" }</p>
            <p>{`Tipe: ${c.strAlcoholic}`}</p>
            <p>{`Category: ${c.strCategory}`}</p>
            <p>{c.strIBA ? `Clasification IBA: ${c.strIBA}` : ""}</p>

            <div>
                <h3>Ingredients:</h3>
                <p>{`${c.strMeasure1 ? c.strMeasure1 :""} ${c.strIngredient1 ? c.strIngredient1 : ""}`}</p>
                <p>{`${c.strMeasure2 ? c.strMeasure2 :""} ${c.strIngredient2 ? c.strIngredient2 : ""}`}</p>
                <p>{`${c.strMeasure3 ? c.strMeasure3 :""} ${c.strIngredient3 ? c.strIngredient3 : ""}`}</p>
                <p>{`${c.strMeasure4 ? c.strMeasure4 :""} ${c.strIngredient4 ? c.strIngredient4 : ""}`}</p>
                <p>{`${c.strMeasure5 ? c.strMeasure5 :""} ${c.strIngredient5 ? c.strIngredient5 : ""}`}</p>
                <p>{`${c.strMeasure6 ? c.strMeasure6 :""} ${c.strIngredient6 ? c.strIngredient6 : ""}`}</p>
                <p>{`${c.strMeasure7 ? c.strMeasure7 :""} ${c.strIngredient7 ? c.strIngredient7 : ""}`}</p>
                <p>{`${c.strMeasure8 ? c.strMeasure8 :""} ${c.strIngredient8 ? c.strIngredient8 : ""}`}</p>
                <p>{`${c.strMeasure9 ? c.strMeasure9 :""} ${c.strIngredient9 ? c.strIngredient9 : ""}`}</p>
                <p>{`${c.strMeasure10 ? c.strMeasure10 :""} ${c.strIngredient10 ? c.strIngredient10 : ""}`}</p>
                <p>{`${c.strMeasure11 ? c.strMeasure11 :""} ${c.strIngredient11 ? c.strIngredient11 : ""}`}</p>
                <p>{`${c.strMeasure12 ? c.strMeasure12 :""} ${c.strIngredient12 ? c.strIngredient12 : ""}`}</p>
                <p>{`${c.strMeasure13 ? c.strMeasure13 :""} ${c.strIngredient13 ? c.strIngredient13 : ""}`}</p>
                <p>{`${c.strMeasure14 ? c.strMeasure14 :""} ${c.strIngredient14 ? c.strIngredient14 : ""}`}</p>
                <p>{`${c.strMeasure15 ? c.strMeasure15 :""} ${c.strIngredient15 ? c.strIngredient15 : ""}`}</p>                
            </div>

            <div>
                <h6>{`Glass: ${c.strGlass}`}</h6>
            </div>

<div className="wrap-instructions">
    <h3>Instructions:</h3>
    <p>{c.strInstructions}</p>
</div>

<div>
    <h6>{`Modified: ${c.dateModified}`}</h6>
</div>



                </div>
            ))}
        </div>
    )
}
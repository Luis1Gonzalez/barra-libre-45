import './style.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

export default function HomeDetails(){
    const { idDrink } = useParams();
const [details, setDetails] = useState([])
let [ingredientes, setIngredientes]  = useState("")
let strIngredient = []


    useEffect(() => {
fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
.then((r => r.json()))
.then(d => setDetails(d))
    },[idDrink])



    return(
        <div className='wrap-details p-3'>
            {details.drinks?.map((c) =>(
                <div className="card-details bg-warning" key={c.idDrink}>
                    <img  className="w-100 border" src={c.strDrinkThumb} alt="foto de cocktails" />
                                
            <h3>{c.strDrink}</h3>
            <p>{c.strDrinkAlternate ? `Nombre Alternativo: ${c.strDrinkAlternate}` : "" }</p>
            <p>{`Tipo: ${c.strAlcoholic}`}</p>
            <p>{`Categoria: ${c.strCategory}`}</p>
            <p>{c.strIBA ? `Clasificación IBA: ${c.strIBA}` : ""}</p>

            <div>
                <h3>Ingredients:</h3>
                <p>{`${c.strMeasure1} of ${c.strIngredient1}`}</p>
                <p>{`${c.strMeasure2} of ${c.strIngredient2}`}</p>
                <p>{`${c.strMeasure3} of ${c.strIngredient3}`}</p>
                <p>{`${c.strMeasure4} of ${c.strIngredient4}`}</p>
                <p>{`${c.strMeasure5} of ${c.strIngredient5}` ? `${c.strMeasure5} of ${c.strIngredient5}` : ""}</p>
                <p>{`${c.strMeasure6} of ${c.strIngredient6}`}</p>
                <p>{`${c.strMeasure7} of ${c.strIngredient7}`}</p>
                <p>{`${c.strMeasure8} of ${c.strIngredient8}`}</p>
                <p>{`${c.strMeasure9} of ${c.strIngredient9}`}</p>
                <p>{`${c.strMeasure10} of ${c.strIngredient10}`}</p>
                <p>{`${c.strMeasure11} of ${c.strIngredient11}`}</p>
                <p>{`${c.strMeasure12} of ${c.strIngredient12}`}</p>
                <p>{`${c.strMeasure13} of ${c.strIngredient13}`}</p>
                <p>{`${c.strMeasure14} of ${c.strIngredient14}`}</p>
                <p>{`${c.strMeasure15} of ${c.strIngredient15}`}</p>
            </div>




                </div>
            ))}
        </div>
    )
}
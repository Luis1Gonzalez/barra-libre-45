import "./style.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HomeDetails() {
  const { idDrink } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
      .then((r) => r.json())
      .then((d) => setDetails(d));
  }, [idDrink]);

  return (
    <div className="wrap-details p-1 d-flex align-items-center">
      {details.drinks?.map((c) => (
        <div
          className="d-flex flex-wrap col-12 justify-content-around"
          key={c.idDrink}
        >
            <div className="card-image col-6 col-md-3 p-1 d-flex align-items-center">
          <img  className=" w-100 border"
            src={c.strDrinkThumb}
            alt="foto de cocktails"
          />
          </div>

          <div className="card-details col-6 col-md-3 p-1">
            <h2 className="text-center m-0">{c.strDrink}</h2>
            <p>
              {c.strDrinkAlternate
                ? `Alternative Name: ${c.strDrinkAlternate}`
                : ""}
            </p>
            <p className="m-0">Tipe</p>
            <p className="m-0 text-center shadow">{c.strAlcoholic}</p>
            <p className="m-0">Category</p>
            <p className="m-0 text-center shadow">{c.strCategory}</p>
            <p className="m-0">{c.strIBA ? `Clasification IBA` : ""}</p>
            <p className="m-0 text-center shadow">{c.strIBA ? c.strIBA : ""}</p>
          </div>

          <div className="card-ingredients col-12 col-md-3 px-3 py-1">
            <h4 className="text-center m-0">Ingredients</h4>
            <ul></ul>
            <p className="m-0">{`${c.strMeasure1 ? c.strMeasure1 : ""} ${
              c.strIngredient1 ? c.strIngredient1 : ""
            }`}</p>
            <p className="m-0">{`${c.strMeasure2 ? c.strMeasure2 : ""} ${
              c.strIngredient2 ? c.strIngredient2 : ""
            }`}</p>
            <p className="m-0">{`${c.strMeasure3 ? c.strMeasure3 : ""} ${
              c.strIngredient3 ? c.strIngredient3 : ""
            }`}</p>
            <p className="m-0">{`${c.strMeasure4 ? c.strMeasure4 : ""} ${
              c.strIngredient4 ? c.strIngredient4 : ""
            }`}</p>
            <p className="m-0">{`${c.strMeasure5 ? c.strMeasure5 : ""} ${
              c.strIngredient5 ? c.strIngredient5 : ""
            }`}</p>
            <p className="m-0">{`${c.strMeasure6 ? c.strMeasure6 : ""} ${
              c.strIngredient6 ? c.strIngredient6 : ""
            }`}</p>
            <p className="m-0">{`${c.strMeasure7 ? c.strMeasure7 : ""} ${
              c.strIngredient7 ? c.strIngredient7 : ""
            }`}</p>
            <p>{`${c.strMeasure8 ? c.strMeasure8 : ""} ${
              c.strIngredient8 ? c.strIngredient8 : ""
            }`}</p>
            <p className="m-0">{`${c.strMeasure9 ? c.strMeasure9 : ""} ${
              c.strIngredient9 ? c.strIngredient9 : ""
            }`}</p>
            <p className="m-0">{`${c.strMeasure10 ? c.strMeasure10 : ""} ${
              c.strIngredient10 ? c.strIngredient10 : ""
            }`}</p>
            <p className="m-0">{`${c.strMeasure11 ? c.strMeasure11 : ""} ${
              c.strIngredient11 ? c.strIngredient11 : ""
            }`}</p>
            <p className="m-0">{`${c.strMeasure12 ? c.strMeasure12 : ""} ${
              c.strIngredient12 ? c.strIngredient12 : ""
            }`}</p>
            <p className="m-0">{`${c.strMeasure13 ? c.strMeasure13 : ""} ${
              c.strIngredient13 ? c.strIngredient13 : ""
            }`}</p>
            <p className="m-0">{`${c.strMeasure14 ? c.strMeasure14 : ""} ${
              c.strIngredient14 ? c.strIngredient14 : ""
            }`}</p>
            <p className="m-0">{`${c.strMeasure15 ? c.strMeasure15 : ""} ${
              c.strIngredient15 ? c.strIngredient15 : ""
            }`}</p>
            <h6>{`Glass: ${c.strGlass}`}</h6>
          </div>

          <div className="card-instructions px-3 py-1">
            <h4 className="text-center m-0">Instructions</h4>
            <p className="my-2">{c.strInstructions}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

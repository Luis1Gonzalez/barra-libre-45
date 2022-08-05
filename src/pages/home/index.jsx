import "./style.css";
import UseCocktails  from "../../data/cocktails.hooks";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [cocktails] = UseCocktails();
  
  console.log(cocktails);
  return (
    <div className="wrap-home">
      <div className="wrap_cards d-flex flex-wrap justify-content-around py-3">
        {cocktails.drinks?.map((c) => (
          <div className="card col-5 col-sm-3 col-md-2 m-2 d-flex align-items-center shadow" key={c.idDrink} onClick={() =>navigate(`/cocktail/${c.idDrink}`)}>
            
              <img  className="w-100 border" src={c.strDrinkThumb} alt="foto de cocktails" />
            
            <p>{c.strDrink}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

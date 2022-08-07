import "./style.css";
import UseCocktails  from "../../data/cocktails.hooks";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [cocktails] = UseCocktails();
  
  return (
    <div className="wrap-home">
      <div className="wrap_cards d-flex flex-wrap justify-content-around p-3">
        {cocktails.drinks?.map((c) => (
          <div className="card bg-bigbg col-12 col-sm-3 col-md-2 my-2 d-flex flex-row justify-content-around  align-items-center" key={c.idDrink} onClick={() =>navigate(`/cocktail/${c.idDrink}`)}>
            
              <img  className=" border" src={c.strDrinkThumb} alt="foto de cocktails" />
            
            <p className="m-0 w-50 text-center text-white bg-muted">{c.strDrink}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

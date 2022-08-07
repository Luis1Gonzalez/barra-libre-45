import "./style.css";
import UseCocktails  from "../../data/cocktails.hooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Pagination from "../../pagination/pagination";

export default function Home() {
  const navigate = useNavigate();
  const [cocktails] = UseCocktails({});
  const [page,setPage] = useState(1);
  const [numByPagina,setNumByPag] = useState(10);
  let count=cocktails.drinks
  
const maxi = count?.length / numByPagina;

  console.log(page)
  return (
    <div className="wrap-home">
      <div className="wrap_cards d-flex flex-wrap justify-content-around p-3">
        {cocktails.drinks?.slice((page-1)*numByPagina, (page-1)*numByPagina+numByPagina).map((c) => (
          <div className="card bg-bigbg fs-6 col-12 col-sm-5 col-md-3 col-xl-2 mx-md-1 my-2 d-flex flex-row justify-content-around  align-items-center p-sm-2" key={c.idDrink} onClick={() =>navigate(`/cocktail/${c.idDrink}`)}>
            
              <img  className=" border" src={c.strDrinkThumb} alt="foto de cocktails" />
            
            <p className="m-0 w-50 text-center text-white bg-muted">{c.strDrink}</p>
          </div>
        ))}
      </div>
      <Pagination page={page} setPage={setPage} maxi={maxi} />
    </div>
  );
}

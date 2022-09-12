import "./style.css";
import UseCocktails  from "../../data/cocktails.hooks";
// import UseFiltered from "../../data/filtered.hooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Pagination from "../../pagination/pagination";
import Form from "../../components/form";
import { useEffect } from "react";
import {IoPlayBackOutline} from 'react-icons/io'



export default function Home() {
  const navigate = useNavigate();
  const [original] = UseCocktails({});
  const [searched, setSearched] = useState("")
  let cocktails = {}
  const [page,setPage] = useState(1);
  const numByPagina = 10;
  // let count=cocktails?.drinks?.length;
  const [one, setOne] = useState({})
  
  



const getCocktail = async (neo) => {
setSearched(neo)
}



  useEffect(() => {

fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searched}`)
.then((r => r.json()))
.then(o => setOne(o))
},[searched])

if(searched==="" || !searched){
  cocktails = original
}else{
  cocktails=one
}


const maxi = cocktails?.drinks?.length / numByPagina;


console.log(maxi)



  return (
    <div className="wrap-home pt-5">

<Form newCocktail={getCocktail}/>

      <div className="wrap_cards d-flex flex-wrap justify-content-around px-3 py-5">
        {cocktails.drinks?.slice((page-1)*numByPagina, (page-1)*numByPagina+numByPagina).map((c) => (
          <div className="card bg-bigbg fs-6 col-12 col-sm-5 col-md-3 mx-md-1 my-2 d-flex flex-row justify-content-around  align-items-center p-sm-2" key={c.idDrink} onClick={() =>navigate(`/cocktail/${c.idDrink}`)}>
            
              <img  className=" border" src={c.strDrinkThumb ? c.strDrinkThumb : 'https://media.istockphoto.com/photos/3d-render-breaking-wine-glass-on-black-picture-id540739300?k=20&m=540739300&s=612x612&w=0&h=BkwnI9Lf1NGMBB_IE_FH9lYRSso4rABmpDtf1SzV6-8='} alt="foto de cocktails" />
            
            <p className="m-0 w-50 text-center text-white bg-muted">{c.strDrink}</p>
          </div>
        ))}
      </div>
      <Pagination page={page} setPage={setPage} maxi={maxi <= 1 ? 1 : Math.round(maxi)} />
      
    </div>
  );
}

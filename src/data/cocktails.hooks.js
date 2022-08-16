import { useEffect, useState } from "react";

export default function UseCocktails() {
  const [cocktails, setCoctails] = useState([]);  
 




  
    useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then((r) => r.json())
      .then((c) => setCoctails(c));
  }, []);




  return[cocktails]
  
}






















































// import { useEffect, useState } from "react";

// export default function UseCocktails() {
//   const [cocktails, setCoctails] = useState([]);  
  
  // const [filter, setFilter] = useState("");
  // const [search, setSearch] = useState("");
//   let urlcocktails = ""

  // function onSubmit(e){
  //   e.preventDefault();
  // };


//   if (search ===""){
//     urlcocktails=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`
//   }else{
  //   urlcocktails = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
  // }


  //   useEffect(() => {
  //   fetch(urlcocktails)
  //     .then((r) => r.json())
  //     .then((c) => setCoctails(c));
  // }, [urlcocktails]);

  // console.log(cocktails)


//   console.log(cocktails)

//   return(
//     <div className="wrap-form">
// <form onSubmit={onSubmit}>
// <input type="text" onChange={(e) => setSearch(e.target.value)} />
// <button type ="submit">Buscar</button>
// </form>
//       </div>
//   );
  
// }

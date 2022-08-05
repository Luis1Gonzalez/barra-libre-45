import { useEffect, useState } from "react"


export default function UseCocktails(){

    const [cocktails, setCoctails] = useState([]);

    useEffect(() => {
fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
.then(((r => r.json())))
.then (c => setCoctails(c))
    },[])

    return [cocktails]
}
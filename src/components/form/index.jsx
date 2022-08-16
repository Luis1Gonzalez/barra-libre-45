import './style.css'
import { useState } from 'react';



export default function Form({newCocktail}){

    const [search, setSearch] = useState("")

    function  onSubmit(e){
        e.preventDefault();

if(search === "" || !search)return;

        newCocktail(search);
    }
    
console.log(search)

    return(



<form onSubmit ={onSubmit} className="d-flex mt-3 col-12 col-md-7 col-lg-12 justify-content-around justify-content-lg-center align-items-center">
<input className="form-control w-75 mx-lg-3" value={search} placeholder="Buscar" type="text" onChange={(e) => setSearch(e.target.value)} />
<button className='btn btn-cocktail bg-primary py-0 px-1' type="submit">Buscar</button>
</form>


    )
}
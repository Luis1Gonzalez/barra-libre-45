import './style.css';
import { BiLeftArrow } from 'react-icons/bi';
import { BiRightArrow } from 'react-icons/bi';




export default function Pagination( {page, setPage, maxi} ){

    const nextPage = () => {
        setPage (page + 1);
    }

    const prevPage = () => {
        setPage(page - 1);
    }

    return(
<div className='d-flex justify-content-center pb-4'>
    <button disabled={page<=1} onClick={prevPage} className='d-flex align-items-center'>{<BiLeftArrow />}</button>
    <p  className='w-25 m-0 text-center'> {page} de {maxi}</p>
    <button disabled={page >=maxi} onClick={nextPage} className='d-flex align-items-center'>{<BiRightArrow />}</button>
</div>
    )
}
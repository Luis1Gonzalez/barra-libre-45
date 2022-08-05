import './style.css'
import logo from './../../../images/logo.png'

export default function Header(){
return(
    <div className="wrap-header border">

        <div className='wrap-movil'></div>

        <div className='wrap-logo d-flex justify-content-center align-items-center'>
            <img src={logo} alt="logo de barra libre 45" />
        </div>

        <div className="nav bg-white">
            <div className="nav-home">inicio</div>
            <div className="nav-detail">detalles</div>
        </div>

    </div>
)
}
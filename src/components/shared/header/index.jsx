import './style.css'
import logo from './../../../images/logo.png'

export default function Header(){
return(
    <div className="wrap-header border">


        <div className='wrap-logo d-flex justify-content-center align-items-center p-3'>
            <img src={logo} alt="logo de barra libre 45" />
        </div>

        <div className="nav bg-white d-flex justify-content-center align-items-center m-0">
            <h6 className="nav-home m-1">Welcome to the Barra Libre 45 App</h6>
        </div>

    </div>
)
}
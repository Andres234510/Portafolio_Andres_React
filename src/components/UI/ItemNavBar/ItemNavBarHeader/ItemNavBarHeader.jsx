import { NavLink } from "react-router-dom";

export const ItemNavBarHeader = ({enlace = '/', text = 'Inicio', }) =>{
    return (
        <button className="custom-btn btn-12">
            <span><NavLink to={enlace}>Click</NavLink></span>
            <span>
            <li className="LiHeader"><NavLink to={enlace}>{text}</NavLink></li>
            </span>
        </button>
        
        
    )
}
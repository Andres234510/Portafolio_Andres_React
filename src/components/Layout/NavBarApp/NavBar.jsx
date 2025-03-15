import { ItemNavBarHeader } from "../../UI/ItemNavBar/ItemNavBarHeader/ItemNavBarHeader"
import './NavBar.css'
export const NavBar = () => {
    return(
        <nav>
            <ul>
                <ItemNavBarHeader />
                <ItemNavBarHeader enlace = {'/profile'} text={"Profile"}/>
                <ItemNavBarHeader enlace = {'/studies'} text={"Studies"}/>
                <ItemNavBarHeader enlace = {'/experience'} text={"Experiencia"}/>
            </ul>
        </nav>
    )
}
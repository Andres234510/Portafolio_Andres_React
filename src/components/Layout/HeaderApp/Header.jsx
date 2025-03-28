import { NavBar } from "../NavBarApp/NavBar"
import logoName from "../HeaderApp/logoName.jpeg"

export const Header = () => {
    return(
        <header className="header">
            <img className="Logo-name" src={logoName} alt="LOGO" />
            <NavBar />
        </header>
    )
}
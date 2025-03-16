import { NavBar } from "../NavBarApp/NavBar"

export const Header = () => {
    return(
        <header className="header">
            <img className="Logo-name" src="./src/assets/images/logo-name.jpeg" alt="LOGO" />
            <NavBar />
        </header>
    )
}
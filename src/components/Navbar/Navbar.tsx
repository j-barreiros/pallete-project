
// Style

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../assets/Icons";
import { PalleteContext } from "../../context/PalletesContext";
import StyledNavbar from "./StyledNavbar";


const Navbar = () => {
    
    const navigate = useNavigate()

    return (
        <StyledNavbar>
            <div className='logo' onClick={() => navigate('/')}>
                <Logo/>
                <h1 className='nav-logo'>Pallete Project</h1>
            </div>
        </StyledNavbar>
    )
}

export default Navbar;
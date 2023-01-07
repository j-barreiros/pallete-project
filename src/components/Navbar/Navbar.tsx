
// Style

import StyledNavbar from "./StyledNavbar";


const Navbar = () => {
    return (
        <StyledNavbar>
            <h1 className='nav-logo'>Pallete Project</h1>
            <input className='search-input' type='text'/>
        </StyledNavbar>
    )
}

export default Navbar;
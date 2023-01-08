import { NewEmpty } from "../../assets/Icons";
import StyledSidebar from "./StyledSidebar";

const Sidebar = () => {
    return (
        <StyledSidebar>
            <section className='pages'>
                <button className='side-option'><NewEmpty />New</button>
                <button className='side-option'>Popular</button>
                <button className='side-option'>Random</button>
                <button className='side-option'>Collection</button>
            </section>
        </StyledSidebar>
    )
}

export default Sidebar;
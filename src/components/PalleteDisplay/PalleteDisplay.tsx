// Style
import { useContext } from "react";
import { PalleteContext } from "../../context/PalletesContext";
import PalleteItem from "./PalleteItem/PalleteItem";
import StyledPalleteDisplay from "./StyledPalleteDisplay"

const PalleteDisplay = () => {
    const palleteContext = useContext(PalleteContext)
    const testeArray = [1,2,3,4,5,6];
    return (
        <StyledPalleteDisplay>
            {palleteContext.map(p  => <PalleteItem pallete={p}/>)}
        </StyledPalleteDisplay>
    )
}

export default PalleteDisplay;
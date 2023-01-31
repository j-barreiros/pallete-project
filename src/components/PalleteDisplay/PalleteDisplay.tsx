// Style
import { useContext, useEffect, useState } from "react";
import { PalleteContext, PalleteType } from "../../context/PalletesContext";
import PalleteItem from "./PalleteItem/PalleteItem";
import StyledPalleteDisplay from "./StyledPalleteDisplay"

type PalleteDisplayProps = {
    activePage: string,
    activeSubpage: string,
}

const PalleteDisplay = ({ activePage, activeSubpage }: PalleteDisplayProps) => {
    const palleteContext = useContext(PalleteContext)
    const [fadeAnimation, setFadeAnimation] = useState(false);

    useEffect(() => {
        if (fadeAnimation === true) return;
        setFadeAnimation(true);
        setTimeout(() => setFadeAnimation(false), 500);
    }, [activePage, activeSubpage])


    return (
        <StyledPalleteDisplay activePage={activePage} className={`${fadeAnimation ? 'fadeIn' : ''}`}>
            {SelectedPallete(activePage, activeSubpage)}
        </StyledPalleteDisplay>
    )
}

export default PalleteDisplay;

const SelectedPallete = (activePage: string, activeSubpage: string) => {
    const palleteContext = useContext(PalleteContext)
    switch (activePage) {
        case 'Popular':
            switch (activeSubpage) {
                case 'Month':
                    return palleteContext.palletesOfTheMonth().map(p => <PalleteItem key={p.id} pallete={p} />)
                case 'Year':
                    return palleteContext.palletesOfTheYear().map(p => <PalleteItem key={p.id} pallete={p} />)
                default: // All Time
                    return palleteContext.palletesSortedByLikes().map(p => <PalleteItem key={p.id} pallete={p} />)
            }
        case 'Collection':
            return palleteContext.collection.map(p => <PalleteItem key={p.id} pallete={p} />)
        default: // New
            return palleteContext.palletesSortedByDate().map(p => <PalleteItem key={p.id} pallete={p} />)
    }
}
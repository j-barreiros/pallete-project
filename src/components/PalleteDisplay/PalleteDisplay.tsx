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

    const [palleteList, setPalleteList] = useState([] as PalleteType[]);


    useEffect(() => {
        switch (activePage) {
            case 'New':
                setPalleteList(palleteContext.palletesSortedByDate());
                break;
            case 'Popular':
                setPalleteList(palleteContext.palletesSortedByLikes());
                break;
            case 'Collection':
                setPalleteList(palleteContext.collection);
                break;
        }
    }, [activePage])

    if (activePage === 'New') {
        return (
            <StyledPalleteDisplay>
                {palleteContext.palletesSortedByDate().map(p => <PalleteItem pallete={p} />)}
            </StyledPalleteDisplay>
        )
    } else if (activePage === 'Popular') {
        if (activeSubpage === 'Month') {
            return (
                <StyledPalleteDisplay>
                    {palleteContext.palletesOfTheMonth().map(p => <PalleteItem pallete={p} />)}
                </StyledPalleteDisplay>
            )
        }

        if (activeSubpage === 'Year') {
            return (
                <StyledPalleteDisplay>
                    {palleteContext.palletesOfTheYear().map(p => <PalleteItem pallete={p} />)}
                </StyledPalleteDisplay>
            )
        }
        return (
            <StyledPalleteDisplay>
                {palleteContext.palletesSortedByLikes().map(p => <PalleteItem pallete={p} />)}
            </StyledPalleteDisplay>
        )
    } else if (activePage === 'Collection') {
        return (
            <StyledPalleteDisplay>
                {palleteContext.collection.map(p => <PalleteItem pallete={p} />)}
            </StyledPalleteDisplay>
        )
    }

    return (
        <StyledPalleteDisplay>
            {palleteContext.palletes.map(p => <PalleteItem pallete={p} />)}
        </StyledPalleteDisplay>
    )
}

export default PalleteDisplay;
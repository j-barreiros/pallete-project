import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PalleteContext } from "../../context/PalletesContext";
import CollectionItem from "./CollectionItem/CollectionItem";
import StyledCollectionBar from "./StyledCollectionBar";


const CollectionBar = () => {
    // Context
    const palleteContext = useContext(PalleteContext);

    return (
        <StyledCollectionBar activePage={useLocation().pathname === '/collection'}>
            <h2 className='title'>Collection</h2>
            <section className='collection-display'>
                {palleteContext.collection.map(c => <CollectionItem key={c.id} pallete={c} />)}
            </section>
        </StyledCollectionBar>
    )
}

export default CollectionBar;
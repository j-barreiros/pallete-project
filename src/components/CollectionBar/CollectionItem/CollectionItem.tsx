import { MouseEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PalleteContext, PalleteType } from "../../../context/PalletesContext";
import StyledCollectionItem from "./StyledCollectionItem";

type CollectionItemProps = {
    pallete: PalleteType;

}

const CollectionItem = ({ pallete }: CollectionItemProps) => {

    const palleteContext = useContext(PalleteContext);
    const navigator = useNavigate();

    const handleDeleteBtn = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        event.stopPropagation();
        palleteContext.handleLike(pallete);
    }

    return (
        <StyledCollectionItem pallete={pallete}>
            <button className='close-btn' onClick={(event) => handleDeleteBtn(event)}>x</button>
            <section className='pallete-box' onClick={() => navigator(`/pallete/${pallete.id}`)}>
                <article className='color1'></article>
                <article className='color2'></article>
                <article className='color3'></article>
                <article className='color4'></article>
            </section>
            <div className="saved-popup">
                <p>Saved!</p>
            </div>
        </StyledCollectionItem>
    )
}

export default CollectionItem;
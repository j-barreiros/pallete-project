import { PalleteType } from "../../../context/PalletesContext";
import StyledCollectionItem from "./StyledCollectionItem";

type CollectionItemProps = {
    pallete: PalleteType;

}

const CollectionItem = ({pallete}: CollectionItemProps) => {
    return (
        <StyledCollectionItem>
            <button className='close-btn' onClick={() => console.log('remove pallete')}>X</button>
            <article className='color-stripe'></article>
            <article className='color-stripe'></article>
            <article className='color-stripe'></article>
            <article className='color-stripe'></article>
        </StyledCollectionItem>
    )
}

export default CollectionItem;
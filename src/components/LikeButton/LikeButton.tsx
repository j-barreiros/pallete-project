import { useContext } from "react";
import { HeartEmpty, HeartFull } from "../../assets/Icons";
import { PalleteContext, PalleteType } from "../../context/PalletesContext";
import StyledLikeButton from "./StyledLikeButton";

type LikeButtonProps = {
    pallete: PalleteType,
    mode: 'number' | 'like'
}

const LikeButton = ({ pallete, mode}: LikeButtonProps) => {
    const palleteContext = useContext(PalleteContext);
    return (
        <StyledLikeButton isLiked={palleteContext.isInCollection(pallete.id)} onClick={() => palleteContext.handleLike(pallete)}>
            {palleteContext.isInCollection(pallete.id) ? <HeartFull /> : <HeartEmpty />}
            <p className='btnText'>{mode === 'number' ? pallete.likes : 'Like'}</p>
        </StyledLikeButton>
    )
}

export default LikeButton;
// Style
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LinkIcon } from "../../assets/Icons";
import ColorBox from "../../components/ColorBox/ColorBox";
import CopyableValue from "../../components/CopyableValue/CopyableValue";
import LikeButton from "../../components/LikeButton/LikeButton";
import PostTime from "../../components/PostTime/PostTime";
import { PalleteContext } from "../../context/PalletesContext";
import ColorInfo from "./ColorInfo/ColorInfo";
import StyledPalletePage from "./StyledPalletePage";


const PalletePage = () => {
    const palleteContext = useContext(PalleteContext);
    const [selectedPallete, setSelectedPallete] = useState(palleteContext.palleteDefault);
    const { palleteId } = useParams();
    useEffect(() => {
        const search = palleteContext.getPalleteById(palleteId !== undefined ? parseInt(palleteId) : 1);
        if (search !== undefined) {
            setSelectedPallete(search);
        }
    }, [palleteId])


    return (
        <StyledPalletePage>
            <ColorBox mode='big' pallete={selectedPallete} />
            <section className='pallete-bar'>
                <div className='pallete-actions'>
                    <LikeButton mode="number" pallete={selectedPallete} />
                    <CopyableValue mode='button' value='batata'>
                        <LinkIcon />
                        <p>Link</p>
                    </CopyableValue>
                </div>
                <PostTime palleteDate={selectedPallete.date} />
            </section>
            <section className='color-data'>
                <ColorInfo color={selectedPallete.color1} />
                <ColorInfo color={selectedPallete.color2} />
                <ColorInfo color={selectedPallete.color3} />
                <ColorInfo color={selectedPallete.color4} />
            </section>
        </StyledPalletePage>
    )
}

export default PalletePage;;
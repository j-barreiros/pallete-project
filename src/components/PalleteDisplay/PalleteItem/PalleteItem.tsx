// Style
import { PalleteType } from "../../../context/PalletesContext";
import ColorStripe from "./ColorStripe/ColorStripe";
import StyledPalleteItem from "./StyledPalleteItem";

type PalleteItemProps = {
    pallete: PalleteType;
}

const PalleteItem = ({pallete} : PalleteItemProps) => {
    const {color1, color2, color3, color4} = pallete;
    return (
        <StyledPalleteItem>
            <section className='color-box'>
                <ColorStripe colorValue={color1} />
                <ColorStripe colorValue={color2} />
                <ColorStripe colorValue={color3} />
                <ColorStripe colorValue={color4} />
            </section>
            <section className='pallete-info'>
                <button className='like-btn'>
                    Like
                </button>

                <p className='pallete-date'>3 weeks ago</p>
            </section>
        </StyledPalleteItem>
    )
}

export default PalleteItem;
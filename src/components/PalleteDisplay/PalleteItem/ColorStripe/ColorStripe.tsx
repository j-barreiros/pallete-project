import { MouseEvent } from "react";
import StyledColorStripe from "./StyledColorStripe";

type ColorStripeProps = {
    colorValue: string;
}

const ColorStripe = ({ colorValue }: ColorStripeProps) => {

    const handleColorValueClick = (event: MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>) => {
        event.stopPropagation();
        navigator.clipboard.writeText(colorValue);
    }

    return (
        <StyledColorStripe
            color={colorValue}
        >
            <p
                className='color-value'
                onClick={(event) => handleColorValueClick(event)}
            >
                {colorValue}
            </p>
        </StyledColorStripe>
    )
}

export default ColorStripe;
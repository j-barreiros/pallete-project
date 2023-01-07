import StyledColorStripe from "./StyledColorStripe";

type ColorStripeProps = {
    colorValue:string;
}

const ColorStripe = ({colorValue} : ColorStripeProps) => {
    return (
        <StyledColorStripe color={colorValue}>
            <p className='color-value'>{colorValue}</p>
        </StyledColorStripe>
    )
}

export default ColorStripe;
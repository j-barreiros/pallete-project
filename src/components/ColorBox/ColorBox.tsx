// Style
import StyledColorBox from "./StyledColorBox";

// Components
import CopyableValue from "../CopyableValue/CopyableValue";

// Type
import { PalleteType } from "../../context/PalletesContext";
import { useNavigate } from "react-router-dom";
type ColorBoxProps = {
    pallete: PalleteType;
    mode: 'big' | 'small'
}

const ColorBox = ({ pallete, mode }: ColorBoxProps) => {
    const navigator = useNavigate();

    const handleNavigate = () => {
        if(mode == 'small') {
            navigator(`/pallete/${pallete.id}`)
        }
    }

    return (
        <StyledColorBox
            className={mode === 'small' ? 'small' : ''}
            pallete={pallete}
            onClick={handleNavigate}
        >
            <article className='color-stripe'>
                <CopyableValue mode='stripe' value={pallete.color1}>
                    <p>{pallete.color1}</p>
                </CopyableValue>
            </article>
            <article className='color-stripe'>
                <CopyableValue mode='stripe' value={pallete.color2}>
                    <p>{pallete.color2}</p>
                </CopyableValue>
            </article>
            <article className='color-stripe'>
                <CopyableValue mode='stripe' value={pallete.color3}>
                    <p>{pallete.color3}</p>
                </CopyableValue>
            </article>
            <article className='color-stripe'>
                <CopyableValue mode='stripe' value={pallete.color4}>
                    <p>{pallete.color4}</p>
                </CopyableValue>
            </article>
        </StyledColorBox>
    )
}

export default ColorBox;
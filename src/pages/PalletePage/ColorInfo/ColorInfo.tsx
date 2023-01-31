
// Style
import CopyableValue from "../../../components/CopyableValue/CopyableValue";
import StyledColorInfo from "./StyledColorInfo";

type ColorInfoProps = {
    color: string;
}

const ColorInfo = ({color}:ColorInfoProps) => {

    const hexToRgb = (hexColor:string) => {
        return `rgb(${parseInt(hexColor.slice(1,3),16)},${parseInt(hexColor.slice(3,5),16)},${parseInt(hexColor.slice(5,7),16)})`
    }

    return (
        <StyledColorInfo color={color}>
            <div className='color-preview'></div>
            <CopyableValue mode='text' value={color.toUpperCase()}> 
                <p>{color}</p>
            </CopyableValue>
            <CopyableValue mode='text' value={hexToRgb(color)} >
                <p>{hexToRgb(color)}</p>
            </CopyableValue>
        </StyledColorInfo>
    )
}

export default ColorInfo;
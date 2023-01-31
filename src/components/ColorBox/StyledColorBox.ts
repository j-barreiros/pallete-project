import styled from "styled-components";
import { PalleteType } from "../../context/PalletesContext";

type StyledColorBoxProps = {
    pallete: PalleteType;
}

const StyledColorBox = styled.section<StyledColorBoxProps>`
    width: max(25vw, 200px);
    height: max(25vw, 200px);

    &.small {
        width: 100%;
        height: 250px;
        cursor: pointer;
    }
    
    .color-stripe {
        display: flex;
        align-items: flex-end;
        height: 25%;
        overflow: hidden;
    }

    .color-stripe {
        button {
            opacity: 0;
        }

        &:hover {
            button {
                opacity: 1;
            }
        }
    }

    .color-stripe:nth-child(1){
        background-color: ${props => props.pallete.color1};
        border-radius: 10px 10px 0px 0px;
    }

    .color-stripe:nth-child(2) {
        background-color: ${props => props.pallete.color2};
    }

    .color-stripe:nth-child(3) {
        background-color: ${props => props.pallete.color3};
    }

    .color-stripe:nth-child(4) {
        background-color: ${props => props.pallete.color4};
        border-radius: 0px 0px 10px 10px;
    }
`

export default StyledColorBox;
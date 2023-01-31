import styled from "styled-components";

type StyledColorInfoProps = {
    color: string;
}

const StyledColorInfo = styled.article<StyledColorInfoProps>`
    display: flex;
    flex-direction: column;
    align-items: center;

    .color-preview {
        width:  max(2.5vw, 30px);
        height: max(2.5vw, 30px);
        border-radius: 50%;
        background-color: ${props => props.color};
    }
    .color-hex {
        cursor: pointer;
    }

    .color-rgb {
        cursor: pointer;
    }
`

export default StyledColorInfo;
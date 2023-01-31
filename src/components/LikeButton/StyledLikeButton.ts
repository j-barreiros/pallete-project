import styled from "styled-components";

type StyledLikeButtonProps = {
    isLiked:boolean;
}

const StyledLikeButton = styled.button<StyledLikeButtonProps>`
    padding: 0px 10px 0px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.isLiked ? '#ececec' : 'none'};
    border: 1px solid #ececec;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.15s;

    .icon {
        margin-right: 5px;
        scale: 0.7;
    }
`

export default StyledLikeButton;
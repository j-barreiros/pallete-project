import styled from "styled-components";

type StyledColorStripeProps = {
    color: string;
}

const StyledColorStripe = styled.article`
    background-color: ${props => props.color};
    display: flex;
    align-items: flex-end;
    font-size: 15px;

    &:hover {
        .color-value {
            display: block;
        }
    }

    .color-value {
        display: none;
        padding: 5px 3px;
        background-color: rgba(0,0,0,50%);
        color: #fff;
        cursor: pointer;
    }
`

export default StyledColorStripe;
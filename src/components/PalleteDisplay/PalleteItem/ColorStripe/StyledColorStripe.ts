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
        padding: 5px 10px;
        border-top-right-radius: 4px;
        background-color: rgba(0,0,0,20%);
        font-weight: 500;
        color: #fff;
        letter-spacing: 1.7px;
        cursor: pointer;
        transition: background-color 0.15s;
        &:hover {
            background-color: rgba(0,0,0,50%);
        }
    }
`

export default StyledColorStripe;
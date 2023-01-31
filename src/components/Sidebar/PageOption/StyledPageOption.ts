import styled from "styled-components";

const StyledPageOption = styled.button`
    
    display: flex;
    align-items: center;
    background: none;
    padding: 7px 0px 7px 10px;
    margin-bottom: 5px;
    border: none;
    border-radius: 10px;
    font-size: 17px;
    font-weight: 500;
    color: #515151;
    cursor: pointer;
    transition: color 0.2s;
    .icon {
        fill: #515151;
        transition: fill 0.2s;
    }

    &:hover {
        color: #191919;
        .icon {
            fill: #191919;
        }
    }

    &.active {
        background-color: #EFEFEF;
        color: #191919;
        .icon {
            fill: #191919;
        }
    }

    @media screen and (max-width: 500px) {
        flex-direction: column;
        .icon {
            scale: 0.7;
        }

        &.active {
            background: none;
        }
    }
`
export default StyledPageOption;
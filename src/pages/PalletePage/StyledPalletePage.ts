import styled from "styled-components";

const StyledPalletePage = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:75px 270px 0px 200px;
    opacity: 0;
    animation: fadeIn 0.5s;
    animation-fill-mode: forwards;
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        
        100% {
            opacity: 1;
        }
    }

    .pallete-bar {
        width: max(40%, 300px);
        padding: 10px 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .pallete-actions {
            display: flex;
        }
    }

    .color-data {
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 800px) {
        margin-right: 0px;
    }

    @media screen and (max-width: 450px) {
        margin-left: 0px;
        margin-bottom: 130px;
        .color-data {
            display: grid;
            grid-template-columns: 1fr 1fr;
            row-gap: 10px;
        }
    }
`

export default StyledPalletePage;
import styled from "styled-components";

type StyledPalleteDisplayProps = {
    activePage: string
}

const StyledPalleteDisplay = styled.section<StyledPalleteDisplayProps>`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin: 75px ${props => props.activePage == 'Collection' ? '10px' : '275px'} 0px 200px;
    width: 100%;
    padding: 0px 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => props.activePage == 'Collection' ? 'flex-start' : 'space-envely'};
    gap: 2vw;
    grid-template-columns: repeat(${props => props.activePage == 'Collection' ? 5 : 4}, 1fr);
    opacity: 1;
    &.fadeIn {
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
        
    }

    @media screen and (max-width: 800px) {
        margin-right: 0px;
    }

    @media screen and (max-width: 500px) {
        margin-left: 0px;
        margin-bottom: 150px;
        justify-content: space-evenly;
    }

`

export default StyledPalleteDisplay;
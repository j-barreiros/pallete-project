import styled from 'styled-components';

type StyledCollectionBarProps = {
    activePage: boolean;    
} 

const StyledCollectionBar = styled.section<StyledCollectionBarProps>`
    display: ${props => props.activePage ? 'none' : 'flex'};
    flex-direction: column;
    align-items: center;
    position: fixed;
    width: 270px;
    height: 100vh;
    margin-top: 70px;
    right: 0px;

    .title {
        color: #191919;
        margin-bottom: 15px;
    }
    
    .collection-display {
        display: grid;
        margin: 0px 10px;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 7px;
    }

    @media screen and (max-width: 800px) {
        display: none;
    }
`

export default StyledCollectionBar;
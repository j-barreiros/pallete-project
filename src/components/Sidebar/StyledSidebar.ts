import styled from 'styled-components';

const StyledSidebar = styled.section`
    position: fixed;
    width: 200px;
    height: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    background-color: red;

    .pages {
        display: flex;
        flex-direction: column;
        .side-option {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
    }
`

export default StyledSidebar;
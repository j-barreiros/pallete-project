import styled from 'styled-components';

const StyledNavbar = styled.section`
    position: fixed;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    box-shadow: 0px 5px 10px #f0f0f0;
    background-color: #fff;
    z-index: 2;

    .logo {
        display: flex;
        align-items: center;
        margin-left: 20px;
        color: #191919;
        cursor: pointer;
        .icon {
            background-clip: initial;
            fill: #191919;
            margin-right: 10px;
        }
    }
`

export default StyledNavbar;
import styled from "styled-components";

const StyledPalleteItem = styled.article`
    width: 20vw;
    height: 200px;
    background-color: red;
    .color-box {
        overflow: auto;
        display: grid;
        grid-template-rows: 70px 50px 30px 30px;
    }
`

export default StyledPalleteItem;
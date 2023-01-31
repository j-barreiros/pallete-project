import styled from "styled-components";

type StyledPalleteItemProps = {
    isLiked: boolean;
}

const StyledPalleteItem = styled.article<StyledPalleteItemProps>`
    width: 100%;
    max-width: 250px;
    min-width: 200px;

    .color-box {
        overflow: auto;
        display: grid;
        grid-template-rows: 70px 60px 45px 45px;
        border-radius: 10px;
    }

    .pallete-info {
        display: flex;
        padding: 20px 0px;
        justify-content: space-between;
        align-items: center;

        .like-btn {
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
        }
    }
`

export default StyledPalleteItem;
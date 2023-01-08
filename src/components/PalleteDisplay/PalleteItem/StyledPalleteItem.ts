import styled from "styled-components";

type StyledPalleteItemProps = {
    isLiked:boolean;
}

const StyledPalleteItem = styled.article<StyledPalleteItemProps>`
    max-width: 250px;

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
            padding: 3px 5px;
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
            }
        }
    }
`

export default StyledPalleteItem;
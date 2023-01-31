import styled from 'styled-components';
import { PalleteType } from '../../../context/PalletesContext';

type StyledCollectionItemProps = {
    pallete: PalleteType; 
}

export const StyledCollectionItem = styled.article<StyledCollectionItemProps>`
    position: relative;
    width: 50px;
    height: 50px;
    margin: 0 auto;
    border-radius: 5px;
    
    &:hover {
        .close-btn {
            display: block;
        }
    }

    .close-btn {
        display: none;
        position: absolute;
        top: 1px;
        right: 1px;
        padding: 1px 6px 3px 6px;
        background-color: rgba(0,0,0,0.6);
        border: none;
        border-radius: 50%;
        font-size: 12px;
        color: #fff;
        cursor:pointer;
    }
    
    .pallete-box {
        width: 50px;
        height: 50px;
        border-radius: 7px;
        overflow: hidden;
        display: grid;
        grid-template-rows: repeat(4, 25%);
        cursor: pointer;
        .color1 {
            background-color: ${props => props.pallete.color1};
        }
        .color2 {
            background-color: ${props => props.pallete.color2};
        }
        .color3 {
            background-color: ${props => props.pallete.color3};
        }
        .color4 {
            background-color: ${props => props.pallete.color4};
        }
    }


    .saved-popup {
        position: absolute;
        bottom: -15px;
        background-color: gray;
        z-index: 1;
        opacity: 0;
    }
`

export default StyledCollectionItem;
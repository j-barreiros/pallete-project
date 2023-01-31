import styled from "styled-components";

const StyledCopyableValue = styled.button`
    position: relative;
    margin-top: 10px;
    background:none;
    border: none;
    letter-spacing: 1.1px;
    cursor:pointer;

    &:hover {
        &.stripe {
            p {
                background-color: rgba(0,0,0,100%);
            }
        }
    }

    .copy-alert, .copy-value {
       padding: 3px 5px;
    }
    
    &.stripe {
        .copy-alert, p {
            border-radius: 0px 5px 0px 0px;
        }
        
        p {
            padding: 5px 5px;
            background-color: rgba(0,0,0,50%);
            color: white;
        }
    }

    &.text {
        .copy-alert, p {
            padding: 5px 4px;
            border-radius: 5px;
        }
    }

    &.button {
        display: flex;
        align-items: center;
        margin: 0px 0px 0px 10px;
        padding: 7px 5px;
        border: 1px solid #eee;
        border-radius: 5px;
        
        .copy-alert, p {
                border-radius: 5px;
        }
        
        .icon {
            margin-right: 10px;
        }
    }
    

    .copy-alert {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color:white;
        background-color: black;
        transition: opacity 0.5s;
        opacity: 0;
        &.animate {
            opacity: 1;
        }
    }
`

export default StyledCopyableValue;
import styled from "styled-components";


const StyledCreatePallete = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:55px 270px 0px 200px;

    .title {
        margin-top: 25px;
        font-size: 1.4rem;
        font-weight: 500;
    }

    .info {
        margin-top: 10px;
    }

    .color-form {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        .color-box {
            display: flex;
            flex-direction: column;
            .color-input {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                width: clamp(300px, 30vw, 1000vw);
                height: max(7vw, 70px);
                appearance: none;
                border: none;
                background: none;
                &:first-child {
                    ::-webkit-color-swatch {
                        border-radius: 10px 10px 0px 0px;
                    }
                }
                &:last-child {
                    ::-webkit-color-swatch {
                        border-radius: 0px 0px 10px 10px;
                    }
                }
            }
            
            .color-input::-webkit-color-swatch-wrapper {
                padding: 0;
            }
    
            .color-input::-webkit-color-swatch {
                border: none;
            }
        }
        

        .add-btn {
            width: max(10vw, 150px);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 20px;
            font-size: 1.2rem;
            font-weight: 500;
            color: #191919;
            padding: 7px 0px;
            border: none;
            border-radius: 7px;
            background-color: #EFEFEF;
            cursor: pointer;
            transition: transform 1s;
            .icon {
                margin-right: 10px;
                fill: #191919;
            }

            &:hover {
                transform: scale(1.1);
                background-color: #ECECEC;
            }
        }
        
    }
    
    @media screen and (max-width: 800px) {
        margin-right: 0px;
    }

    @media screen and (max-width: 500px) {
        margin: 50px 0px 100px 0px;
    }
`

export default StyledCreatePallete;
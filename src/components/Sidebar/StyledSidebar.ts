import styled from 'styled-components';

const StyledSidebar = styled.section`
    position: fixed;
    width: 200px;
    height: 100%;
    margin-top: 70px;
    display: flex;
    flex-direction: column;

    .pages {
        display: flex;
        flex-direction: column;
        padding: 5px 20px 0px 20px;
           
        .sub-options {
            display: flex;
            flex-direction: column;
            .subpage {
                display: flex;
                padding: 7px 0px 7px 15px;
                margin: 0px 7px 7px 7px;
                background: none;
                border: none;
                border-radius: 10px;
                font-size: 12px;
                color: #191919;
                cursor: pointer;
                
                &.active  {
                    background-color: #EFEFEF;
                }
            }
        }     
    }

    @media screen and (max-width: 500px) {
        width: 100%;
        height: fit-content;
        flex-direction: row;
        bottom: 0px;
        background-color: #fff;
        z-index: 2;

        .pages {
            width: 100%;
            flex-direction: row;
            padding: 0px;
            align-items: center;
            justify-content: space-evenly;
            .sub-options {
                width: 100%;
                position: absolute;
                flex-direction: row;
                top: -40px;
                .subpage {
                    width: 30%;
                    min-width: 50px;
                    padding: 5px 0px;
                    align-items: center;
                    justify-content: center;
                    background-color: #fff;
                }
            }
        }

    }
`

export default StyledSidebar;
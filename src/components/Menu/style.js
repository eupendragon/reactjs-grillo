import styled from 'styled-components'

export const ContainerMenu = styled.div`
    display: flex;
    grid-row: 1/3;
    grid-column: 1/2;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;

    div.tudo{
        height: 150vh;
        grid-row: 2/3;
        grid-column: 1/2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: space-between;
    }
    .menu {
        grid-row: 2/3;
        grid-column: 1/2;
        color: white;
        margin-left: 15px;
        margin-top: 2vh;    
    }

    .profile {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        cursor: pointer;
        padding: 10px;
        margin-top: 15px;

    }

    .infoProfile {
        display: flex;
        flex-direction: column;
    }

    .nameProfile {
        font-size: 26px;
    }

    .logoutProfile {
        width: 45%;
        line-height: 2vh;
        cursor: pointer;
        margin-top: 2px;
        background-color: #FFF;
        font-weight: bold;
        padding: 2px 4px;
        border-radius: 3px;
        font-size: 13px;
        color: #141A1F;
    }

    .circle {
        background-size: cover;
        background-position: center;
        width: 70px;
        height: 70px;
        border-radius: 100%;
        margin-right: 8px;
        position: relative;
        overflow: hidden;
    }

    .circle img {
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .menuOptions {
        display: flex;
        flex-direction: column;
        margin-top: 23px;
    }

    .option{
        display: flex;
        flex-direction: row;
        cursor: pointer;
        margin-top: 15px;
        align-items: center;
        padding: 7px;
    }
    .icon{
        width: 20%;
    }
    .icon img{
        width: 100%;
    }
    .option p {
        line-height: 5vh;
        font-weight: bold;
        font-size: 22px;
        margin-left:15px;
        color: rgba(255, 255, 255, 0.22);
    }
    .opSelect:hover{
        background: #30353A;
        transition: 0.2s;
        border-radius: 10px 0px 0px 10px;
    }
    .opSelect:hover p{
        color: #FFF;
    }
`;
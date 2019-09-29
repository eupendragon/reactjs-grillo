import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 100vh;
    background-color: #323A40;
`;

export const Pharse = styled.div`
    display: flex; 
    background-color: rgba(0, 0, 0, 0.2);
    align-content: center;
    justify-content: center;
    img{
        align-content: flex-start;
        justify-content: flex-end;
        margin-left: -2px;
        width:70vh;
    }
    p{
        color: #bdbdbd;
        font-weight: bolder;
        margin: 25px;
        position: absolute;
        bottom: 0;
    }
    span{
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const Enter =  styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 25vh 25vh 25vh;
    grid-area: auto;
    justify-content: center;
    img{
        width: 17vw;
        display: block;
        margin: 45px auto;
    }
    h1{
        text-align: center;
        margin-bottom: 5px;
        font-size: 35px;
        color: white;
    }
    h2{
        width: 180px;
        font-size: 16px;
        font-weight: bolder;
        text-align: center;
        background-color: #FFF;
        padding: 14px 0;
        border-radius: 5px;
        font-weight: bold;
        color: #323A40;
        margin: 0 auto;
    }
    input{
        color: #bdbdbd;
        font-size: 22px;
        margin: 5px;
        width:500px; /* DECLARAÇÃO NÃO RESPONSIVA, DEFINITIR COM PORCENTAGEM E UTILIZAR @MEDIA SCREEN */
        padding: 15px;
        background: rgba(0, 0, 0, 0.2);
        border: none;
        border-radius: 10px;
    }
    input::-webkit-input-placeholder{
    color:#bdbdbd;
    }
    button{
        width:500px; /* DECLARAÇÃO NÃO RESPONSIVA, DEFINITIR COM PORCENTAGEM E UTILIZAR @MEDIA SCREEN */
        cursor: pointer;
        margin-top: 45px;
        margin-bottom: 15px;
        border: none;
        font-size: 22px;
        font-weight: bold;
        color: #FFF;
        padding: 10px;
        background: linear-gradient(97.5deg, #AF5055 0%, #B17052 100%);
        border-radius: 10px;
    }
    p{
        color: #bdbdbd;
        font-weight: bolder;
    }
    span{
        cursor: pointer;
        text-decoration: underline;
        color: rgb(68, 147, 238);
        margin-left: 10px;
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 7vh;
`;
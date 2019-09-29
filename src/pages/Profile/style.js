import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 3fr 10fr 1fr;
    grid-template-rows: 3vh 97vh;
    background-color: #141A1F;
`;
export const Content = styled.div`
    background: #FFF;
    border-radius: 10px 10px 0px 0px;
    grid-row: 2/3;
    grid-column: 2/3;
    padding: 40px;
`;

export const FormAll = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    input, textarea, select{
            border: none;
            border-radius: 10px;
            background: #e6e6e6;
            height: 5vh;
            margin: 10px 5px;
            padding: 10px;
            width: 100%;
        }
    textarea{
            height: 15vh;
    } div:nth-child(2){
        grid-column: 2/3;
        display: flex;
        flex-direction: column;
        
        }button{
            width: 150px;
            height: 5vh;
            border-radius: 5px;
            background: #83C6D4;
            font-weight: bolder;
            font-size: 15px;
            color: #1e1e1e;
            align-self: flex-end;
            cursor: pointer;
        }
`;

export const Time = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Place = styled.div`
    display: flex;
    flex-direction: row;
`;

export const UploadPhoto = styled.div`
    background: #e6e6e6;
    display: flex;
    flex-direction: column;
    margin-right: 15px;
    align-content: center;
    justify-items: center;
    border-radius: 15px;
    img{
        margin: auto auto;
        justify-content: center;
        align-items: center;
        width: 5vh;
        cursor: pointer;
    }
    button{
        display: block;
        margin: 15px auto;
        width: 90%;
        cursor: pointer;
        height: 5vh;
        border-radius: 5px;
        background: #313940;
        color: white;
        font-weight: bolder;
    }
`;

// FORMATAÇÃO DA CONTAINER EVENTO (ADAPTAR)
export const OpEvento = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    div:first-child{
        background: #e6e6e6;
        display: flex;
        flex-direction: column;
        margin-right: 15px;
        align-content: center;
        justify-items: center;
        border-radius: 15px;
        img{
            margin: auto auto;
            justify-content: center;
            align-items: center;
            width: 5vh;
            cursor: pointer;
        }
        button{
            cursor: pointer;
            margin: 15px;
            height: 5vh;
            border-radius: 5px;
            background: #313940;
            color: white;
            font-weight: bolder;
        }
    }
    div:nth-child(2){
        grid-column: 2/3;
        display: flex;
        flex-direction: column;
        input, select,textarea{
            border: none;
            border-radius: 10px;
            background: #e6e6e6;
            height: 5vh;
            margin: 10px 5px;
            width: 100%;
            padding: 10px;
        }
        textarea{
            height: 15vh;
        }
        
    }
`;

export const BtnForm = styled.div`
    display: flex;
    justify-content: flex-end;
    button:first-child{
            background:#141A1F;
            color: #FFF;                
            margin-right: 10px;
        }
        button{
            width: 150px;
            height: 5vh;
            border-radius: 5px;
            background: #83C6D4;
            font-weight: bolder;
            font-size: 15px;
            color: #1e1e1e;
            cursor: pointer;
            margin: 10px 0 0 0;
            }
`;


import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 3fr 10fr 1fr;
    grid-template-rows: 3vh 97vh;
    background-color: #141A1F;
`;

export const Content = styled.div`
    background: #424C56;
    border-radius: 10px 10px 0px 0px;
    grid-row: 2/3;
    grid-column: 2/3;
    padding: 40px;
    h1{
        color: white;
        font-size: 50px;
        line-height: 65px;
        margin-right: 2vh; 
    }
    div.header{
        background-color: white;
    }
    div h4{
        color: #141A1F;
    }
`;

export const YourInfo = styled.div`
    display: flex;
    flex-direction: row;
    img{
        width: 300px;
        height: 300px;
        border-radius: 15px;
    }
    div{
        display: flex;
        flex-direction: column;
        width: 100%;        
    }
    
`;
const TextInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 25px;
    label{
        color: #FFF;
        font-size: 20px;
        font-weight: bolder;
        margin-bottom: 5px;
    }
    input,textarea{
        border:none;
        height: 40px;
        width: 100%;
        border-radius: 5px;
        padding: 15px;
        font-size: 16px;
    }
    textarea{
        height: 100%;
        resize: none;
    }
    section{
        display: flex;
        flex-direction: row;
        margin-bottom: 15px;
        aside:first-child{
            margin-right: 15px;
        }
        aside{
            display: flex;
            flex-direction: column;
            width: 90%;
        }
    }
    
`;

const Options = styled.div`
    display: flex;
    margin-top: 15px;
    align-items: flex-end;
    justify-content: flex-end;
    button{
        background-color: #313940;
        color: #FFF;
        font-size: 16px;
        font-weight: bolder;
        border-radius: 5px;
        width: 200px;
        height: 40px;
    }
`;
export {TextInfo, Options}
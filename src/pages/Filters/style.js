import styled from 'styled-components';


export const Container = styled.div`
    display: grid;
    grid-template-columns: 3fr 10fr 1fr;
    grid-template-rows: 3vh 97vh;
    background-color: #141A1F;
`;
export const Content = styled.div`
    background: #FFF;
    overflow-y: hidden;
    border-radius: 10px 10px 0px 0px;
    grid-row: 2/3;
    grid-column: 2/3;
    padding: 40px;
`;
export const ContentResults = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
`;
export const Results = styled.div`
    display:flex;
    flex-direction: column;
    width: 350px;
    height: 350px;

`;
export const TypeRes = styled.div`
    button{
        line-height: 30px;
        margin: 15px 0;
        padding: 10px;
        border-radius: 5px;
        background-color: #182026;
        color:#FFF;
        font-weight: bold;
        width: 120px;
    }
`;
export const Estrutura = styled.div`
    display: flex;
    flex-direction: row;
    background: #e6e6e6;
    width: 100%;
    height: 130px;
    border-radius: 15px;
    div.prof{
        border-radius: 15px 0 0 15px;
        width: 200px;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    div.back{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-content: center;
        width: 100%;
        height: 100%;
        padding: 15px;
        p{
            font-size: 35px;
            font-weight:bold;
        }
        button{
            background-color:#182026;
            margin-top: 20px;
            height: 35px;
            width: 100%;
            border-radius: 5px;
            color: white;
            font-weight:bold;
            cursor: pointer;
        }
    }
`;
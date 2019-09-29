import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin: 3vh auto; 
    flex-direction: row;
    justify-content: space-between;
    flex-flow: row wrap;
    button{
        margin: 5px 0;
        flex-flow: wrap;
        border: none;
        width: 150px;
        line-height: 35px;
        background-color: #313940;
        color: #FFF;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
    }
    button:hover{
        background-color:#C98C6A;
    }
`;
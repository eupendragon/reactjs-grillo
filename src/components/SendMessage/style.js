import styled from 'styled-components';


export const WritteMessage = styled.div`
    display: flex;
    background-color: #40474E;
    border-radius: 10px;
    input{
    color: #e6e6e6;
    background: transparent;
    border: none;
    padding: 10px 15px;
    font-size: 20px;
    height: 6vh;
    width: 100%; 
    }
    input::-webkit-input-placeholder{
        color: #e6e6e6;
    }
    img{
        width: 4vh;
        margin-right: 2vh;
        cursor: pointer;
    }
`;
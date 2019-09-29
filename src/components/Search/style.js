import styled from 'styled-components';

export const Bar = styled.div`
    display: flex;
    min-height: 50px;
    grid-row: 1/2;
    grid-column: 3/4;
    flex-direction: row;
    background:#E6E6E6;
    border-radius: 10px;
    padding: 2px 12px;
    input{
        border: none;
        background-color: #E6E6E6;
        width: 90%;
        height: 100%;
        font-size: 16px;
    }
    input::-webkit-input-placeholder{
        color: #1e1e1e;
    }
    img{
       width: 4vh;
    }
`;
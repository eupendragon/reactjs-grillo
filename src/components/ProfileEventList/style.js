import styled from 'styled-components';

export const Container = styled.div`
    grid-column: 1/2;
    margin-top: 40px;

    span{
        color: #8B8F92;
        font-size: 25px;
    }
    button{
        width: 100%;
        border-radius: 10px;
        height: 45px;
        background-color: #2F363C;
        font-weight: bolder;
        font-size: 18px;
        color: #FFF;
        cursor: pointer;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    min-height: 250px;
    max-height: 250px;
`;
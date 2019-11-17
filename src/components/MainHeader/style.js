import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 4fr;
    grid-template-rows: 7vh 9vh;
    h1{
        font-size: 50px;
        line-height: 65px;
        margin-right: 2vh; 
    }
    h4{
        text-align: center;
        border-radius: 5px;
        line-height: 51px;
        color: white;
        font-size: 18px;
    }
`;

export const YourPosition = styled.div`
    width: 100%;
    background: #182026;
    border-radius: 5px;
    grid-row: 2/3;
    grid-column: 1/3;
`;
export const Place = styled.div``;
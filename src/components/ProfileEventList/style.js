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
export const Album = styled.div`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-content: center;
`;

export const Info = styled.div`
    padding: 7px 10px;
    h3{
        color: #FFF;
    }
    p{
        color: #ACAFB1;
        font-weight: bold;
        line-height: 30px;
    }
`;

export const EventContainer = styled.div`
    margin: 5px;
    background-size: 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-self: center;
    background-color: #2F363C;
    border-radius: 10px;
    min-width: 150px;
    max-width: 150px;
    min-height: 200px;
    max-height: 200px;
    overflow: hidden;
    
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    min-height: 250px;
    max-height: 250px;
`;
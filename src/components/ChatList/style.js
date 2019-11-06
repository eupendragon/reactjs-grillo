import styled from 'styled-components';

export const Container = styled.div`
    display: flex;  
    flex: 1 1 0;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: scroll;
    padding-right: 2vh;
`;

export const MessageSent = styled.div`
    display: flex;
    list-style: none;
    justify-content: flex-end;
    padding: 10px 0;
`;

export const MessageReceive = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 10px 0;
    list-style: none;
`;
export const BoxSent = styled.p`
    background: #40474E;
    color: white;
    border-radius: 10px 10px 0 10px;
    padding: 15px;
    text-align: left;
    line-height: 20px;
`;
export const BoxReceive = styled.div`
    background: #FFF;
    color: black;
    border-radius: 10px 10px 10px 0;
    padding: 15px;
    text-align: left;
    line-height: 20px;
`;

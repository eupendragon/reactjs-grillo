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

export const Scroll = styled.div`
    overflow-y: scroll;
    height: 100%;
`;

export const Posts = styled.div`
    height: 85%;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

export const NewPostContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 15px;
`;

export const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        display: none;
    }
    button{
        background: transparent;
    }
    label{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #42B5BC;
        border-radius: 100%;
        margin: 15px;
        height: 50px;
        width: 50px;
    }
`;

export const PostForm = styled.div`
    display: flex;
    flex: 1 1 0;
    background: #F2F2F2;
    border-radius: 15px;
    height: 310px;
    div{
        background: grey;
        width: 170px;
        margin: 15px;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
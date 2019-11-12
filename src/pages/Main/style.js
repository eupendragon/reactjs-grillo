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
export const PostManager = styled.form`
    display:flex;
    flex-direction:column;
    margin: 15px 5vh;
    button.postar{
        margin-top: 15px;
        max-width: 100%;
        width: 150px;
        max-height: 100%;
        height: 45px;
        align-self: flex-end;
        border-radius: 10px;
        background: #42B5BC;
        font-weight: bolder;
        font-size: 16px;
        color: white;
    }
`;
export const NewPostContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 15px;
    input{
        display: none;
    }
    button{
        background: transparent;
        img{
            width: 75px;
        }
    }
    label{
        display: flex;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        background: #797979;
        border-radius: 100%;
        margin: 15px;
        height: 50px;
        width: 50px;
    }
    label:hover{
            transition: 0.1s;
            transform: scale(0.9);
    }
    span{
        color: #797979;
        font-weight: 900;
    }
`;

export const PostForm = styled.div`
    display: flex;
    flex: 1 1 0;
    background: #F2F2F2;
    border-radius: 15px;
    height: 310px;
    input[type=file]{
        display: none;
    }
    img.imgIcon:hover{
        transition: 0.3s;
        transform: scale(1.2);
        cursor: pointer;
        z-index: 999999999;
    }
    div:first-child{
        background: #5555;
        background-size: cover;
        background-position: center;
        width: 170px;
        margin: 15px;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div:nth-child(2){
        display: flex;
        flex-direction: column;
        flex: 1 1 0;
        margin: 15px;
    }
    input, textarea{
        background: none;
        border: none;
    }
    input{
        font-weight: bolder;
        font-size: 28px;
        margin:20px 0 20px;
    }
    textarea{
        font-weight: lighter;
        font-size: 18px;
        resize: none;
        height: 90%;
    }
`;
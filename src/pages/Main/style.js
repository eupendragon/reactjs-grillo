import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 3fr 10fr 1fr;
    grid-template-rows: 3vh 97vh auto;
    background-color: #141A1F;
`;
export const Content = styled.div`
    background: #FFF;
    max-height: 900px;
    overflow-y: hidden;
    border-radius: 10px 10px 0px 0px;
    grid-row: 2/3;
    grid-column: 2/3;
    padding: 40px;

`;

export const Scroll = styled.div`
    overflow-y: scroll;
    height: 85%;
`;

export const Posts = styled.div`
    height: 85%;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
`;
export const PostManager = styled.form.attrs(props => ({
    autoComplete: "off"
}))`
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
    div{
        background-size: cover;
        background-position: center;
        width: 70px;
        height: 70px;
        border-radius: 100%;
        position: relative;
        overflow: hidden;
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

export const PostForm = styled.div.attrs(props => ({
    autoComplete: "off"
}))`
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
        flex-direction: column;
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
        section{
            display: flex;
        }
    }
    input, textarea{
        margin-top: 15px;
        background: none;
        border: none;
    }
    input{
        font-weight: bolder;
        font-size: 28px;
    }
    section{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        input{
            font-size: 18px;
            font-weight: lighter;
            color: #656565;
        }
    }
    hr{
        border-top: 2px solid rgba(0,0,0,0.2)
    }
    textarea{
        font-weight: lighter;
        font-size: 18px;
        resize: none;
        height: 90%;
    }
`;













// POST DISPLAY STYLE

export const PostContainer = styled.div`
    display: grid;
    width: 600px;
    margin: 4vh auto;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 300px 50px; 
`;

export const Head = styled.div`
display: flex;
grid-column:2/3; 
grid-row: 1/2;
section{
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-right: 25px;
    div{
        margin-right: 15px;
        display: flex;
        flex-direction: column;
        align-content:center;
        justify-content:center;
    }
    .circle {
        background: red;
        background-size: cover;
        background-position: center;
        width: 70px;
        height: 70px;
        border-radius: 100%;
        position: relative;
        overflow: hidden;
    }
    .circle img {
        width: 100%;
        height: 100%;
        position: absolute;
    }
    span:first-child{
        font-size: 20px;
        font-weight: bolder;
    }
    span:nth-child(2){
        color: #656565;
        font-weight: bolder;
    }
}
`;
export const Body = styled.div`
    grid-row: 2/3;
    grid-column:2/3; 
   
    h3{
        font-size: 25px;
        margin: 5px 0;
    }
    p{
        min-height: 270px;
        max-height: 270px;
        text-align: justify;
    }
    div{
        display: flex;
        justify-content: flex-end;
        align-self: flex-end;
    }
    button{
        background-color: #4289A2;
        height: 35px;
        border-radius:7px;
        font-weight: bold;
        color: white;
        margin: 8px 0;
        cursor: pointer;
        width: 100%;
    }
`;
export const Post = styled.div`
    grid-column: 1/2;
    grid-row: 1/2;
    max-width: 20px;
    div{
        background-position: center;
        background-size: cover;
        width: 280px;
        height: 450px;
        background-color: #f4f4ff;
        overflow: hidden;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
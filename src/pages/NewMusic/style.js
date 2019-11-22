import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    overflow: hidden;
    grid-template-columns: 3fr 10fr 1fr;
    grid-template-rows: 3vh 97vh auto;
    background-color: #141A1F;
`;
const Content = styled.div`
    background-image: linear-gradient(to top, #BC8C6C, transparent 99%);
    border-radius: 10px 10px 0px 0px;
    grid-row: 2/3;
    grid-column: 2/3;
    padding: 40px;
    h1{
        color:white;
    }
    div:nth-child(2){
        background: white;
    }h4{
        color: #141A1F;
    }
    input{
        background: transparent;
    }
    h3{
        margin-top: 15px;
        font-size: 60px;
        color:#FFF;
    }
`;

const NewMusic = styled.form.attrs(props => ({
    autoComplete: "off"
}))`
    display: flex;
`;

const Capa = styled.div.attrs(props => ({

}))`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.3);
    background-position: center;
    background-size: cover;
    
    width: 300px;
    height: 300px;

    border-radius: 15px;
    input[type="file"]{
        display: none;
    }
    img:hover{
        cursor: pointer;
        transform: scale(1.3);
        transition: 0.3s;
    }
`;

const MusicAndTitle = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 5px 25px;
    input{
        border: none;
        color: #FFF;
    }
    input[type="text"]{
        font-size: 35px;
        font-weight: bolder;
    }
    label{
        color: #FFF;
        background-color: #BC8C6C;
        cursor: pointer;
        height: 50px;
        border-radius: 5px;
        input[type="file"]{
            display: none;
        }
    }
`;

export {
    Container,
    Content,
    NewMusic,
    Capa,
    MusicAndTitle
}
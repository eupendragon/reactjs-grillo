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
    div.header{
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

const Tabs = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 10px 0 20px;
    h2:first-child{
        filter: opacity(1);
        border-bottom: 2px solid #FFF;
    }
    h2{
        color: #FFF;
        filter: opacity(0.3);
        cursor: pointer;
    }
    h2:hover{
        transition: 0.2s;
        filter: opacity(1);
    }
`;

const NewMusic = styled.form.attrs(props => ({
    autoComplete: "off"
}))`
    display: flex;
`;
// =========================================================
const FormMusic = styled.div.attrs(props => ({
    id: 'tab1'
}))`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    div.DefaultStyle{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
    }
`;

const MusicUpload = styled.div`
    margin-top: 20px;
    input[type="file"]{
        display: none;
    }
    button{
        width: 230px;
        height: 45px;
        background-color: rgba(0,0,0,0.2);
        color: #FFF;
        font-size: 20px;
        border-radius: 5px;
        font-weight: lighter;
        label{
            cursor: pointer;
        }
    }
`;

const ProgressCircle = styled.div`
    margin-top: 20px;
    width: 300px;
    height: 300px;
    border-radius: 100%;  
    background-color: rgba(255,255,255,0.2);

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    div{
        background-color: #E58342;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            cursor: pointer;
        }
        img:hover{
            transition: 0.3s;
            transform: scale(1.1);
        }
    }
`;

// =========================================================
const FormArt = styled.div.attrs(props => ({
    id: 'tab2'
}))`
    margin-top: 20px;
    display: none;
    width: 100%;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        button{
            width: 350px;
            height: 45px;
            background-color: rgba(0,0,0,0.2);
            color: #FFF;
            font-size: 20px;
            border-radius: 5px;
            font-weight: lighter;
            margin-top: 20px;
        }
        label{
            cursor: pointer;
        }
    }
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
// =========================================================
const FormName = styled.div.attrs(props => ({
    id: 'tab3'
}))`
    margin-top: 20px;
    display: none;
    width: 100%;
    div{
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    section{
        min-width: 300px;
        min-height: 300px;
        background-color: rgba(0,0,0,0.2);
        border-radius: 10px;
        background-position: center;
        background-size: cover;
    }
    aside{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        margin-left: 20px;
        input{
            width: 100%;
            border: none;
            background-color: #FFF;
            height: 50px;
            border-radius: 10px;
            padding: 15px;
            font-size: 20px;
            font-weight: bolder;
        }
        input::placeholder{
            font-weight: lighter;
            color: #353535;
        }
        button{
            color: #FFF;
            font-size: 15px;
            margin-top: 20px;
            background-color: rgba(0,0,0,0.2) ;
            height: 50px;
            width: 175px;
            border-radius: 10px;
            font-weight: bold;
        }
    }
`;

export {
    Container,
    Content,
    Tabs,
    NewMusic,
    FormMusic,
    ProgressCircle,
    MusicUpload,
    FormArt,
    FormName,
    Capa,
}
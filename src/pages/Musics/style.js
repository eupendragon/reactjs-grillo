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


const Player = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0 -15px;
`;

const Info = styled.section`
    display: flex;
    margin-left: 20px;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 250px;
    color: #FFF;
    h3{
        font-size: 60px;
    }
    p{
        font-size: 30px;
    }
`;

const Controls = styled.aside`
    display: flex;
    flex-direction: row;
    margin: 25px 0;
    img{
        margin: 10px;
        width: 45px;
        cursor: pointer;
    }
    img.play{
        width: 65px;
    }
`;

const Playlist = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: scroll;
    max-height: 40%;
`;
const Item = styled.section`
    margin: 7px 0;
    line-height: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &:hover{
        background-color: rgba(255,255,255,0.2);
        border-radius: 25px;
        cursor: pointer;
    }
    p{
        padding: 0 15px;
        font-size: 20px;
        color: white;
    }
    img{
        width: 50px;
        height: 50px;
        background: red;
    }
`;

const Title = styled.section.attrs(props => ({

}))`
    display: flex;
    align-items: center; 
    div{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;    
        margin: 15px 0;
        button{
            display: flex;
            justify-content: center;
            align-items: center;
            
            background-color: transparent;
            color: #FFF;
            font-weight: bolder;
            font-size: 23px;

            border: 3px solid #FFF;
            border-radius: 15px;
            width: 205px;
            height: 50px; 
            img{
                width: 25px;
                margin-right: 8px;
            }
        }
        button:hover{
            color: #8D6D58;
            transition: 0.2s;
            background-color: #fff;
        }
    }
`;

export {
    Container,
    Content,
    Player,
    Info,
    Controls,
    Item,
    Title,
    Playlist
}
import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 3fr 10fr 1fr;
    grid-template-rows: 3vh 97vh;
    background-color: #141A1F;
`;
export const Content = styled.div`
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


export const Player = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 250px;
`;
export const Info = styled.section`
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

export const Controls = styled.aside`
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

export const Playlist = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const Item = styled.section`
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
`;
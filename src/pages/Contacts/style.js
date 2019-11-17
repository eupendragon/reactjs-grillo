import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 3fr 10fr 1fr;
    grid-template-rows: 3vh 97vh;
    background-color: #141A1F;
    overflow: hidden;
`;
export const Content = styled.div`
    display: grid;
    grid-template-columns: 4fr 6fr;
    grid-template-rows: auto;    
    background-color: #1E272F;
    overflow-y: hidden;
    border-radius: 10px 10px 0px 0px;
    grid-row: 2/3;
    grid-column: 2/3;
`;


export const Chats = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 40px 20px 40px;
    grid-column: 1/2;
    grid-row: 1/3;
    background: #29323A;
    border-radius: 10px 0px 0px 0px;
    h1{
        color: white;
        font-size: 50px;
        line-height: 65px;
        margin-right: 2vh; 
    }
`;


export const Local = styled.div`
        background-color: white;
        border-radius: 5px;
        h4{
            text-align: center;
            border-radius: 5px;
            line-height: 51px;
            color: #29323A;
            font-size: 18px;
            font-weight: bold;
        }
`;

export const WritteMessage = styled.form.attrs(props => ({
    autoComplete: 'off',
}))`
    display: flex;
    background-color: #40474E;
    border-radius: 10px;
    input{
    color: #e6e6e6;
    background: transparent;
    border: none;
    padding: 10px 15px;
    font-size: 20px;
    height: 6vh;
    width: 100%; 
    }
    input::-webkit-input-placeholder{
        color: #e6e6e6;
    }
    button{
        background: none;
    }
    img{
        width: 4vh;
        margin-right: 2vh;
        cursor: pointer;
    }
`;



// CHAT COMPONENTS
export const Messages = styled.div`
    padding: 10px;
    grid-column: 2/3;
    grid-row: 1/3;
    display: flex;
    flex-direction: column;
    padding: 40px 40px 20px 40px;
`;

export const Chat = styled.div.attrs(props => ({
    id: 'divChat',
}))`
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: scroll;
    padding-right: 2vh;
`;

export const MessageSent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 10px 0;
`;

export const BoxSent = styled.p`
    display: flex;
    background: #40474E;
    color: white;
    border-radius: 10px 10px 0 10px;
    padding: 15px;
    text-align: left;
    line-height: 20px;
    margin: 15px 0;
`;


export const Title = styled.div`
    display: flex;
    margin-top: 3vh;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    h3{
        font-size: 50px;
        color: #FFF;
    }

    button{
        border-radius: 100%;
        width: 35px;
        height: 35px;
        font-weight: bolder;
        font-size: 18px
    }
`;
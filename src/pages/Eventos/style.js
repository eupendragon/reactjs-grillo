import styled, {keyframes} from 'styled-components';
// ANIMAÇÕES 
// const upButton = keyframes`
//     from{
//         transform: scale(1.0);
//     }
//     to{
//         transform: scale(1.2);
//     }
// `;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 3fr 10fr 1fr;
    grid-template-rows: 3vh 97vh;
    background-color: #141A1F;
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

export const Messages = styled.div`
    padding: 10px;
    grid-column: 2/3;
    grid-row: 1/3;
    display: flex;
    flex-direction: column;
    padding: 40px 40px 20px 40px;
    h3{
        margin-top: 23px;
        font-size: 50px;
        color: #FFF;
    }
    span{
        font-size: 30px;
        color: #565D63;
    }
`;

export const ListContent = styled.div`
`;




// EVENT ITEM
export const Item = styled.div`
        display: grid;
        grid-template-rows: 5vh 5vh;
        grid-template-columns: 1fr 6fr;
        margin: 60px auto;
        grid-column-gap: 15px;

`;

export const Image = styled.div`
        overflow: hidden;
        grid-row: 1/3;
        grid-column:1/2;
        width: 90px;
        height: 90px;
        border-radius: 15px;
        position: relative;
        img{
            width: 100%;
            height: 100%;
        }
`;

export const Friends = styled.div`
        justify-content: center;
        h3{
            grid-row: 1/2;
            grid-column:2/3;
            color: white;
            font-size: 28px;
        }
        span{
            grid-row: 2/3;
            grid-column:2/3;
            color: rgba(255,255,255,0.5);
            font-size: 20px;
        }
`;


export const Inscribe = styled.div`
        display: flex;
        flex-basis: row;
        margin: 5px 0;
        align-content: center;
        justify-content: space-between; 
        padding: 15px;
        &:hover{
            cursor: pointer;
            border-radius: 15px;
            background-color: #29323A;
        }
        div{
            display: flex;
            flex-direction: row
        }
`;

export const ImageInscribe = styled.div`
        overflow: hidden;
        width: 60px;
        height: 60px;
        border-radius: 100%;
        img{
            width: 100%;
            height: 100%;
        }
`;
export const Details = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        button{
            background: transparent;
        }
        button:hover{
            transition: 0.3s;
            transform: scale(1.2);
        }
        img{
            width: 40px;
            cursor: pointer;
        }

`;

export const Name = styled.p`
        margin-left: 15px;
        font-size: 23px;
        align-self: center;
        color:#FFF;
        font-weight: bold;
`;


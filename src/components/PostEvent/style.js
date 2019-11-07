import styled from 'styled-components';

export const Container = styled.div`
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
section img{
    width: 70px;
}section{
    display: flex;
    flex-direction: row;
    margin-right: 25px;
    div{
        margin: 15px;
        display: flex;
        flex-direction: column;
        align-content:center;
        justify-content:center;
    }span:first-child{
        font-size: 20px;
        font-weight: bolder;
    }span:nth-child(2){
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
`;
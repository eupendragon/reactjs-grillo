import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 3fr 10fr 1fr;
    grid-template-rows: 3vh 97vh;
    background-color: #141A1F;
`;
export const Content = styled.div`
    background: #FFF;
    border-radius: 10px 10px 0px 0px;
    grid-row: 2/3;
    grid-column: 2/3;
    padding: 40px;
`;

export const YourInfo = styled.div`
    display: flex;
    flex-direction: row;
    img{

        background: red;
        width: 300px;
        height: 300px;
        border-radius: 15px;
    }
    div{
        display: flex;
        flex-direction: column;
        margin: 15px; 
        h2{
            color: grey;
        }
    }
`;

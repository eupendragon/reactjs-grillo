import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 3vh auto;
    min-height: 100vh;
    background: linear-gradient(180deg, #D34168 0%, #D67354 22.92%);
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-row: 2/3;
    grid-column: 1/1;
    h1{
        color: white;
        margin: 5px;
    }
    h3{
        background: #FFF;
        padding: 5px 15px;;
        border-radius: 5px;
        color: #D34168;
        margin: 5px;
    }
`;

export const Content = styled.form.attrs(props => ({
    autoComplete: "off",
}))`
    padding: 50px;
    background-color: white;
    border-radius: 10px 10px 0px 0px;
    grid-row: 2/3;
    grid-column: 2/3;
`;

export const Space = styled.div`

`;
export const Stage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h3{
        filter: opacity(0.2);
        cursor: pointer;
    }
    h3:hover{
        transition: 0.2s;
        filter: opacity(1);
    }

`;
export const Submit = styled.button.attrs(props => ({
    type: "submit",
}))`
 cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        margin-top: -12px;
        color: white;
        font-size: 15px;
        font-weight: 700;
        width: 140px;
        height: 45px;
        border-radius: 25px;
        background-color: #182026;
        img{
            margin: 7px;
            width: 25px;
        } span{
            display: flex;
            align-self: center;
        }
`;

export const FormAll = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3{
        font-size: 30px;
        font-weight: bolder;
        margin-top: 25px;
    }
`;
export const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-content:center;
    justify-content: center;
    label{
        font-size: 30px;
        color: #656565;
        font-weight: bold;
    }
    input, select, textarea{
        margin-top: 15px;
        align-self: center;
        background: #e6e6e6;
        border-radius: 10px;
        border: none;
        padding: 15px;
        height:50px;
        width: 100%;
    }
    input::-webkit-input-placeholder{
        color: #656565;
        font-weight: bold;
    }
    div{
        margin: 15px 0; 
    }
`;
export const Photo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px auto;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 350px;
        height: 350px;
        border-radius: 15px;

        background: #e6e6e6;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    img{
        width: 60px;
        display: flex;
        justify-content: center;
        align-content: center;
        cursor: pointer;
    }
    input{
        display: none;
    }
    img:hover{
        transition: 0.2s;
        transform: scale(1.2);
    }
`;

export const Type = styled.div`
padding: 0 30px;
margin: 25px auto;
display: flex;
width: 100%;
flex-direction: row;
justify-content: space-between;
    label{
    display: flex;
    flex-direction: column;
    cursor: pointer;

        img{
          width: 60px;   
            filter: opacity(0.4);
        }

        span{
            font-weight: bold; 
            filter: opacity(0.4);
            text-align: center;
            align-self: center;
        }
        img:hover & span:hover{
            filter: opacity(1);
        }

    }
`;

export const Image = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-content: center;
`;


export const Contract = styled.div`
    display: flex;
    height: 75px;
    justify-content:center;
    align-items: center;
    div{
        display: flex;
        justify-content: center;
        align-items:center;
        border-radius: 15px;
        padding: 15px;
        background: #f2f2f2;
        display: flex;
        width: 80%;
    }
    u{
        cursor: pointer;
    }

`;
export const Terms = styled.input`
    margin-right: 15px;
    width: 30px;
`;
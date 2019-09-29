import styled from 'styled-components';
import Capa from '../../assets/images/capa.svg';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 3fr 10fr 1fr auto;
    grid-template-rows: 3vh 370px auto;
    min-height: 100vh;
    background-color: #141A1F;
`;
export const Content = styled.div`
    overflow-y: hidden;
    border-radius: 10px 10px 0px 0px;
    grid-row: 2/3;
    grid-column: 2/3;
    background-image: 
    linear-gradient(to top,
     #182026 25%,
     transparent 100% ),
     url(${Capa});
    background-repeat: no-repeat;
    background-size: 100%;
    padding: 40px 40px 0 40px;
`;

export const ProfileInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #182026;
    grid-row: 3/4;
    grid-column: 2/3;
    padding: 0px 40px 40px 40px;
`;  

export const Info = styled.div`
        display: flex;
        justify-content: center;
        height: 50%;
        div{
            justify-content: center;
            align-content: flex-end;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        h1{
            color: #FFF;
            font-size: 60px;
        }
        p{
            color: #8B8F92;
            font-size: 22px;
        }
`;

export const More = styled.div`
    
    margin: 0 15px;
    width: 100%;
    grid-column: 2/3;
    grid-row: 1/2;
    div{
        flex-direction: column;
        display: flex;
        span{
            margin-bottom: 25px;
            color: #8B8F92;
            font-size: 22px;
        }
        p{
            color: #FFF;
            font-weight: bold;
            margin-top: 30px;
            margin-bottom: 15px;
        }
        button{
            border-radius: 10px;
            height: 40px;
            cursor: pointer;
        }
        button.follow{
            color: #FFF;
            font-weight: bold;
            font-size: 16px;
            background: linear-gradient(158.76deg, #8D4153 22.09%, #B56F2C 91.5%);
        }
        button.viewMore{
            color: #FFF;
            font-weight: bold;
            font-size: 16px;
            background: #2F363B ;
        }
    }
   
`;

export const Publi = styled.div`
    margin: 0 15px;
    width: 100%;
    grid-column: 2/3;
    div{
        display: flex;
        flex-direction: column;
    }
    div.post{
        display: flex;
        justify-content:center;
        align-content:center;
        background: #575C60;
        min-height: 150px;
        border-radius: 15px 15px 0px 0;
        p{
            text-align: center;
            color:#FFF;
            font-size: 20px;
        }
    }
    div.postInfo{
        background: #2F363B;
        min-height: 45px;
        padding: 15px;
        border-radius: 0 0 15px 15px;
        p{
            color:#FFF;
            font-weight:bold;
        }
    }
    span{
            margin-bottom: 25px;
            color: #8B8F92;
            font-size: 22px;
        }
    button{
        margin-top: 15px;
        border-radius: 10px;
        height: 40px;
        cursor: pointer;
    }
    button.viewMore{
        color: #FFF;
        font-weight: bold;
        font-size: 16px;
        background: #2F363B ;
    }

`;
import styled from 'styled-components';
import Musica from '../../assets/images/capaMusica.svg';

export const Info = styled.div`
    padding: 7px 10px;
    h3{
        color: #FFF;
    }
    p{
        color: #ACAFB1;
        font-weight: bold;
        line-height: 30px;
    }
`;
export const Album = styled.div`
    background-size: 100%;
    background-image: url(${Musica});
    background-repeat: no-repeat;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-content: center;
    img{
        width: 40%;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    background-color: #2F363C;
    border-radius: 10px;
    min-width: 150px;
    max-width: 150px;
    min-height: 200px;
    max-height: 200px;
    overflow: hidden;
    
`;


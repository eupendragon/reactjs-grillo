import styled from 'styled-components';
import Evento from '../../assets/images/flyerEvent.svg';

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
`;

export const Container = styled.div`
    margin: 5px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url(${Evento});
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


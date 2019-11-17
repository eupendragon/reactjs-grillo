import styled from 'styled-components';
import Profile from '../../assets/images/rihhanaProfile.svg';

export const Item = styled.div`
        display: grid;
        grid-template-rows: 5vh 5vh;
        grid-template-columns: 1fr 6fr;
        margin: 5vh auto;
        grid-column-gap: 15px;
`;

export const Image = styled.div`
        overflow: hidden;
        grid-row: 1/3;
        grid-column:1/2;
        width: 70px;
        height: 70px;
        border-radius: 100px;
        position: relative;
        img{
            width:100%;
            height: 100%;
            border-radius: 100%;
            display: block;
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
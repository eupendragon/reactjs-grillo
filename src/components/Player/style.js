import styled from 'styled-components';
import PlayerBanner from '../../assets/images/playerban.jpg'

export const Container = styled.div.attrs(props => ({
}))`
    
`;

export const MusicPlayer = styled.div.attrs(props => ({
}))`
    margin: 2vh;
    display: grid;
    grid-template-columns: 1fr 6fr 8fr;
    grid-template-rows: 1vh 13vh 2vh;
    button{
        background: transparent;
    }
    div.ContImage{
        grid-row: 1/3;
        grid-column: 2/3;
        background:no-repeat url(${PlayerBanner});
        background-size: cover;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        box-shadow: -1px 6px 8px rgba(0,0,0,0.4);
    }
    div.ContPlayer{
        grid-row: 2/4;
        grid-column: 1/4;
        background-color: #30353A;
        border-radius: 15px;
    }
    div.ContController{
        grid-row: 2/3;
        grid-column: 3/4;
        border-radius: 15px;
        padding: 25px 0 0 ;
        display: flex; 
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        div.MusicName{
            h3{
                color: white;
            }
        }
    }
    div.Controllers{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 80%;
    }
`;


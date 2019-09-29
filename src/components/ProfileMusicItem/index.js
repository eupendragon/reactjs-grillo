import React from 'react';
import { Container, Info, Album} from './style';

import Play from '../../assets/images/icon_album.svg';

const MusicItem = () => (
    <Container>
            <Album>
                <img src={Play}/>
                {/* IMAGEM */}
            </Album>
            <Info>
                <h3>Ocean</h3>
                <p>ABR 2018</p>
            </Info>
    </Container>
);

export default MusicItem;

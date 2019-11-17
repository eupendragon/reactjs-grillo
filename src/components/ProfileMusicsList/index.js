import React from 'react';
import { Container, Content} from './style';
import MusicItem from '../ProfileMusicItem';

const MusicList = () => (
    <Container>
        <span>MÚSICAS</span>
        <Content>
            <MusicItem/>
            <MusicItem/>
            <MusicItem/>
        </Content>
        <button>VER MAIS</button>
    </Container>
);

export default MusicList;

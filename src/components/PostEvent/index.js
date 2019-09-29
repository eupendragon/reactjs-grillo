import React from 'react';
import { Container, Head, Body, Post } from './style';
import Profile from '../../assets/images/weekProfile.svg';
import Flyer from '../../assets/images/flyerPost.svg';
import Menu from '../../assets/images/icon_options.svg';


const PostEvent = () => (
    <Container>
        <Head>
            <section>
                <img src={Profile} />
                <div>
                    <span>KONAI</span>
                    <span>SÃO PAULO - SP</span>
                </div>
            </section>
        </Head>
        <Body>
            <h3>Babylon - The Week</h3>
            <p>
                É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares...
            </p>
            <div>
                <button>COMPARECER</button>
            </div>
        </Body>
        <Post>
            <img src={Flyer} />
        </Post>
    </Container>
);

export default PostEvent;
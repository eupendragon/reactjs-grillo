<<<<<<< HEAD
// Dependecies
import React, { Component } from 'react';
// Styles
import {
    Container,
    Content,
    Scroll,
    Posts,
    NewPostContainer,
    Icons,
    PostForm,
    PostContainer,
    Body,
    Head,
    Post,
    PostManager
} from './style';

// Components
import Menu from '../../components/Menu';
import MainHeader from '../../components/MainHeader';

// images
import Cam from '../../assets/images/icon_photo.svg';
import YourProfile from '../../assets/images/arayaProfile.svg';
import IconEvent from '../../assets/images/postIconEvento.svg';
import IconVaga from '../../assets/images/postIconVaga.svg';

// Post
import Profile from '../../assets/images/weekProfile.svg';
import Flyer from '../../assets/images/flyerPost.svg';

// dependecies
import api from '../../services/api'
import io from 'socket.io-client';

class Main extends Component {
    state = {
        feed: [],
    }

    async componentDidMount() {
        this.registerToSocket();

        const response = await api.get('posts');

        this.setState({ feed: response.data })

    }

    registerToSocket() {
        const socket = io('http://localhost:3333');

        socket.on('post', newPost => {
            this.setState({ feed: [newPost, ...this.state.feed] });
        })
    }

    render() {
        return (
            <Container>
                <Menu />
                <Content>
                    <MainHeader subTitle="NO GRILLO" />
                    <Scroll>
                        <NewPost />
                        {this.state.feed.map(postMap => (
                            <Posts key={postMap.id}>
                                <PostContainer>
                                    <Head>
                                        <section>
                                            <img src={Profile} />
                                            <div>
                                                <span>{postMap.author}</span>
                                                <span>{postMap.place}</span>
                                            </div>
                                        </section>
                                    </Head>
                                    <Body>
                                        <h3>{postMap.postTitle}</h3>
                                        <p>{postMap.description}</p>
                                        <div><button>COMPARECER</button></div>
                                    </Body>
                                    <Post>
                                        <div>
                                            <img src={`http://localhost:3333/files/${postMap.image}`} />
                                        </div>
                                    </Post>
                                </PostContainer>
                            </Posts>
                        ))}
                    </Scroll>
                </Content>
            </Container>
        );
    }
}

export default Main;

class NewPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postTitle: '',
            description: '',
            place: 'São Paulo - Brasil',
            author: 'João Araya',
            image: null,
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const postData = new FormData

        postData.append('postTitle', this.state.postTitle);
        postData.append('image', this.state.image);
        postData.append('author', this.state.author);
        postData.append('place', this.state.place);
        postData.append('description', this.state.description);

        // Mandando  Post para rota 'posts'
        await api.post('posts', postData);

        // Resetando estado atual
        this.setState({ postTitle: '', description: '', image: null })

        // Resetando background img
        let imageSpace = document.getElementById('postimage');
        imageSpace.style.background = "#bebebe";
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleImageChange = e => {
        let imageSpace = document.getElementById('postimage');
        let myImage = URL.createObjectURL(e.target.files[0]);
        imageSpace.style.backgroundImage = "url(" + myImage + ")";

        this.setState({ image: e.target.files[0] });
    }

    selectPostType() {
        const NewStyle = "background: #42B5BC"
        const DefaultStyle = "background: #797979"

        const EventCheck = document.getElementById("checkPostEvento");
        const VagaCheck = document.getElementById("CheckPostVaga");

        const EventOp = document.getElementById("optionEvento");
        const VagaOp = document.getElementById("optionVaga");

        if (EventCheck.checked == true) {
            EventOp.style.cssText = NewStyle;
        } else {
            EventOp.style.cssText = DefaultStyle;
        }
        if (VagaCheck.checked == true) {
            VagaOp.style.cssText = NewStyle;
        } else {
            VagaOp.style.cssText = DefaultStyle;
        }
    }


    render() {
        return (
            <PostManager onSubmit={this.handleSubmit}>
                <NewPostContainer>
                    <Icons>
                        <button>
                            <img src={YourProfile} alt="Ir para perfil" />
                        </button>

                        <label onClick={this.selectPostType} id="optionEvento" for="checkPostEvento">
                            <input type="radio" id="checkPostEvento" name="option" />
                            <img src={IconEvent} alt="Postar Evento" />
                        </label>
                        <span>EVENTO</span>

                        <label onClick={this.selectPostType} id="optionVaga" htmlFor="CheckPostVaga">
                            <input type="radio" id="CheckPostVaga" name="option" />
                            <img src={IconVaga} alt="Postar Vaga" />
                        </label>
                        <span>VAGA</span>
                    </Icons>

                    <PostForm>
                        <div id="postimage">
                            <input
                                onChange={this.handleImageChange}
                                id="perfil"
                                type="file"
                            />
                            <label for="perfil">
                                <img className="imgIcon" src={Cam} />
                            </label>
                            <div>teste</div>
                        </div>
                        <div>
                            <input
                                placeholder="TITULO DA POSTAGEM"
                                type="text"
                                onChange={this.handleInputChange}
                                value={this.state.postTitle}
                                name="postTitle"
                            />
                            <textarea
                                placeholder="Descrição"
                                type="text"
                                onChange={this.handleInputChange}
                                value={this.state.description}
                                name="description"
                                maxlength="620"
                            />
                            <hr />
                            <section>
                                <input
                                    placeholder="Local"
                                    type="text"
                                />
                                <input type="date" />
                            </section>
                        </div>
                    </PostForm>

                </NewPostContainer>
                <button className="postar">POSTAR</button>
            </PostManager>
        );
    }
=======
// Dependecies
import React, { Component } from 'react';
// Styles
import {
    Container,
    Content,
    Scroll,
    Posts,
    NewPostContainer,
    Icons,
    PostForm,
    PostContainer,
    Body,
    Head,
    Post,
    PostManager
} from './style';

// Components
import Menu from '../../components/Menu';
import MainHeader from '../../components/MainHeader';

// images
import Cam from '../../assets/images/icon_photo.svg';
import YourProfile from '../../assets/images/arayaProfile.svg';
import IconEvent from '../../assets/images/postIconEvento.svg';
import IconVaga from '../../assets/images/postIconVaga.svg';

// Post
import Profile from '../../assets/images/weekProfile.svg';
import Flyer from '../../assets/images/flyerPost.svg';

// dependecies
import api from '../../services/api'
import io from 'socket.io-client';

class Main extends Component {
    state = {
        feed: [],
    }

    async componentDidMount() {
        this.registerToSocket();

        const response = await api.get('posts');

        this.setState({ feed: response.data })

    }

    registerToSocket() {
        const socket = io('http://localhost:3333');

        socket.on('post', newPost => {
            this.setState({ feed: [newPost, ...this.state.feed] });
        })
    }

    render() {
        return (
            <Container>
                <Menu />
                <Content>
                    <MainHeader subTitle="NO GRILLO" />
                    <Scroll>
                        <NewPost />
                        {this.state.feed.map(postMap => (
                            <Posts key={postMap.id}>
                                <PostContainer>
                                    <Head>
                                        <section>
                                            <img src={Profile} />
                                            <div>
                                                <span>{postMap.author}</span>
                                                <span>{postMap.place}</span>
                                            </div>
                                        </section>
                                    </Head>
                                    <Body>
                                        <h3>{postMap.postTitle}</h3>
                                        <p>{postMap.description}</p>
                                        <div><button>COMPARECER</button></div>
                                    </Body>
                                    <Post>
                                        <div>
                                            <img src={`http://localhost:3333/files/${postMap.image}`} />
                                        </div>
                                    </Post>
                                </PostContainer>
                            </Posts>
                        ))}
                    </Scroll>
                </Content>
            </Container>
        );
    }
}

export default Main;

class NewPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postTitle: '',
            description: '',
            place: 'São Paulo - Brasil',
            author: 'João Araya',
            image: null,
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const postData = new FormData

        postData.append('postTitle', this.state.postTitle);
        postData.append('image', this.state.image);
        postData.append('author', this.state.author);
        postData.append('place', this.state.place);
        postData.append('description', this.state.description);

        // Mandando  Post para rota 'posts'
        await api.post('posts', postData);

        // Resetando estado atual
        this.setState({ postTitle: '', description: '', image: null })

        // Resetando background img
        let imageSpace = document.getElementById('postimage');
        imageSpace.style.background = "#bebebe";
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleImageChange = e => {
        let imageSpace = document.getElementById('postimage');
        let myImage = URL.createObjectURL(e.target.files[0]);
        imageSpace.style.backgroundImage = "url(" + myImage + ")";

        this.setState({ image: e.target.files[0] });
    }

    selectPostType() {
        const NewStyle = "background: #42B5BC"
        const DefaultStyle = "background: #797979"

        const EventCheck = document.getElementById("checkPostEvento");
        const VagaCheck = document.getElementById("CheckPostVaga");

        const EventOp = document.getElementById("optionEvento");
        const VagaOp = document.getElementById("optionVaga");

        if (EventCheck.checked == true) {
            EventOp.style.cssText = NewStyle;
        } else {
            EventOp.style.cssText = DefaultStyle;
        }
        if (VagaCheck.checked == true) {
            VagaOp.style.cssText = NewStyle;
        } else {
            VagaOp.style.cssText = DefaultStyle;
        }
    }


    render() {
        return (
            <PostManager onSubmit={this.handleSubmit}>
                <NewPostContainer>
                    <Icons>
                        <button>
                            <img src={YourProfile} alt="Ir para perfil" />
                        </button>

                        <label onClick={this.selectPostType} id="optionEvento" for="checkPostEvento">
                            <input type="radio" id="checkPostEvento" name="option" />
                            <img src={IconEvent} alt="Postar Evento" />
                        </label>
                        <span>EVENTO</span>

                        <label onClick={this.selectPostType} id="optionVaga" htmlFor="CheckPostVaga">
                            <input type="radio" id="CheckPostVaga" name="option" />
                            <img src={IconVaga} alt="Postar Vaga" />
                        </label>
                        <span>VAGA</span>
                    </Icons>

                    <PostForm>
                        <div id="postimage">
                            <input
                                onChange={this.handleImageChange}
                                id="perfil"
                                type="file"
                            />
                            <label for="perfil">
                                <img className="imgIcon" src={Cam} />
                            </label>
                            <div>teste</div>
                        </div>
                        <div>
                            <input
                                placeholder="TITULO DA POSTAGEM"
                                type="text"
                                onChange={this.handleInputChange}
                                value={this.state.postTitle}
                                name="postTitle"
                            />
                            <textarea
                                placeholder="Descrição"
                                type="text"
                                onChange={this.handleInputChange}
                                value={this.state.description}
                                name="description"
                                maxlength="620"
                            />
                            <hr />
                            <section>
                                <input
                                    placeholder="Local"
                                    type="text"
                                />
                                <input type="date" />
                            </section>
                        </div>
                    </PostForm>

                </NewPostContainer>
                <button className="postar">POSTAR</button>
            </PostManager>
        );
    }
>>>>>>> 5cb28b84c238f448613f82ab6b33b2332d8e3ea8
}
import React, {Component} from 'react';
import Search from '../Search';
import { Container, Place, YourPosition } from './style';


class MainHeader extends Component {
    render() {
        return (
            <Container>
                <Place>
                    <h1>Grillo</h1>
                    <YourPosition className="header">
                        <h4>{this.props.subTitle}</h4>
                    </YourPosition>
                </Place>
                <Search />
            </ Container>

        );
    }
}


export default MainHeader;
import React, {Component} from 'react';
import ContactItem from '../ContactListItem'
import {ListContent} from './style.js';

class ContactList extends Component{
    render(){
        return(
            <ListContent>
                <ContactItem />
           </ListContent>
        );
    }
}

export default ContactList;
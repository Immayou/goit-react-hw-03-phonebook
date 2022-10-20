import React, { Component } from "react";
import PropTypes from 'prop-types'; 
import { ListOfContacts, ContactItem, NameInfo, NumberInfo, DeleteButton } from './ContactList.styled'


class ContactList extends Component {

    static propTypes = {
        contacts: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                name: PropTypes.string,
                number: PropTypes.string,
              }).isRequired,
        ).isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    render () {
        return (
            <ListOfContacts>
                {this.props.contacts.map(({id, name, number}) => (
                   <ContactItem key={id}>
                    <div>
                    <NameInfo>{name}: </NameInfo>
                    <NumberInfo>{number}</NumberInfo>
                    </div>
                    <DeleteButton type='button' onClick={() => (this.props.onDeleteContact(id))}>Delete</DeleteButton>
                   </ContactItem>
                ))}
            </ListOfContacts>
        );
};}

export default ContactList;

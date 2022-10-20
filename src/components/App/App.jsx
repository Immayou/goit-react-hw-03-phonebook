import React, { Component } from "react";

import ContactForm from '../ContactForm/ContactForm'

import ContactList from '../ContactList/ContactList'

import Filter from '../Filter/Filter'

import { Wrapper, Title, ContactsTitle } from './App.styled'

class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}],
    filter: ''
  }

  formSubmitHandler = data => {
    const checkIfNewContactAlreadyExists = this.state.contacts.find(({name}) => (name.toLowerCase() === data.name.toLowerCase()))
    checkIfNewContactAlreadyExists ?
    alert(`${data.name} is already in contacts`)
    : this.setState((prevState) => ({contacts: [data, ...prevState.contacts]}))
  }

  filterHandler = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  getFiltredContacts = () => {
    const { filter, contacts } = this.state
    const normalizeFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(({name}) => name.toLowerCase().includes(normalizeFilter))
    return visibleContacts
  }

  deleteContact = (idToDelete) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(({id}) => id !== idToDelete)
    }))
  }

  render () {
    const { filter, contacts} = this.state
    const contactsToRender = this.getFiltredContacts();
    const isEmptyContacts = contacts.length !== 0;

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm submitData={this.formSubmitHandler}/>
      {isEmptyContacts && <ContactsTitle>Contacts</ContactsTitle>}
      {isEmptyContacts && <Filter value={filter} filterInput={this.filterHandler}/>}
      {isEmptyContacts && <ContactList contacts={contactsToRender} onDeleteContact={this.deleteContact}/>}
    </Wrapper>
  );
    };
};

export default App;
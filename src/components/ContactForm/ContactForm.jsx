import React, { Component } from "react";
import PropTypes from 'prop-types'; 
import shortid from "shortid";
import { PhoneForm, NameLabel, InputNameField, NumberLabel, InputNumberField, FormButton } from './ContactForm.styled'

class ContactForm extends Component {
    static propTypes = {
      submitData: PropTypes.func.isRequired,
    }

    state = {
        name: '',
        number: ''
    }

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    handleInput = e => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})}

    handleSubmit = e => {
        e.preventDefault();
        const contactToAdd = {
          name: this.state.name, 
          number: this.state.number,
          id: shortid.generate()
        }
        this.props.submitData(contactToAdd)
        this.reset()
      }
    
    reset = () => {
        this.setState({name: '', number: ''})
    }

    render () {
        return (
            <PhoneForm onSubmit={this.handleSubmit} >
              <NameLabel htmlFor={this.nameInputId}>Name</NameLabel>
              <InputNameField
            id={this.nameInputId}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleInput}
            required
          />
              <NumberLabel htmlFor={this.numberInputId}>Number</NumberLabel>
              <InputNumberField
            id={this.numberInputId}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleInput}
            required
          />
              <FormButton type='submit'>Add contact</FormButton>
            </PhoneForm>
        );
};}

export default ContactForm;


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Addressbook from './components/addressbook'

let URL = 'http://localhost:3000/contacts'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      contacts: []
    }

    this.filterText = "";
  }

  componentDidMount() {
    fetch(URL).then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        contacts: json.contacts
      })
    })
  }

  onFilterTextChange = (evt) => {
    this.filterText = evt.target.value;
    this.forceUpdate();
  }

  render() {

    let contactsToShow = [];

        if ( this.filterText.length > 0 ) {
          contactsToShow = this.state.contacts.filter((contact) => {
            if ( contact.name.toUpperCase().includes(this.filterText.toUpperCase()) ) {
              return true
            } else {
              return false}
          }
        )

        } else {
          contactsToShow = this.state.contacts;
        }

        const contacts = contactsToShow.map((contact) => (
          <Addressbook id={contact.id} name={contact.name} email={contact.emailAddress} />
        ))

    if (this.state.contacts.length > 0) {

    return (

      <div className="contact-list">
              <div className="filter-bar">
                <span>Filter Results: </span>
                <input type="text" id="contact-filter" placeholder="Search..." onChange={this.onFilterTextChange} />
              </div>

              <section id="contact-items">
                {contacts}
              </section>
            </div>
          )
        } else {

        return (
          <div>
          </div>
          )
        }
      }
    }

export default App;

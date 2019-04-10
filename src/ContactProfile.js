import React, { Component } from 'react'
import {  Route, Link } from 'react-router-dom'
import Contact from './Contacts'
import data from './contacts.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ContactProfile extends Component {
  getContact = (id) => {
    const contact = data.find(contact => {
      return contact.id === Number(id)
    })

    this.setState({
      wholeName: contact.name.first + " " + contact.name.last,
      email: contact.email,
      phoneNum: contact.phone,
      cityState: contact.location.city + ", " + contact.nat,
      image: contact.picture.large
    })
  }

  state = {
    wholeName: '',
    email: '',
    phoneNum: '',
    cityState: '',
    image: ''
  }

  componentDidMount() {
    this.getContact(this.props.match.params.id)
  }

  componentWillReceiveProps(newprops) {
    if(newprops.match.params.id !== this.props.match.params.id) {
      this.getContact(newprops.match.params.id)
    }
  }
  render(){
    return (
      <div id="contact-info">
        <div className="back-profile-img">
          <Link to="/"><button><FontAwesomeIcon
            icon="arrow-left"
            size="3x"
          /></button></Link>
          <img src={this.state.image}/>
        </div>
        <p className="name"><FontAwesomeIcon
            icon="user"
            size="1x"
          /><span>{this.state.wholeName}</span></p>
        <p className="email"><FontAwesomeIcon
            icon="envelope"
            size="1x"
          /><span>{this.state.email}</span></p>
        <p className="phoneNum"><FontAwesomeIcon
            icon="mobile-alt"
            size="1x"
          /><span>{this.state.phoneNum}</span></p>
        <p className="name cityState"><FontAwesomeIcon
            icon="globe-americas"
            size="1x"
          /><span>{this.state.cityState}</span></p>
        <Route exact path="/" component={Contact}/>
      </div>
    )
  }
}

export default ContactProfile
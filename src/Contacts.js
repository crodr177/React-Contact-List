import React, { Component} from 'react'
import data from './contacts.json'
import { Link } from 'react-router-dom'

class Contacts extends Component {
  render(){
    return (
      <div id="contacts-container">
        <h1>Contacts</h1>
        <ul>
          {
            data.map(person => (
              <li className="contact" key={"person-" + person.name.last}><Link className="name" to={"/contactprofile/" + person.id}><img className="thumbnail-img" src={person.picture.thumbnail} alt="thumbnail"/>{person.name.first} {person.name.last}</Link></li>
            ))
          }
        </ul>
      </div>
    )
  }
}
export default Contacts
import React, { Component } from 'react';
import Person from './Person/Person';
import AuthContext from '../../context/auth-context'
class Persons extends Component{

  render() {
    return this.props.persons.map((person,index) => {
            return <Person
                      name={person.name} 
                      age={person.age} 
                      key={person.id}
                      isAuth = {this.props.isAuthenticated}
                      changed = {(event) => this.props.changed(event, person.id)}
                      click = {() => this.props.clicked(index)}/>;
                
            })
       
  }   
};


export default Persons;
import React, {Component } from 'react';
import classes from './App.module.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../Components/hoc/withClass';
import Aux from '../Components/hoc/Aux';
import AuthContext from '../context/auth-context'

class App extends Component {

    constructor(props) {
        super(props);
        console.log('Constructor called!');
    }
    

    state =  {
        persons: [
          { id: 1,name: 'Kishan', age: 25}, 
          { id: 2,name: 'Rahul', age: 26 }
        ],
        showPersons: false,
        changeCounter:0,
        authenticated: false
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps methood called!');
        return state;
    }

    componentDidMount() {
      console.log('componentDidMount called!');
    }

    switchNames = (newName) => {
        this.setState(
          {
            persons: [
              { id: 1,name: newName, age: 20}, 
              { id: 2,name: 'Rahul Shaw', age: 21 }
            ]
          }
        )
    }

    nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(
        person => {
          return person.id === id;
        }
      );

      const persons = [...this.state.persons];

      const person = {...this.state.persons[personIndex]};
      person.name = event.target.value;
      

      persons[personIndex] = {...person};

      this.setState((prevState, props)=> {
          return {
            persons: persons,
            changeCounter: prevState.changeCounter + 1
          }
      });
    }

    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({
        showPersons: !doesShow
      });
    }

    deletePersonHandler = (index) => {
        const copyOfPersons = [...this.state.persons]
        copyOfPersons.splice(index, 1);
        this.setState({
          persons: copyOfPersons
        });

    }

    loginHandler = () => {
      this.setState({
        authenticated: true
      }); 
    }


    render () {
      console.log('Render method called!');
      let persons = null;
      if(this.state.showPersons) {
        persons = (
          <div>
            <Persons persons = {this.state.persons} 
            isAuthenticated = {this.state.authenticated}
            changed = {this.nameChangedHandler}
            clicked = {this.deletePersonHandler}/>
          </div>
        );  
      }

      
      return (
        <Aux>
          <AuthContext.Provider value={{
            authenticated: this.state.authenticated, 
            login: this.loginHandler
          }}>
            <Cockpit 
            appTitle = {this.props.title}
            showPersons = {this.state.showPersons}
            persons = {this.state.persons} 
            clicked = {this.togglePersonsHandler}/>
            {persons}
          </AuthContext.Provider>
        </Aux>
    );
    }
}

export default withClass(App,classes.App);

import React, { Component } from 'react';
import classes from './Person.module.css';
import Aux from '../../hoc/Aux';
import withClass from '../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context'
class Person extends Component{

  constructor(props) {
  super(props);
    this.inputElement = React.createRef();
  }

  componentDidMount() {
      this.inputElement.current.focus();
  } 
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate from Person Component called!');
  //   if(nextProps.persons !== this.props.persons) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  render() {
    console.log('Person component called!');
    return (
            <Aux>
              <AuthContext.Consumer>
                {
                  context=> context.authenticated ? <p>Authenticated Sucessfull!</p> : <p>Please login</p>
                }
              </AuthContext.Consumer>
              {this.props.isAuth ? 'Authentication Successful!':'Please try to login!'}
              <div>
                <div className= {classes.Person}> 
                  <p onClick = {this.props.click}>My name is {this.props.name}. I am a good person and my age is: {this.props.age}</p>
                  <p>{this.props.children}</p>
                  <input type = "text" 
                  ref={this.inputElement}
                  onChange = {this.props.changed} 
                  value = {this.props.name}/>
                </div>
              </div> 
              </Aux>
     
    );
  }
  
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
import React, {useEffect, useRef} from 'react';
import classes from './Cockpit.module.css'
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
  const toggleButtonRef = useRef(null);
  
  
  useEffect(() => {
    console.log('Cockpit useEffect called!');
    // setTimeout(() => {
    //   alert('data saved to cloud!')
    // },1000);
    toggleButtonRef.current.click();
  }, []);


  const assignedClasses = [];

  let btnClasses = '';

  if(props.showPersons) {
      btnClasses = classes.Red;
  }

  if(props.persons.length <=2) {
    assignedClasses.push(classes.red);
  }
  if(props.length <=1) {
    assignedClasses.push(classes.bold);
  }

  return(
        <div className = {classes.Cockpit}>
          <p>{props.appTitle}</p>
          <p className = {assignedClasses.join(' ')}>Showing the person details:</p>
          <button ref = {toggleButtonRef} className = {btnClasses} alt = {props.showPersons.toString()} onClick = {props.clicked}>
            Toggle Person Details
          </button>
          <AuthContext.Consumer>
            {
              (context) => 
              <div>
              <button onClick = {context.login}>Login</button>
              </div>
            }
          
          </AuthContext.Consumer>
        </div>
  );
}


export default Cockpit;
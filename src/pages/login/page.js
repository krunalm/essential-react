import React from 'react';
import { browserHistory } from 'react-router';
import styles from './style.css';


export default class LoginPage extends React.Component {
  signUp() {
    browserHistory.push('/home');
  }

  contactUs(){
    browserHistory.push('/contact');
  }

  toDo(){
    browserHistory.push('/todo');
  }
  
  render() {
    return (
      <div className={styles.content}>
        <h1 className={styles.heading}>Login Page 23</h1>
        <p className={styles.lead}>Create an account to get started!</p>
        <button className={styles.signUpButton} onClick={this.signUp}>Sign up</button>
<br /><br />
<button className={styles.signUpButton} onClick={this.contactUs}>Contact Us</button>
<br /><br />
<button className={styles.signUpButton} onClick={this.toDo}>ToDo Application</button>

      </div>
    );
  }
}

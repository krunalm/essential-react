import React from "react";
import styles from "./style.css";


export default class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <h1>ABCD HOME Page</h1>
        <p className={styles.welcomeText}>Thanks !!  for NOT joining!</p>
      </div>
    );
  }
}

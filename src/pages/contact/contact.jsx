import React from 'react';
import {browserHistory} from 'react-router';
import styles from './style.css';
import SomeCmp from './SomeCmp';
import Child from './child';

export default class ContactPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            city: '',
            notes: '',
            enable: false
        }

        this.nameChnage = this
            .nameChnage
            .bind(this);
        this.cityChnage = this
            .cityChnage
            .bind(this);
        this.submitContact = this
            .submitContact
            .bind(this);
        this.test = this
            .test
            .bind(this);
        this.notesChange = this
            .notesChange
            .bind(this);
        this.updateNotes = this
            .updateNotes
            .bind(this);
        this.updateEnable = this
            .updateEnable
            .bind(this);
    }

    submitContact(e) {
        e.preventDefault();
        alert(this.state.name);
        alert(this.state.city);

        this.setState({city: this.state.name});
    }

    goHome() {
        browserHistory.push('/home');
    }

    nameChnage(event) {
        var val = event.target.value;
        this.setState({name: val});
    }

    cityChnage(event) {
        var val = event.target.value;
        this.setState({city: val});
    }

    notesChange(event) {
        var val = event.target.value;
        this.setState({notes: val});
    }

    test() {
        this.setState({city: this.state.name});
    }

    updateNotes() {
        this.setState({notes: this.state.name});
    }

    updateEnable(event) {
        var val = event.target.checked;
        console.log(val);
        this.setState({enable: val});
    }

    viewChange(viewName) {
        alert(viewName);
    }

    testMethod() {
        var myObj = {
            todo: [
                'anc', 'xyz'
            ],
            flag: false
        };

        // object assign and log
        var newObj = Object.assign({}, myObj, {todo: ['abc']});
        console.log(newObj);
        var newObj2 = Object.assign({}, myObj, {flag: true});
        console.log(newObj2);

        // spread operator and log
        var newObj3 = Object.assign({}, myObj, {
            todo: [
                ...newObj.todo,
                'ddd',
                'asd'
            ]
        });
        //{abc: [...myObj.todo, '44']};
        console.log(newObj3);
    }

    render() {
        return (
            <div>
                <h2>Contact Page !</h2>

                <form onSubmit={this.submitContact}>
                    <h3>Name:
                    </h3>
                    <input type="text" value={this.state.name} onChange={this.nameChnage}/>
                    <h3>City:
                    </h3>
                    <input type="text" value={this.state.city} onChange={this.cityChnage}/><br/><br/>
                    <button className={styles.signUpButton} type="submit">Submit</button>
                </form>
                <br/><br/>
                <button className={styles.signUpButton} onClick={this.goHome}>Home</button>
                <br/><br/><br/><br/>
                <button className={styles.signUpButton} onClick={this.test}>TEST</button>

                <input type="text" value={this.state.notes} onChange={this.notesChange}/>
                <button className={styles.signUpButton} onClick={this.updateNotes}>Update Notes</button>

                <input type="checkbox" onChange={this.updateEnable}/>Something
                <br/> {this.state.enable
                    ? <SomeCmp handleViewChange={this.viewChange}/>
                    : null}
                <br/>
                <Child message="hey child!!"/>
                <button className={styles.signUpButton} onClick={this.testMethod}>test method</button>
            </div>
        );
    }
}
import React from 'react';
import Footer from './components/footer';
import AddToDo from './containers/addToDo';
import VisibleToDoList from './containers/visibleToDoList';
import styles from './styles.css';

const ToDoPage = () => (
    <div className={styles.content}>
        <h3 className={styles.heading}>ToDo App</h3>
        <div>
            <AddToDo/>
            <VisibleToDoList/>
            <Footer/>
        </div>
    </div>
);

export default ToDoPage;
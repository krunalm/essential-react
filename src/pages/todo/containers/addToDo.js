import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../common/actions';

let AddToDo = ({dispatch}) => {
    let todoInput;

    return (
        <div>
            <form onSubmit={e=>{
                    e.preventDefault();
                    if(!todoInput.value.trim()){
                        return;
                    }
                    dispatch(addTodo(todoInput.value));
                    todoInput.value='';
                }}>
                <input ref={node => {
                    todoInput = node;
                }} />
                <button type="submit">Add ToDo</button>
            </form>
        </div>
    );
};
AddToDo = connect()(AddToDo);

export default AddToDo;
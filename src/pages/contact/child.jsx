import React from 'react';

export default class Child extends React.Component{
    render(){
        return(
            <div>Hello {this.props.message}!</div>                
        )
    }
}
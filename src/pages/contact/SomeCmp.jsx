import React from 'react';

export default class SomeCmp extends React.Component {


changeView(){
    this.props.handleViewChange("register");
}

render(){


    return(
        <div>
        <h1>Hello World SomeCMP</h1>
        <button onClick={this.changeView.bind(this)}>change view</button>
        </div>
    )
}

}
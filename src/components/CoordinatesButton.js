// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component{

  handleClick = (event) => {
    // console.log(event.type); // prints 'click'

    const arr = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(arr)

  }

  render(){
    return (
      <button onClick={this.handleClick}></button>
    )
  }
}

export default CoordinatesButton;

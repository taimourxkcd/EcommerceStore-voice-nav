// app/javascript/components/MyButton.js
import React from 'react';

function handleClick(){
    console.log("button is clicked")
}

const MyButton = ({ onClick }) => {
    return <button onClick={this.handleClick}>Click Me!</button>;
};

export default MyButton;

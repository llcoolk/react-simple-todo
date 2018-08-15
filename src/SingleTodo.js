import React, { Component } from "react";

// class SingleTodo extends Component {
//   state = {};

//   render() {
//     return (
//       <li>
//         {this.props.todo}
//         <button onClick={this.props.delete}>X</button>
//       </li>
//     );
//   }
// }

const SingleTodo = props => {
  return (
    <li>
      {props.todo}
      <button onClick={props.delete}>X</button>
    </li>
  );
};
export default SingleTodo;

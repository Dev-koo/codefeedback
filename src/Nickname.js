import React, { Component } from "react";

// class Nickname extends Component {
//   render() {
//     return <div>안녕하세요 제 이름은: {this.props.name}</div>;
//   }
// }

function Nickname({ name }) {
    return <>안녕하세요 제 이름은 : {name} 입니다.</>;
}

Nickname.defaultProps = { name: "김아무개" };

export default Nickname;

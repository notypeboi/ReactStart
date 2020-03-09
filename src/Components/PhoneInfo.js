import React, { Component } from "react";

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: "이름",
      phone: "010-0000-0000",
      id: 0
    }
  };
  render() {
    const { name, phone, id } = this.props.info;

    return (
      <div>
        <div> {name} </div>
        <div> {phone}</div>
        <div> {id}</div>
      </div>
    );
  }
}

export default PhoneInfo;

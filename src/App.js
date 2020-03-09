import React, { Component } from "react";
import "./App.css";
import MyName from "./Components/MyName";
import Counter from "./Components/Counter";
import PhoneForm from "./Components/PhoneForm";
import PhoneInfoList from "./Components/PhoneInfoList";
class App extends Component {
  id = 2;
  //id를 숫자로 정해주는게 아니라 이 state속 information의 length로 지정할순 없을까
  state = {
    information: [
      {
        id: 0,
        name: "김민준",
        phone: "010-0000-0000"
      },
      {
        id: 1,
        name: "홍길동",
        phone: "010-0000-0001"
      }
    ]
  };

  handleCreate = data => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    });
    console.log(data);
  };

  render() {
    return (
      <div>
        <div>안녕하세요!</div>
        <MyName />
        <MyName name="리액트" />
        <Counter />
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfoList data={this.state.information} />
      </div>
    );
  }
}
export default App;

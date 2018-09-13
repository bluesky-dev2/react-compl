import React, { Component } from 'react';
import { ContextMenu, Item, Separator, Submenu, contextMenu } from "../../src/index";
import "../../dist/ReactContexify.css";

const onClick = ({ event, ref, data, dataFromProvider }) => console.log('Hello');
const menuId = 1;
// create your menu first
const MyAwesomeMenu = () => (
    <ContextMenu id={menuId}>
       <Item onClick={onClick}>Lorem</Item>
       <Item onClick={onClick}>Ipsum</Item>
       <Separator />
       <Item disabled>Dolor</Item>
       <Separator />
       <Submenu label="Foobar">
        <Item onClick={onClick}>Foo</Item>
        <Item onClick={onClick}>Bar</Item>
       </Submenu>
    </ContextMenu>
);


class App extends Component {
  handleClick = e => {
    console.log('click')
    contextMenu.show({
      id: menuId,
      event: e.nativeEvent
    })
  }

  render() {
    return (
      <main>
        <div style={{ border: '1px solid red', width: '200px', height: '200px' }} onClick={this.handleClick}>
          yolo
        </div>
        <MyAwesomeMenu />
      </main>
    );
  }
}

export default App;

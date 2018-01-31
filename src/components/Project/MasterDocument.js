import React, { Component } from "react";
import update from "immutability-helper";
import { DragDropContext } from "react-dnd";
import HTML5Backend, { NativeTypes } from "react-dnd-html5-backend";
import Dustbin from "./Dustbin";
import Box from "./Box";
import ItemTypes from "./ItemTypes";
import {
  Dropdown,
  Menu,
  Segment,
  Header,
  Grid,
  Divider,
  Button,
  Image,
  Card,
  Container,
  Popup
} from "semantic-ui-react";

class MasterDocument extends Component {
  constructor(props) {
    super(props);
  }

  isDropped(boxName) {
    return this.props.droppedBoxNames.indexOf(boxName) > -1;
  }

  render() {
    console.log("this props => ", this.props);
    // const { boxes, dustbins } = this.state;
    const { analyses, boxes, dustbins, handleDrop, handleSubmit } = this.props;

    return (
      <div>
        <h1>Welcome to your project</h1>
        <h2>Drag and drop analyses onto your document</h2>
        <div className="ui fluid Document">
          <div className="ui grid">
            <div className="three column row">
              <div className="column"> Inclusion</div>
            </div>
            <div className="four wide column">
              <div>
                {boxes.map(({ name, type }, index) => (
                  <Box
                    name={name}
                    type={type}
                    isDropped={this.isDropped(name)}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div className="twelve wide column">
              <div>
                {analyses.map((analysis, index) => {
                  return (
                    <div key={index}>
                      <p>{analysis.textContent}</p>
                      <p>{analysis.name}</p>
                    </div>
                  );
                })}
              </div>
              <form onSubmit={handleSubmit}>
                <textarea name="textContent" placeholder="Input text here" />
                <button className="ui primary button" type="submit">
                  +
                </button>
              </form>
              <div>
                {dustbins.map(({ accepts, lastDroppedItem }, index) => (
                  <Dustbin
                    accepts={accepts}
                    lastDroppedItem={lastDroppedItem}
                    onDrop={item => handleDrop(index, item)}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MasterDocument = DragDropContext(HTML5Backend)(MasterDocument);

export default MasterDocument;

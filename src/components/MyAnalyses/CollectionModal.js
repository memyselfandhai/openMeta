import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Header,
  Image,
  Modal,
  Form,
  Input,
  TextArea
} from "semantic-ui-react";
var serialize = require("form-serialize");

class CollectionModal extends Component {
  constructor(props) {
    super();
    this.sendForm = this.sendForm.bind(this);
  }

  sendForm(e) {
    e.preventDefault();
    var form = document.querySelector("#new-collection");
    var obj = serialize(form, { hash: true });

    axios.post(`${root}/api/collections`, obj).then(response => {
      console.log("response in modal=> ", response);
      this.props.history.push(`/davesPage?id=${response.data}`);
    });
  }

  render() {
    return (
      <Modal trigger={<Button>New Collection</Button>}>
        <Modal.Content>
          <Modal.Description>
            <Header>Create a New Collection</Header>
            <Form id="new-collection" onSubmit={this.sendForm}>
              <Form.Field>
                <label>Enter a title</label>
                <input type="text" name="title" />
              </Form.Field>

              <Form.Field>
                <label>Enter a description</label>
                <TextArea name="description" />
              </Form.Field>

              {/* attach form data to redirect */}
              <Button type="submit">Create</Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default CollectionModal;

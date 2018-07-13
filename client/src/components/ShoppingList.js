import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "react";
import { CSSTransition, TransitioGroup } from "react-transition-group";
import uuid from "uuid";

class ShoppingList extends Component {
  state = {
    items: [
      { id: uuid(), name: "Noah" },
      { id: uuid(), name: "Dushi" },
      { id: uuid(), name: "Keepwee" },
      { id: uuid(), name: "Dodger" }
    ]
  };
  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            const name = prompt("Enter Item");
            if (name) {
              this.setState(state => ({
                items: [...state.items, { id: uuid(), name }]
              }));
            }
          }}
        >
          Add Item
        </Button>
      </Container>
    );
  }
}

export default ShoppingList;

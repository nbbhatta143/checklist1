import React, { Component } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import { green } from "@mui/material/colors";
import "@fortawesome/fontawesome-free/css/all.css";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

class Checklist extends Component {
  state = {
    items: [],
    newItemText: "",
  };

  componentDidMount() {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (storedItems) {
      this.setState({ items: storedItems });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("items", JSON.stringify(this.state.items));
  }

  handleInputChange = (event) => {
    this.setState({ newItemText: event.target.value });
  };

  handleAddItem = (event) => {
    event.preventDefault();
    const newItemText = this.state.newItemText.trim();
    if (!newItemText) {
      return;
    }
    const newItem = {
      id: Date.now(),
      text: newItemText,
      done: false,
    };
    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
      newItemText: "",
    }));
  };

  handleDeleteItem = (itemId) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.id !== itemId),
    }));
  };

  handleToggleDone = (itemId) => {
    this.setState((prevState) => ({
      items: prevState.items.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            done: !item.done,
          };
        } else {
          return item;
        }
      }),
    }));
  };

  render() {
    return (
      <div className="checklist" style={{ marginTop: "3%" }}>
        <h1>Create your checklist</h1>
        <form onSubmit={this.handleAddItem}>
          <label>
            &nbsp;&nbsp;Add your lists :&nbsp;&nbsp;
            <input
              type="text"
              value={this.state.newItemText}
              onChange={this.handleInputChange}
              required
            />
          </label>
          {/* <button type="submit"></button> */}
          <IconButton type="submit" color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </form>
        <ul>
          {this.state.items.map((item) => (
            <li key={item.id}>
              <label className={item.done ? "done" : ""}>
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => this.handleToggleDone(item.id)}
                />
                &nbsp;&nbsp;{item.text}
              </label>
              <DeleteIcon
                className="delete"
                item
                xs={10}
                onClick={() => this.handleDeleteItem(item.id)}
              >
                Delete
              </DeleteIcon>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Checklist;

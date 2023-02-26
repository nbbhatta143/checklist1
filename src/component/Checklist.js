import React, { Component } from "react";
// import "./Checklist.css";

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
      <div className="checklist">
        <h1>Checklist</h1>
        <form onSubmit={this.handleAddItem}>
          <label>
            Add item:
            <input
              type="text"
              value={this.state.newItemText}
              onChange={this.handleInputChange}
              required
            />
          </label>
          <button type="submit">Add</button>
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
                {item.text}
              </label>
              <button className="delete" onClick={() => this.handleDeleteItem(item.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Checklist;

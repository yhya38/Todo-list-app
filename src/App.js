import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);

  function addItem(e) {
    e.preventDefault();
    setItems((prev) => {
      return [...prev, todo];
    });
    setTodo("");
  }

  function deleteItem(id) {
    setItems((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <div className="heading">
        <h1>
          To-DO List{" "}
          <small style={{ display: "block", fontSize: "10px" }}>
            - Yahiya Khan
          </small>
        </h1>
      </div>
      <div className="form">
        <Form todo={todo} setTodo={setTodo} addItem={addItem} />
        <div>
          <ul>
            {items.map((item, index) => (
              <TodoList
                key={index}
                id={index}
                todo={item}
                onChecked={deleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

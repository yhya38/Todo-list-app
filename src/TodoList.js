import React from "react";

function TodoList({ id, todo, onChecked }) {
  return (
    <div onClick={() =>onChecked(id)}>
      <li>{todo}</li>
    </div>
  );
}

export default TodoList;

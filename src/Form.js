import React from 'react'

function Form({todo, setTodo, addItem}) {

   

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button disabled={todo.length < 1} onClick={addItem}>
                    <span>Add</span>
                </button>
            </form>
        </div>
    )
}

export default Form

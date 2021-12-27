import React, { useState, useRef, Fragment } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);
  //when we type state changes
  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  //when we submit it will not refresh and the input will set to empty string
  const submitHandler = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={submitHandler} className="todo-form">
      {/* when the user click edit button it will select the input and changes the state update */}
      {props.edit ? (
        <Fragment>
          <input
            placeholder="Update your item"
            value={input}
            onChange={changeHandler}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={submitHandler} className="todo-button edit">
            Update
          </button>
        </Fragment>
      ) : (
        <Fragment>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={changeHandler}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={submitHandler} className="todo-button">
            add todo
          </button>
        </Fragment>
      )}
    </form>
  );
};

export default TodoForm;

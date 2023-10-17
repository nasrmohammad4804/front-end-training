import { useEffect, useReducer, useRef, useState } from "react";
import "./main.css";

const baseUrl = 'http://localhost:8080';

function TodoObject(title, description) {
  this.title = title;
  this.description = description;
}

const reducerFunction = (state, action) => {
  if (action.type === "insert") {
    return [...state, action.payload];
  } else if (action.type === "delete") {
    return [...state].filter((item) => item.id !== action.payload);
  } else if (action.type === "edit") {
    let index = state.findIndex((value) => value.id === action.payload.id);

    let result = [...state];
    result[index] = action.payload;
    return result;
  } else if (action.type === "initial") {
    return action.payload;
  }
};

export default function Todo() {


  const [todos, dispatch] = useReducer(reducerFunction, []);

  const [mode, setMode] = useState("insert");
  const editedItemId = useRef(null);
  const titleInput = useRef(null);
  const descriptionInput = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    if (mode === "insert") {
      let todo = new TodoObject(
        titleInput.current.value,
        descriptionInput.current.value
      );

      fetch(`${baseUrl}/todo`, {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => dispatch({ payload: data, type: mode }));
    } else {
      const body = {
        title: titleInput.current.value,
        description: descriptionInput.current.value,
      };

      fetch(`${baseUrl}/${editedItemId.current}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => dispatch({ payload: data, type: mode }));

      setMode("insert");
    }

    titleInput.current.value = null;
    descriptionInput.current.value = null;
  };

  const editHandler = (todo) => {
    editedItemId.current = todo.id;
    setMode("edit");

    titleInput.current.value = todo.title;
    descriptionInput.current.value = todo.description;
  };

  const deleteTodoHandler = (id) => {
    fetch(`${baseUrl}/todo/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }).then((response) => {
      if (response.status === 200) {
        dispatch({ type: "delete", payload: id });
      }
    });
  };

  useEffect(() => {
    fetch(`${baseUrl}/todo/all`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "initial", payload: data }));
  }, []);

  const data = todos.map((todo) => {
    return (
      <div key={todo.id} className="container__carts__item">
        <div className="container__carts__item__content">title : {todo.title}</div>
        <div className="container__carts__item__links">
          <a href="#" onClick={() => editHandler(todo)}>
            edit
          </a>
          <a href="#" onClick={() => deleteTodoHandler(todo.id)}>
            delete
          </a>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="container">
        <h2 className="container__heading">Todo Form</h2>
        <form onSubmit={submitHandler} className="container__form">
          <input
            ref={titleInput}
            type="text"
            placeholder="title"
            name="title"
            required
          />
          <input
            ref={descriptionInput}
            type="text"
            placeholder="description"
            name="description"
            required
          />

          {mode === "insert" ? (
            <input
              className="container__form__button--submit"
              type="submit"
              value="create"
            />
          ) : (
            <input
              style={{ backgroundColor: "greenyellow" }}
              className="container__form__button--submit"
              type="submit"
              value="edit"
            />
          )}
        </form>

        <section className="container__carts">{data}</section>
      </div>
    </>
  );
}

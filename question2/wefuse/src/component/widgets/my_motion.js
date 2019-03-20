import React, { useState } from "react";
import { TransitionMotion, spring, presets } from "react-motion";
import './styles/my_motion.css';
const MyMotion = props => {

    const styles = {
        btnStylesT:{
            color: '#74001B',
            background: '#E2E6EA'
        }
    }
  const [todos, setTodos] = useState([
    // key is creation date
    { key: "t1", data: { text: "Board the plane", isDone: false } },
    { key: "t2", data: { text: "Sleep", isDone: false } },
    {
      key: "t3",
      data: { text: "Try to finish conference slides", isDone: false }
    },
    {
      key: "t4",
      data: { text: "Eat cheese and drink wine", isDone: false }
    },

  ]);
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState("all");

  // logic from todo, unrelated to animation
  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      key: "t" + Date.now(),
      data: { text: value, isDone: false }
    };
    // append at head
    setTodos([newItem].concat(todos));
  };

  const handleDone = doneKey => {
    setTodos(
      todos.map(todo => {
        const {
          key,
          data: { text, isDone }
        } = todo;
        return key === doneKey
          ? { key: key, data: { text: text, isDone: !isDone } }
          : todo;
      })
    );
  };

  const handleToggleAll = () => {
    const allNotDone = todos.every(({ data }) => data.isDone);
    setTodos(
      todos.map(({ key, data: { text, isDone } }) => ({
        key: key,
        data: { text: text, isDone: !allNotDone }
      }))
    );
  };

  const handleSelect = selected => {
    setSelected(selected);
  };

  const handleClearCompleted = () => {
    setTodos(todos.filter(({ data }) => !data.isDone));
  };

  const handleDestroy = date => {
    setTodos(todos.filter(({ key }) => key !== date));
  };

  // actual animation-related logic
  const getDefaultStyles = () => {
    return todos.map(todo => ({
      ...todo,
      style: { height: 2, opacity: 0 }
    }));
  };

  const getStyles = () => {
    return todos
      .filter(({ data: { isDone, text } }) => {
        return (
          text.toUpperCase().indexOf(value.toUpperCase()) >= 0 &&
          ((selected === "completed" && isDone) ||
            (selected === "active" && !isDone) ||
            selected === "all")
        );
      })
      .map((todo, i) => {
        return {
          ...todo,
          style: {
            height: spring(60, presets.gentle),
            opacity: spring(1, presets.gentle)
          }
        };
      });
  };

  const willEnter = () => {
    return {
      height: 3,
      opacity: 0
    };
  };

  const willLeave = () => {
    return {
      height: spring(0),
      opacity: spring(0)
    };
  };

  const itemsLeft = todos.filter(({ data: { isDone } }) => !isDone).length;
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={handleSubmit}>
          <input
            autoFocus={true}
            className="new-todo input-field"
            placeholder="What needs to be done?"
            value={value}
            onChange={handleChange}
          />
        </form>
      </header>
      <section className="main ">
        <input
          className="toggle-all"
          type="checkbox"
          checked={itemsLeft === 0}
          style={{ display: todos.length === 0 ? "none" : "inline" }}
          onChange={handleToggleAll}
        />
        <TransitionMotion
          defaultStyles={getDefaultStyles()}
          styles={getStyles()}
          willLeave={willLeave}
          willEnter={willEnter}
        >
          {styles => (
            <ul className="todo-list">
              {styles.map(({ key, style, data: { isDone, text } }) => (
                <li
                style={styles.btnStylesT}
                  key={key}
                  style={style}
                  className={isDone ? "completed" : ""}
                >
                  <div className="view">
                    <input
                    style={styles.btnStylesT}
                      className="toggle"
                      type="checkbox"
                      onChange={() => handleDone(key)}
                      checked={isDone}
                    />
                    <label>{text}</label>
                    <button
                      className="destroy  "
                      onClick={() => handleDestroy(key)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </TransitionMotion>
      </section>
      <footer className="footer">
        <span className="todo-count">
          <strong>{itemsLeft}</strong> {itemsLeft === 1 ? "item" : "items"} left
        </span>
        <ul className="filters">
          <li>
            <a
              className={selected === "all btn waves-effect waves-light" ? "selected btn waves-effect waves-light" : " btn waves-effect waves-light"}
              onClick={() => handleSelect("all btn waves-effect waves-light")}
            >
              All
            </a>
          </li>
          <li>
            <a
              className={selected === "active btn waves-effect waves-light" ? "selected" : " btn waves-effect waves-light"}
              onClick={() => handleSelect("active")}
            >
              Active
            </a>
          </li>
          <li>
            <a 
              className={selected === "completed btn waves-effect waves-light" ? "selected btn waves-effect waves-light" : " btn waves-effect waves-light"}
              onClick={() => handleSelect("completed")}
            >
              Completed
            </a>
          </li>
        </ul>
        <button  className="clear-completed btn waves-effect waves-light" onClick={handleClearCompleted}>
          Clear completed
        </button>
      </footer>
    </section>
  );
};

export default MyMotion;
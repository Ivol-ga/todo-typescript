import { useState, useEffect, useRef } from "react";
import { Todo, FilterValuesType } from "../types/data";
import { TodoList } from "./TodoList/TodoList";
import "./App.css"

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterValuesType>("all");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };
  const HandleInputKeyChange: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const addTodo = () => {
    if (value.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          complete: false,
        },
      ]);
      setValue("");
    }
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          complete: !todo.complete,
          
        };
        
      })
    );
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  let tasksForTodoList = todos;
  if (filter === "complete") {
    tasksForTodoList = todos.filter((todo) => todo.complete === true);
  }
  if (filter === "active") {
    tasksForTodoList = todos.filter((todo) => todo.complete === false);
  }
  function handleChangeFilter(value: FilterValuesType) {
    setFilter(value);
  }
  function handleClearFilter() {
    setTodos(
      todos.map((todo) => {
        if (todo.complete !== true) return todo;
        if (todo.complete === true) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      })
    );
  }

  return (
    <div className="wrapper">
     <header className="header__title container">todos</header>
      <div className="todo__field">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={value}
          className="todo__input"
        data-testid="todo__input"
          name="todo"
          onChange={handleInputChange}
          onKeyDown={HandleInputKeyChange}
          ref={inputRef}
        />
        <button className="btn" data-testid="todo__add" onClick={addTodo}>Add todo</button>
      </div>
      <TodoList
        items={tasksForTodoList}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        handleChangeFilter={handleChangeFilter}
        handleClearFilter={handleClearFilter}
      />
    </div>
  );
};
export { App };

import { TodoItem } from "../TodoItem/TodoItem";
import { Todo } from "../../types/data";

interface ITodoListProps {
  items: Todo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  handleChangeFilter: Function;
  handleClearFilter: Function;
}

const TodoList: React.FC<ITodoListProps> = (props) => {
  const { items, toggleTodo, removeTodo } = props;
  const todoNotComplete = items.filter((item) => item.complete === false);
  return (
    <div className="todo__wrapper">
      {props.items.map((todo) => (
        <TodoItem
          key={todo.id}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          {...todo}
        />
      ))}
      <div className="todo__filter container">
        <span>{todoNotComplete.length} items left</span>
        <div className="buttons__sort">
          <button
            className="btn all"
            onClick={() => {
              props.handleChangeFilter("all");
            }}
          >
            All
          </button>
          <button
            className="btn active"
            onClick={() => {
              props.handleChangeFilter("active");
            }}
          >
            Active
          </button>
          <button
            className="btn completed"
            onClick={() => {
              props.handleChangeFilter("complete");
            }}
          >
            Completed
          </button>
        </div>
        <button
          className="button__clear btn"
          onClick={() => {
            props.handleClearFilter();
          }}
        >
          Clear completed
        </button>
      </div>
    </div>
  );
};
export { TodoList };

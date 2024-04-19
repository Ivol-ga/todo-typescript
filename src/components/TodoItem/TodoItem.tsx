import { Todo, ITodoItem } from "../../types/data";

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, removeTodo, toggleTodo } = props;

  return (
    <div className="container todo__items">
      <input
        type="checkbox"
        checked={complete}
        className="todo__checkbox"
        onChange={() => toggleTodo(id)}
      />
      <span className="todo__item_text">{title}</span>
      <button className="todo__close" data-testid="todo__close" onClick={() => removeTodo(id)}>x</button>
    </div>
  );
};
export { TodoItem };

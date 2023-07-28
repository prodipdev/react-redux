import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../services/actions/todosAction";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state.todosR);
  const dispatch = useDispatch();
  console.log(todos);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  return (
    <div>
      <h2>Todos</h2>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error.message}</h3>}
      {todos && todos.map((todo) => <p key={todo.id}>{todo.title}</p>)}
    </div>
  );
};

export default Todos;

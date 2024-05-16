import useTodos from './hooks/useTodos';

const TodoList = () => {
  const { data: todos, error, isLoading } = useTodos();

  if(isLoading) return <p>Loading...</p>

  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

// Limitations in this code
  // -No request cancellation
  // -No separation of concerns (if we need in other place getting info from an API we will need to duplicate the logic)
  // -No retries (if the request fail it will only show the error but won't retry)
  // -No automatic refresh
  // -No caching info to use later

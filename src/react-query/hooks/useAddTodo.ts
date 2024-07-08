import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constans";
import toDoService, { Todo } from "../services/toDoService";

interface AddTodoContext {
    previousTodos: Todo[];
}


const useAddTodo = (onAddd: () => void) => {
    const queryClient = useQueryClient();

    return useMutation<Todo, Error, Todo, AddTodoContext>({
      mutationFn: toDoService.post,
        onMutate: (newTodo: Todo) => {
          const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
  
          queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
            newTodo,
            ...todos,
          ]);

          onAddd();
  
          return { previousTodos };
        },
        onSuccess: (savedTodo, newTodo) => {
          queryClient.setQueriesData<Todo[]>(['todo'], todos =>
            todos?.map(todo => todo === newTodo ? savedTodo : todo)
          )
        },
  
        onError: (error, newTodo, context) => {
          if(!context) return;
  
          queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos)
        }
    });
}

export default useAddTodo;
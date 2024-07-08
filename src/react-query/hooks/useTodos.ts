import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constans";
import toDoService, { Todo } from "../services/toDoService";

const useTodos = () => {

    return useQuery<Todo[], Error>({
        queryKey: CACHE_KEY_TODOS,
        queryFn: toDoService.getAll,
        staleTime: 10 * 1000
    })
}

export default useTodos;
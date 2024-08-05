
interface Task {
    id: number;
    title: string;
}

interface AddTask {
    type: 'ADD',
    task: Task
}

interface DeleteTask {
    type: 'DELETE',
    taskId: number
}

type TaskAction = AddTask | DeleteTask;

const taskListReducer = (state: Task[], action: TaskAction): Task[] => {
    switch (action.type) {
        case 'ADD':
            return [action.task, ...state];
        case 'DELETE':
            return state.filter(t => t.id !== action.taskId)
    }
}

export default taskListReducer;
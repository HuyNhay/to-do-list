import { createContext, useContext, useReducer } from 'react';
import tasksReducer, { TaskAction, TaskType } from '../utils/tasksReducer';
import { initialTasks } from '../utils/data';

const TasksContext = createContext<TaskType[] | null>(null);

const TasksDispatchContext = createContext<React.Dispatch<TaskAction> | null>(
  null
);

export default function TasksProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTasks() {
  return useContext(TasksContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

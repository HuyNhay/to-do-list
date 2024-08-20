import TaskAdder from './ui/TaskAdder';
import tasksReducer, { TaskType } from './utils/tasksReducer';
import Menu from './ui/Menu';
import TaskList from './ui/TaskList';
import { useReducer } from 'react';
import { initialTasks } from './utils/data';

export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  const handleAddTask = (taskName: string) => {
    dispatch({ type: 'ADD', taskName });
  };

  const handleChangeTask = (task: TaskType) => {
    dispatch({ type: 'CHANGE', task });
  };

  const handleDeleteTask = (taskId: number) => {
    dispatch({ type: 'DELETE', taskId });
  };

  const handleDeleteAllTasks = () => {
    dispatch({ type: 'DELETE_ALL' });
  }

  return (
    <div className="h-screen bg-gradient bg-scroll bg-clip-border bg-no-repeat">
      <div className="grid grid-cols-4 gap-x-4 gap-y-16 p-6 pb-24 lg:grid-cols-12 lg:pb-24">
        <h1 className="col-span-4 text-center font-serif text-7xl tracking-widest lg:col-start-3 lg:col-end-11">
          My Tasks
        </h1>

        <TaskAdder addTask={handleAddTask} />

        <TaskList tasks={tasks} changeTask={handleChangeTask} deleteTask={handleDeleteTask} />

        <Menu deleteAllTasks={handleDeleteAllTasks} />
      </div>
    </div>
  );
}

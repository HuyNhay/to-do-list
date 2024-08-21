import TaskAdder from './ui/TaskAdder';
import tasksReducer, { TaskType } from './utils/tasksReducer';
import Menu from './ui/Menu';
import TaskList from './ui/TaskList';
import { useReducer } from 'react';
import { initialTasks } from './utils/data';
import Task from './ui/Task';

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
  };

  return (
    <div className="bg-wave grid grid-cols-4 gap-x-4 gap-y-16 bg-no-repeat p-6 pb-24 lg:grid-cols-12">
      <h1 className="col-span-full text-center font-serif text-6xl tracking-widest lg:col-span-8 lg:col-start-3 lg:text-7xl">
        My Tasks
      </h1>

      <TaskAdder addTask={handleAddTask} />

      <TaskList>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            changeTask={handleChangeTask}
            deleteTask={handleDeleteTask}
          />
        ))}
      </TaskList>

      <Menu deleteAllTasks={handleDeleteAllTasks} />
    </div>
  );
}

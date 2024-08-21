import { useTasks } from './TasksProvider';
import { TaskType } from '../utils/tasksReducer';
import Task from './Task';

export default function TaskList() {
  const tasks = useTasks() as TaskType[];

  return (
    <ul className="col-span-full grid grid-cols-8 gap-x-2 gap-y-4 lg:col-span-8 lg:col-start-3 lg:grid-cols-subgrid lg:gap-x-4">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
        />
      ))}
    </ul>
  );
}

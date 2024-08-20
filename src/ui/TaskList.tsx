import { TaskType } from '../utils/tasksReducer';
import Task from './Task';

interface TaskListProps {
  tasks: TaskType[];
  changeTask: (task: TaskType) => void;
  deleteTask: (taskId: number) => void;
}

export default function TaskList({
  tasks,
  changeTask,
  deleteTask,
}: TaskListProps) {
  return (
    <ul className="col-span-4 grid gap-y-4 lg:col-start-3 lg:col-end-11">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          changeTask={changeTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

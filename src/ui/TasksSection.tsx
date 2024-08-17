import { TasksSectionProps } from './data';
import Task from './Task';

export default function TasksSection({ tasks, setTasks }: TasksSectionProps) {
  return (
    <ul className="col-span-4 mx-6 flex flex-col gap-7 lg:col-span-8 lg:col-start-3 lg:col-end-11 lg:mx-0">
      {tasks.map((task) => (
        <Task key={task.name} name={task.name} tasks={tasks} setTasks={setTasks} />
      ))}
    </ul>
  );
}

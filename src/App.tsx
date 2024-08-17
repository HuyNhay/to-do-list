import AddSection from './ui/AddSection';
import { TaskType } from './ui/data';
import Menu from './ui/Menu';
import TasksSection from './ui/TasksSection';
import { useState } from 'react';

export default function App() {
  const sampleTasks: TaskType[] = [
    { name: 'Buy groceries', isCompleted: false },
    { name: 'Walk the dog', isCompleted: false },
    { name: 'Do laundry', isCompleted: false },
    { name: 'Cook dinner', isCompleted: false },
    { name: 'Wash dishes', isCompleted: false },
    { name: 'Water plants', isCompleted: false },
    { name: 'Take out trash', isCompleted: false },
    { name: 'Mop the floor', isCompleted: false },
    { name: 'Clean the bathroom', isCompleted: false },
  ];

  const [tasks, setTasks] = useState<TaskType[]>(sampleTasks);
  return (
    <div className="bg-gradient h-screen bg-scroll bg-clip-border bg-no-repeat">
      <div className="grid grid-cols-4 gap-x-4 gap-y-16 p-6 pb-24 lg:grid-cols-12 lg:pb-24">
        <h1 className="col-span-4 text-center font-serif text-7xl tracking-widest lg:col-start-3 lg:col-end-11">
          My Tasks
        </h1>

        <AddSection tasks={tasks} setTasks={setTasks} />

        <TasksSection tasks={tasks} setTasks={setTasks} />

        <Menu setTasks={setTasks} />
      </div>
    </div>
  );
}

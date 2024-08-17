import { useState } from 'react';
import { TaskType } from './data';

export default function AddSection({
  tasks,
  setTasks,
}: {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
}) {
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      return;
    }
    if (tasks.some((task) => task.name === inputValue)) {
      alert('Task already exists');
    } else {
      setTasks([...tasks, { name: inputValue, isCompleted: false }]);
    }
    setInputValue('');
  };

  return (
    <form
      className="col-span-4 mx-6 flex flex-col gap-7 lg:col-span-8 lg:col-start-3 lg:col-end-11 lg:mx-0"
      onSubmit={handleAddTask}
    >
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a task"
        className="rounded-lg bg-light-green px-8 py-3 outline-none lg:mx-5"
      />
      <button className="rounded-3xl bg-gradient-to-r from-light-green to-light-blue-200 px-8 py-6 font-semibold shadow-[rgba(172,212,225,0.5)_0px_4px_3px] lg:mx-[40%]">
        Add
      </button>
    </form>
  );
}

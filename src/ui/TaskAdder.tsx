import React, { useState } from 'react';
import { useTasksDispatch } from './TasksProvider';
import { TaskAction } from '../utils/tasksReducer';

export default function TaskAdder() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useTasksDispatch() as React.Dispatch<TaskAction>;

  const addTask = (taskName: string) => {
    dispatch({ type: 'ADD', taskName });
  };

  return (
    <form
      className="col-span-full grid gap-y-6 lg:col-span-8 lg:col-start-3 lg:grid-cols-subgrid"
      onSubmit={(e) => {
        e.preventDefault();
        if (inputValue.trim() === '') {
          return;
        }
        addTask(inputValue);
        setInputValue('');
      }}
    >
      <input
        name="task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        autoComplete="off"
        placeholder="Add a task"
        className="rounded-lg bg-light-green px-8 py-4 outline-none lg:col-span-full"
      />
      <button className="rounded-3xl bg-gradient-to-r from-light-green to-light-blue-200 px-8 py-4 font-semibold shadow-[rgba(172,212,225,0.5)_0px_4px_3px] lg:col-start-4 lg:col-end-6">
        Add
      </button>
    </form>
  );
}

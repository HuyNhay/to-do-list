import { useRef, useState } from 'react';
import { TaskType } from '../utils/tasksReducer';
import clsx from 'clsx';

interface TaskProps {
  task: TaskType;
  changeTask: (task: TaskType) => void;
  deleteTask: (taskId: number) => void;
}

export default function Task({ task, changeTask, deleteTask }: TaskProps) {
  const inputElement = useRef<HTMLInputElement>(null);

  const [inputValue, setInputValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className="col-span-full grid grid-cols-subgrid items-center justify-items-center border-b-2 py-2 text-xl shadow-[rgba(172,212,225,0.3)_2px_2px_3px] lg:rounded-md lg:text-3xl lg:shadow-[rgba(172,212,225,0.3)_0px_5px_6px_1px]">
      {/* Tick icon */}
      <button
        className="hover:cursor-pointer"
        onClick={() => {
          changeTask({ ...task, isCompleted: !task.isCompleted });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={clsx(
            'size-8 lg:size-10',
            task.isCompleted && 'stroke-green'
          )}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>

      {/* Task name */}
      {isEditing ? (
        <form
          className="col-span-6 grid grid-cols-subgrid justify-items-center"
          onSubmit={(e) => {
            e.preventDefault();
            changeTask({ ...task, name: inputValue });
            setIsEditing(false);
          }}
        >
          <input
            name="task"
            ref={inputElement}
            autoFocus
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="col-span-5 justify-self-stretch rounded-xl bg-light-blue-200 px-4 py-2 text-base outline-none lg:text-xl"
          />

          {/* Save icon */}
          <button className="hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 hover:stroke-light-blue lg:size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
              />
            </svg>
          </button>
        </form>
      ) : (
        <p
          className={clsx(
            'col-span-5 justify-self-start',
            task.isCompleted && 'text-light-100 line-through'
          )}
        >
          {task.name}
        </p>
      )}

      {/* Edit icon */}
      {!isEditing && (
        <button
          className="hover:cursor-pointer"
          onClick={() => {
            setIsEditing(true);
            setInputValue(task.name);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 hover:stroke-green lg:size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </button>
      )}

      {/* Delete icons */}
      <button
        className="hover:cursor-pointer"
        onClick={() => deleteTask(task.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="size-8 stroke-light-red hover:stroke-[red] lg:size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
    </li>
  );
}

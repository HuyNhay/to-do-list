import { tasksLength } from './data';

export interface TaskType {
  id: number;
  name: string;
  isCompleted: boolean;
}

export type TaskAction =
  | { type: 'ADD'; taskName: string }
  | { type: 'CHANGE'; task: TaskType }
  | { type: 'DELETE'; taskId: number }
  | { type: 'DELETE_ALL' };

let nextId = tasksLength + 1;

export default function tasksReducer(
  tasks: TaskType[],
  action: TaskAction
): TaskType[] {
  switch (action.type) {
    case 'ADD': {
      return [
        ...tasks,
        { id: nextId++, name: action.taskName, isCompleted: false },
      ];
    }
    case 'CHANGE': {
      return tasks.map((task) =>
        task.id === action.task.id ? action.task : task
      );
    }
    case 'DELETE': {
      return tasks.filter((task) => task.id !== action.taskId);
    }
    case 'DELETE_ALL': {
      return [];
    }
    default:
      throw new Error('Invalid action type');
  }
}

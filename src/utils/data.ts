import { TaskType } from './tasksReducer';

export const initialTasks: TaskType[] = [
  { id: 1, name: 'Buy groceries', isCompleted: false },
  { id: 2, name: 'Walk the dog', isCompleted: false },
  { id: 3, name: 'Do laundry', isCompleted: false },
  { id: 4, name: 'Cook dinner', isCompleted: false },
  { id: 5, name: 'Wash dishes', isCompleted: false },
  { id: 6, name: 'Water plants', isCompleted: false },
  { id: 7, name: 'Take out trash', isCompleted: false },
  { id: 8, name: 'Mop the floor', isCompleted: false },
  { id: 9, name: 'Clean the bathroom', isCompleted: false },
];

export const tasksLength = initialTasks.length;

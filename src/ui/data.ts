export interface TaskType {
  name: string;
  isCompleted: boolean;
}

export interface TasksSectionProps {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

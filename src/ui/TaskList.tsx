import React from 'react';

interface TaskListProps {
  children: React.ReactNode;
}

export default function TaskList({ children }: TaskListProps) {
  return (
    <ul className="col-span-full grid grid-cols-8 gap-x-2 gap-y-4 lg:col-span-8 lg:col-start-3 lg:grid-cols-subgrid lg:gap-x-4">
      {children}
    </ul>
  );
}

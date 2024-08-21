import TaskAdder from './ui/TaskAdder';
import Menu from './ui/Menu';
import TaskList from './ui/TaskList';
import TasksProvider from './ui/TasksProvider';

export default function App() {
  return (
    <TasksProvider>
      <div className="bg-wave grid grid-cols-4 gap-x-4 gap-y-16 bg-no-repeat p-6 pb-24 lg:grid-cols-12">
        <h1 className="col-span-full text-center font-serif text-6xl tracking-widest lg:col-span-8 lg:col-start-3 lg:text-7xl">
          My Tasks
        </h1>

        <TaskAdder />

        <TaskList />

        <Menu />
      </div>
    </TasksProvider>
  );
}

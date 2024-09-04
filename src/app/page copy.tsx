import { PrismaClient } from '@prisma/client';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';

const prisma = new PrismaClient();

async function getTasks() {
  const tasks = await prisma.task.findMany({
    include: {
      user: true,
      category: true,
    },
  });
  return tasks;
}

export default async function Home() {
  const tasks = await getTasks();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <TaskList tasks={tasks} />
      <h2 className="text-xl font-semibold mt-8 mb-4">Add a New Task</h2>
      <AddTaskForm userId={1} />
    </div>
  );
}

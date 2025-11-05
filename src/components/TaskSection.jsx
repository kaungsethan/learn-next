"use client"
import Header from "./Header";
import TaskList from "./TaskList";
import Form from "./Form";
import toDoTasks from "@/data/toDoTasks";
import { useState } from "react";

const TaskSection = () => {
  const [tasks,setTasks] = useState(toDoTasks)
  return (
    <section className="m-3">
      <Header />
      <TaskList tasks={tasks} setTasks={setTasks} />
      <Form tasks={tasks} setTasks={setTasks} />
    </section>
  );
};

export default TaskSection;

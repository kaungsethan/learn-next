"use client";
import toDoTasks from "@/data/toDoTasks";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Form = ({ tasks, setTasks }) => {
  const [newJob, setNewJob] = useState("");

  const handlerJobInput = (e) => {
    setNewJob(e.target.value);
  };

const handlerAddBtn = () => {
  newJob.trim() === ""
    ? toast.error("Task Required")
    : (setTasks([
        ...tasks,
        { id: tasks.length + 1, taskName: newJob, isDone: false },
      ]),
      toast.success("Task added ✅"),
      setNewJob(""));
};


  return (
    <div className="flex justify-center m-10 ">
      <input
        className="border-2 mx-2 px-5 py-3"
        placeholder="Task"
        onChange={handlerJobInput}
        value={newJob}
      />
      <button
        className="border-2 px-2 active:scale-110"
        onClick={handlerAddBtn}
      >
        Add
      </button>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Form;

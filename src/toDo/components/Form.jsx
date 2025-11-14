"use client";
import toDoTasks from "@/data/toDoTasks";
import useToDoStore from "@/store/useToDoStore";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {
  const addTask = useToDoStore((state) => state.addTask);
  const [newJob, setNewJob] = useState("");

  const inputTask = () => {
    newJob.trim() === ""
      ? toast.error("Task Required")
      : (addTask(newJob), toast.success("Task added ✅"), setNewJob(""))
  }

  const handlerJobInput = (e) => {
    setNewJob(e.target.value);
  };

  const handlerAddBtn = () => {
    inputTask();
  };

  const handleAddEnter = (e) => {
    e.key === "Enter" && inputTask();
  };

  return (
    <div className="flex justify-center m-10 ">
      <input
        className="border-2 mx-2 px-5 py-3"
        placeholder="Task"
        onChange={handlerJobInput}
        onKeyUp={handleAddEnter}
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

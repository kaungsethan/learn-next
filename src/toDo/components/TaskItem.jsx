import toast from "react-hot-toast";
import { HiOutlineTrash } from "react-icons/hi";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import { PiCircleThin } from "react-icons/pi";

const TaskItem = ({ task: { id, taskName, isDone }, setTasks, tasks }) => {
  const handleDelete = () => {
    setTasks(tasks.filter((task) => id !== task.id));
    toast.success("Task Deleted!");
  };

  const handleDone = () => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };
  return (
    <div
      className={`m-3 border-2 border-gray-500 p-3 flex justify-between items-center  ${
        isDone && "scale-95 opacity-35"
      }`}
    >
      <div className="flex justify-evenly items-center gap-2">
        {isDone ? (
          <HiOutlineCheckCircle
            className="hover:scale-90 cursor-pointer size-5"
            onClick={handleDone}
          />
        ) : (
          <PiCircleThin
            className="hover:scale-90 cursor-pointer size-5"
            onClick={handleDone}
          />
        )}
        <p className={`${isDone && "line-through"}`}>{taskName}</p>
      </div>
      <HiOutlineTrash
        className="hover:scale-90 cursor-pointer size-5 "
        onClick={handleDelete}
      />
    </div>
  );
};

export default TaskItem;

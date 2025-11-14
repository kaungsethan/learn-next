import toDoTasks from '@/data/toDoTasks';
import TaskItem from './TaskItem';
import useToDoStore from '@/store/useToDoStore';

const TaskList = () => {
  const tasks = useToDoStore((state)=>state.tasks);
  return (
    <div className='size-2/12 mx-auto'>
        {tasks.map(task=> <TaskItem key={task.id} task={task} />)}
    </div>
  )
}

export default TaskList
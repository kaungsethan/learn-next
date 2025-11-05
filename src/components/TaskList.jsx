import toDoTasks from '@/data/toDoTasks';
import TaskItem from './TaskItem';

const TaskList = ({tasks,setTasks}) => {

  return (
    <div className='size-2/12 mx-auto'>
        {tasks.map(task=> <TaskItem key={task.id} task={task} setTasks={setTasks} tasks={tasks}/>)}
    </div>
  )
}

export default TaskList
import useToDoStore from '@/store/useToDoStore'
import React from 'react'

const Header = () => {

    const tasks = useToDoStore((state)=>state.tasks)

  return (
    <header className='m-5'>
        <h1 className="font-serif text-2xl text-center">TO DO LISTS 
          <span className="p-2 mx-3 bg-gray-300 rounded-3xl font-semibold text-stone-700">
          {tasks.filter((task) => task.isDone === true).length}/{tasks.length}
          </span>
        </h1>
    </header>
  )
}

export default Header
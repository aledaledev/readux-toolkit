import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import List from './List'
import Navigation from './Navigation'

const TaskList = () => {

  const tasks = useSelector(state => state.tasks)

  return (
    <>
    <Navigation/>
    <div className='py-6 px-10'>
      <h2 className='text-5xl py-4 pl-5'>Tasks : {tasks.length}</h2>    
      <ul className='border border-solid border-zinc-400 flex p-4 gap-4'>
        {tasks.map(task => <List key={task.id} task={task}/>)}
      </ul>
    </div>
    </>
  )
}

export default TaskList
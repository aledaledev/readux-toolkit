import React, { useEffect, useState } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { addTask, editTask } from '../features/tasks/taskSlice'
import {v4 as uuid} from 'uuid'
import Navigation from './Navigation'
import { useNavigate, useParams } from 'react-router-dom'

const TaskForm = () => {

  const [task, setTask] = useState({
    title:'',
    description:'',
    completed: false,
  })

  //enviar acciones
  const dispatch = useDispatch()
  //para navegar por rutas
  const navigate = useNavigate()
  //obtener parametros
  const params = useParams()
  //obtener state
  const tasks = useSelector(state => state.tasks)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(params.id){
      dispatch(editTask({...task,id:params.id}))
      navigate('/')
    } else {
      dispatch(addTask({...task,id:uuid()}))
      navigate('/')
    }
  }

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  useEffect(()=>{
    if(params.id){
    const {id} = params
    const selectedTask = tasks.find(task => task.id===id)
    setTask(selectedTask)
    }
  },[])

  return (
    <>
    <Navigation/>
    <div className='w-full py-16'>
      <form className='flex flex-col gap-5 w-4/6 bg-gray-400 mx-auto p-5 border border-solid border-gray-400' onSubmit={handleSubmit}>
      <input className='py-1 px-2' type="text" name="title" value={task.title} onChange={handleChange} placeholder='title'/>
      <textarea className='py-1 px-2 resize-none h-20' name='description' value={task.description} onChange={handleChange} placeholder='description' />
      <button className='px-1 bg-blue-600 self-center font-normal text-white'>save task</button>
      </form>
    </div>

    </>
  )
}

export default TaskForm
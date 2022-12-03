import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const App = () => {
  return (
    <div className='bg-gray-300 h-screen font-thin'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<TaskList/>}/>
        <Route path='/create-task' element={<TaskForm/>}/>
        <Route path='/edit-task/:id' element={<TaskForm/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {
        id:'1',
        title:'task 1',
        description: 'task 1 description',
        completed: false
    },
    {
        id:'2',
        title:'task 2',
        description: 'task 2 description',
        completed: true
    }
]

export const taskSlice = createSlice({
    name:'tasks',
    initialState: initialState,
    reducers: {
        addTask: (state,action) => {
            return [...state,action.payload]
            //state.push(action.payload)
        },
        deleteTask: (state,action) => {
            return [...state].filter(task => task.id !== action.payload.id)
        },
        editTask: (state,action) => {
            const taskIndex = state.findIndex(task => task.id === action.payload.id)
            if(taskIndex > 0) {
                const tasks = [...state]
                tasks[taskIndex] = action.payload
                return tasks
            }
        },
        changeCompleted: (state,action) => {
            const taskIndex = state.findIndex(task => task.id === action.payload.id)
            if(taskIndex > 0) {
                /*const tasks = [...state]
                tasks[taskIndex] = {...state[taskIndex], ['completed']:!state[taskIndex].completed}
                return tasks*/
                state.map(task => task.id === action.payload.id?task.completed=!task.completed:task)
            }
        }
    }
})

export const {addTask,deleteTask,editTask,changeCompleted} = taskSlice.actions
export default taskSlice.reducer
import {createSlice} from '@reduxjs/toolkit'

const initialState = [
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
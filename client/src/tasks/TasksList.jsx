// import { useEffect, useState } from "react"
// import Axios from "axios"
// import { Link } from "react-router-dom"
// import TaskItem from "./TaskItem"
// const TasksList = () => {
//     const [tasks, setTasks] = useState([])
//     const [sort, setSort] = useState("")
//     const fetchTasks = async () => {
//         const { data } = await Axios.get("http://localhost:2003/api/tasks/")
//         setTasks(data)
//     }
//     useEffect(() => {
//         fetchTasks()

//     }, [])
//     const a = tasks.filter((task) => {
//         return task.name.includes(sort)
//     })
//     if (tasks.length === 0) return <h1>Loading...</h1>
//     return <>
//         <input onChange={(e) => setSort(e.target.value)}></input>
//         {a.map((task, index) => {
//             return <TaskItem task={task} fetchTasks={fetchTasks} />
//         })}
//     </>
// }
// export default TasksList
import { useEffect, useState } from "react"
import Axios from "axios"
import TaskItem from "./TaskItem"
import { Box, TextField, CircularProgress, Typography, List, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const TasksList = () => {
    const [tasks, setTasks] = useState([])
    const [sort, setSort] = useState("")
    
    const fetchTasks = async () => {
        const { data } = await Axios.get("http://localhost:2003/api/tasks/")
        setTasks(data)
    }
    
    useEffect(() => {
        fetchTasks()
    }, [])
    
    const a = tasks.filter((task) => {
        return task.name.includes(sort)
    })
    
    if (tasks.length === 0) {
        return (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 4, justifyContent: 'center', width: '100%' }}>
                <CircularProgress />
                <Typography variant="h6">Loading...</Typography>
            </Box>
        )
    }
    
    return (
        <Box sx={{ padding: 3, width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
            <TextField 
                label="Search tasks" 
                variant="outlined" 
                size="small"
                onChange={(e) => setSort(e.target.value)} 
                sx={{ mb: 4, width: '100%', maxWidth: 600 }}
                InputProps={{
                    startAdornment: <SearchIcon sx={{ color: 'action.active', mr: 1 }} />,
                }}
            />
            
            <Paper elevation={2} sx={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
                <List disablePadding>
                    {a.map((task, index) => (
                        <TaskItem 
                            key={task._id || index} 
                            task={task} 
                            fetchTasks={fetchTasks} 
                        />
                    ))}
                </List>
            </Paper>
        </Box>
    )
}
export default TasksList
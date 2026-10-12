// import Axios from "axios"
// import { useNavigate } from "react-router-dom"
// import TasksList from "./TasksList"
// import { useState } from "react"
// import Update from "./Update"

// const TaskItem = ({ task,fetchTasks }) => {
//     const navigate = useNavigate()
//     const str = task.tags ? task.tags.join(" ") : ""
//     const [showUpdate, setShowUpdate] = useState(false)

//     const deleted = async (e) => {
//         e.preventDefault()
//         const { data } = await Axios.delete(`http://localhost:2003/api/tasks/${task._id}`)
//         fetchTasks()
//         { <TasksList /> } 
//         navigate("/tasks")
//     }
//     const updated = async () => {
//         const { data } = await Axios.put("http://localhost:2003/api/tasks/", { id: task._id, name: task.name, tags: task.tags, complete: true })
//     }
//     return <>
//         <h2>{task.name}</h2>
//         <h3>tags: {str}</h3>
//         <button onClick={deleted}>Delete {task._id}</button>
//         <button onClick={updated}>Complete</button>
//         <button onClick={() => { setShowUpdate(true) }}>Edit</button>
//         {task.complete && <h1>הושלם</h1>}
//         {showUpdate && <Update task={task} fetchTasks={fetchTasks} />}
//     </>
// }
// export default TaskItem
import Axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Update from "./Update"
import { ListItem, Typography, Button, Box, Dialog, DialogTitle, DialogContent, Chip, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlineOutlined'

const TaskItem = ({ task, fetchTasks }) => {
    const navigate = useNavigate()
    const [openEdit, setOpenEdit] = useState(false)

    const deleted = async (e) => {
        e.preventDefault()
        const { data } = await Axios.delete(`http://localhost:2003/api/tasks/${task._id}`)
        fetchTasks()
        navigate("/tasks")
    }
    
    const updated = async () => {
        const { data } = await Axios.put("http://localhost:2003/api/tasks/", { id: task._id, name: task.name, tags: task.tags, complete: true })
        fetchTasks()
    }
    
    return (
        <>
            <ListItem 
                divider
                sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    gap: 2,
                    padding: 2,
                    backgroundColor: task.complete ? 'rgba(76, 175, 80, 0.04)' : 'inherit',
                    borderRight: task.complete ? '5px solid #4caf50' : '5px solid transparent',
                    transition: 'all 0.2s ease'
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexGrow: 1, width: { xs: '100%', sm: 'auto' } }}>
                    {task.complete ? (
                        <CheckCircleIcon color="success" />
                    ) : (
                        <IconButton onClick={updated} color="default" title="Mark as complete">
                            <CheckCircleOutlineIcon />
                        </IconButton>
                    )}
                    
                    <Box>
                        <Typography 
                            variant="body1" 
                            sx={{ 
                                fontWeight: 500,
                                textDecoration: task.complete ? 'line-through' : 'none', 
                                color: task.complete ? 'text.secondary' : 'text.primary' 
                            }}
                        >
                            {task.name}
                        </Typography>
                        
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 0.5 }}>
                            {task.tags && task.tags.map((tag, i) => (
                                <Chip key={i} label={tag} size="small" variant="outlined" />
                            ))}
                        </Box>
                    </Box>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 1, width: { xs: '100%', sm: 'auto' }, justifyContent: 'flex-end' }}>
                    <Button 
                        variant="outlined" 
                        color="primary" 
                        startIcon={<EditIcon />} 
                        onClick={() => setOpenEdit(true)}
                        size="small"
                    >
                        Edit
                    </Button>
                    <Button 
                        variant="outlined" 
                        color="error" 
                        startIcon={<DeleteIcon />} 
                        onClick={deleted}
                        size="small"
                    >
                        Delete
                    </Button>
                </Box>
            </ListItem>

            <Dialog open={openEdit} onClose={() => setOpenEdit(false)} fullWidth maxWidth="xs">
                <DialogTitle sx={{ pb: 1 }}>Edit Task</DialogTitle>
                <DialogContent>
                    <Update task={task} fetchTasks={fetchTasks} setOpenEdit={setOpenEdit} />
                </DialogContent>
            </Dialog>
        </>
    )
}
export default TaskItem
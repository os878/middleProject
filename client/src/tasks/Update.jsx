// import { useState } from "react"
// import Axios from "axios"
// import { useNavigate } from "react-router-dom"
// const Update = ({task,fetchTasks}) => {
//     const [name,setName]=useState(task.name)
//     const [tags,setTags]=useState(task.tags)
//     const submitForm = async (e) => {
//         e.preventDefault()
//         const { data } = await Axios.put("http://localhost:2003/api/tasks/", {id:task._id, name:name,tags:tags, complete:task.complete})
//         fetchTasks()
//         setName("")
//         setTags("")
//         // navigate("/tasks")
//     }
//     return <>
//         <form onSubmit={submitForm}>
//             <input type="text" defaultValue={name} placeholder="Please add name" required={true} onChange={(e) => {setName(e.target.value)}} />
//             <input type="text" defaultValue={tags} placeholder="Please add tags" required={true} onChange={(e) => {setTags(e.target.value)}} />
            
//             <button type="submit">send</button>
//         </form>
//     </>
// }
// export default Update
import { useState } from "react"
import Axios from "axios"
import { Box, TextField, Button } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'

const Update = ({ task, fetchTasks, setOpenEdit }) => {
    // המרה למחרוזת במידה והתגים מגיעים כמערך
    const [name, setName] = useState(task.name)
    const [tags, setTags] = useState(Array.isArray(task.tags) ? task.tags.join(",") : task.tags)
    
    const submitForm = async (e) => {
        e.preventDefault()
        try {
            const { data } = await Axios.put("http://localhost:2003/api/tasks/", { 
                id: task._id, 
                name: name, 
                tags: tags, 
                complete: task.complete 
            })
            fetchTasks()
            setName("")
            setTags("")
            if (setOpenEdit) setOpenEdit(false)
        } catch (error) {
            console.error("Error updating task:", error)
        }
    }
    
    return (
        <Box 
            component="form" 
            onSubmit={submitForm} 
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}
        >
            <TextField 
                label="Please add name" 
                variant="outlined" 
                size="small" 
                required 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                fullWidth
            />
            <TextField 
                label="Please add tags" 
                variant="outlined" 
                size="small" 
                required 
                value={tags} 
                onChange={(e) => setTags(e.target.value)} 
                fullWidth
            />
            <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                startIcon={<SaveIcon />}
                fullWidth
            >
                Save Changes
            </Button>
        </Box>
    )
}
export default Update
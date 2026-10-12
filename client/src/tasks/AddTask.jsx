// import { useState } from "react"
// import Axios from "axios"
// import { useNavigate } from "react-router-dom"
// const AddTask = () => {
//     const [name, setName] = useState("")
//     const [tags, setTags] = useState("")
    
//     const navigate = useNavigate()
//     const submitForm = async (e) => {
//         e.preventDefault()
//         const { data } = await Axios.post("http://localhost:2003/api/tasks/", { name,tags })
//         setName("")
//         setTags("")
//         navigate("/tasks")
//     }
//     return <>
//         <form onSubmit={submitForm}>
//             <input type="text" value={name} placeholder="Please add name" required={true} onChange={(e) => setName(e.target.value)} />
//             <input type="text" value={tags} placeholder="Please add tags" required={true} onChange={(e) => setTags(e.target.value)} />
//             <button type="submit">send</button>
//         </form>
//     </>
// }
// export default AddTask
import { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
import { Box, TextField, Button, Typography } from '@mui/material'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'

const AddTask = () => {
    const [name, setName] = useState("")
    const [tags, setTags] = useState("")
    
    const navigate = useNavigate()
    const submitForm = async (e) => {
        e.preventDefault()
        const { data } = await Axios.post("http://localhost:2003/api/tasks/", { name, tags })
        setName("")
        setTags("")
        navigate("/tasks")
    }
    
    return (
        <Box 
            component="form" 
            onSubmit={submitForm} 
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, mt: 2, p: 2 }}
        >
            <Typography variant="h5" component="h2" sx={{ mb: 1 }}>Add New Task</Typography>
            <TextField 
                label="Please add name" 
                variant="outlined" 
                required 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                fullWidth 
            />
            <TextField 
                label="Please add tags" 
                variant="outlined" 
                required 
                value={tags} 
                onChange={(e) => setTags(e.target.value)} 
                fullWidth 
            />
            <Button type="submit" variant="contained" color="primary" startIcon={<PlaylistAddIcon />}>
                Send
            </Button>
        </Box>
    )
}
export default AddTask
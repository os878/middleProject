// import { useState } from "react"
// import Axios from "axios"
// import { useNavigate } from "react-router-dom"
// import TextField from '@mui/material/TextField'

// const AddArticle = () => {
//     const [title, setTitle] = useState("")
//     const [body, setBody] = useState("")
//     const navigate = useNavigate()

//     const submitForm = async (e) => {
//         e.preventDefault()
//         const { data } = await Axios.post("http://localhost:2003/api/article/", { title, body })
//         setTitle("")
//         setBody("")
//         navigate("/article")
//     }
//     return <>
//         <form onSubmit={submitForm}>
//             <input type="text" value={title} placeholder="Please add title" required={true} onChange={(e) => setTitle(e.target.value)} />
//             <TextField value={body} required={true} onChange={(e) => setBody(e.target.value)} id="standard-multiline-static" label="Multiline" multiline rows={4} variant="standard" />
//             <button type="submit">send</button>
//         </form>
//     </>
// }
// export default AddArticle
import { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
import { Box, TextField, Button, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

const AddArticle = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const navigate = useNavigate()

    const submitForm = async (e) => {
        e.preventDefault()
        const { data } = await Axios.post("http://localhost:2003/api/article/", { title, body })
        setTitle("")
        setBody("")
        navigate("/article")
    }

    return (
        <Box 
            component="form" 
            onSubmit={submitForm} 
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, mt: 2 }}
        >
            <Typography variant="h5" component="h2" sx={{ mb: 1 }}>Add New Article</Typography>
            <TextField 
                label="Please add title" 
                variant="outlined" 
                required 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                fullWidth 
            />
            <TextField 
                label="Multiline Body Content" 
                required 
                value={body} 
                onChange={(e) => setBody(e.target.value)} 
                multiline 
                rows={4} 
                variant="outlined" 
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary" startIcon={<SendIcon />}>
                Send
            </Button>
        </Box>
    )
}
export default AddArticle
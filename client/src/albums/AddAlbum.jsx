// import { useState } from "react"
// import Axios from "axios"
// import { useNavigate } from "react-router-dom"
// const AddAlbum = () => {
//     const [title, setTitle] = useState("")
//     const [imageURL, setImageURL] = useState("")
    
//     const navigate = useNavigate()
//     const submitForm = async (e) => {
//         e.preventDefault()
//         const { data } = await Axios.post("http://localhost:2003/api/photo/", { title,imageURL })
      
//         navigate("/albums")
//     }
//     return <>
//         <form onSubmit={submitForm}>
//             <input type="text" value={title} placeholder="Please add title" required={true} onChange={(e) => setTitle(e.target.value)} />
//             <input type="text" defaultValue={imageURL} placeholder="Please add url" required={true} onChange={(e) => {setImageURL(e.target.value)}} />
//             <button type="submit">send</button>
//         </form>
//     </>
// }
// export default AddAlbum
import { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
import { Box, TextField, Button, Typography } from '@mui/material'

const AddAlbum = () => {
    const [title, setTitle] = useState("")
    const [imageURL, setImageURL] = useState("")
    
    const navigate = useNavigate()
    const submitForm = async (e) => {
        e.preventDefault()
        const { data } = await Axios.post("http://localhost:2003/api/photo/", { title, imageURL })
        navigate("/albums")
    }

    return (
        <Box 
            component="form" 
            onSubmit={submitForm} 
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, mt: 2 }}
        >
            <Typography variant="h5" component="h2">Add New Album</Typography>
            <TextField 
                label="Please add title" 
                variant="outlined" 
                required 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                fullWidth 
            />
            <TextField 
                label="Please add url" 
                variant="outlined" 
                required 
                defaultValue={imageURL} 
                onChange={(e) => setImageURL(e.target.value)} 
                fullWidth 
            />
            <Button type="submit" variant="contained" color="primary">
                Send
            </Button>
        </Box>
    )
}
export default AddAlbum
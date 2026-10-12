// import { useState } from "react"
// import Axios from "axios"
// import { useNavigate } from "react-router-dom"
// const UpdateAlbum = ({photo,fetchPhotos}) => {
//     const [imageURL,setImageURL]=useState(photo.imageURL)
//     const submitForm = async (e) => {
//         e.preventDefault()
//         const { data } = await Axios.put("http://localhost:2003/api/photo/", {id:photo._id, title:photo.title,imageURL:imageURL})
//         fetchPhotos()
       
//     }
//     return <>
//         <form onSubmit={submitForm}>
//             <input type="text" defaultValue={imageURL} placeholder="Please add url" required={true} onChange={(e) => {setImageURL(e.target.value)}} />
            
//             <button type="submit">send</button>
//         </form>
//     </>
// }
// export default UpdateAlbum
import { useState } from "react"
import Axios from "axios"
import { Box, TextField, Button } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'

const UpdateAlbum = ({ photo, fetchPhotos, setOpenEdit }) => {
    const [imageURL, setImageURL] = useState(photo.imageURL)
    
    const submitForm = async (e) => {
        e.preventDefault()
        const { data } = await Axios.put("http://localhost:2003/api/photo/", { id: photo._id, title: photo.title, imageURL: imageURL })
        fetchPhotos()
        if (setOpenEdit) {
            setOpenEdit(false) // סוגר את הדיאלוג באופן אוטומטי לאחר השמירה
        }
    }

    return (
        <Box 
            component="form" 
            onSubmit={submitForm} 
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}
        >
            <TextField 
                label="Please add url" 
                variant="outlined" 
                size="small" 
                required 
                defaultValue={imageURL} 
                onChange={(e) => setImageURL(e.target.value)} 
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
export default UpdateAlbum
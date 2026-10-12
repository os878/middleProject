// import Axios from "axios"
// import { useNavigate } from "react-router-dom"
// import { useState } from "react"
// import UpdateAlbum from "./UpdateAlbum"

// const AlbumItem = ({ photo,fetchPhotos }) => {
//     const navigate = useNavigate()
//     const [showUpdate, setShowUpdate] = useState(false)

//     const deleted = async (e) => {
//         e.preventDefault()
//         const { data } = await Axios.delete(`http://localhost:2003/api/photo/${photo._id}`)
//         fetchPhotos()
     
//     }
  
//     return <>
//         <h2>{photo.title}</h2>
//         <img src={`/${photo.imageURL}.png`} alt={photo.imageURL || "תמונה"}/>

//         <button onClick={deleted}>Delete {photo._id}</button>
//         <button onClick={() => { setShowUpdate(true) }}>Edit</button>
//         {showUpdate && <UpdateAlbum photo={photo} fetchPhotos={fetchPhotos} />}
//     </>
// }
// export default AlbumItem
import Axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import UpdateAlbum from "./UpdateAlbum"
import { Card, CardContent, CardMedia, Typography, Button, Box, Dialog, DialogTitle, DialogContent } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const AlbumItem = ({ photo, fetchPhotos }) => {
    const navigate = useNavigate()
    const [openEdit, setOpenEdit] = useState(false)

    const deleted = async (e) => {
        e.preventDefault()
        const { data } = await Axios.delete(`http://localhost:2003/api/photo/${photo._id}`)
        fetchPhotos()
    }
  
    return (
        <>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: 3 }}>
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="h2" sx={{ minHeight: '3.5rem', overflow: 'hidden', textOverflow: 'ellipsis', mb: 1 }}>
                        {photo.title}
                    </Typography>
                    <CardMedia
                        component="img"
                        height="180"
                        image={`/${photo.imageURL}.png`}
                        alt={photo.imageURL || "תמונה"}
                        sx={{ borderRadius: 1, mb: 2, objectFit: 'cover' }}
                    />
                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'space-between', mt: 'auto' }}>
                        <Button 
                            variant="outlined" 
                            color="error" 
                            startIcon={<DeleteIcon />} 
                            onClick={deleted}
                            size="small"
                        >
                            Delete
                        </Button>
                        <Button 
                            variant="outlined" 
                            color="primary" 
                            startIcon={<EditIcon />} 
                            onClick={() => setOpenEdit(true)}
                            size="small"
                        >
                            Edit
                        </Button>
                    </Box>
                </CardContent>
            </Card>

            {/* דיאלוג מודאלי לעריכה במקום פתיחה מתחת לתמונה */}
            <Dialog open={openEdit} onClose={() => setOpenEdit(false)} fullWidth maxWidth="xs">
                <DialogTitle sx={{ pb: 1 }}>Edit Album Title/URL</DialogTitle>
                <DialogContent>
                    <UpdateAlbum photo={photo} fetchPhotos={fetchPhotos} setOpenEdit={setOpenEdit} />
                </DialogContent>
            </Dialog>
        </>
    )
}
export default AlbumItem
// import Axios from "axios"
// import { useNavigate } from "react-router-dom"
// import { useState } from "react"
// import Box from '@mui/material/Box'
// import TextField from '@mui/material/TextField'
// import UpdateUser from "./UpdateUser"

// const UserItem = ({ user,fetchUsers}) => {
//     const navigate = useNavigate()
//     const [showUpdate,setShowUpdate]=useState(false)

//     const deleted = async (e) => {
//         e.preventDefault()
//         const { data } = await Axios.delete(`http://localhost:2003/api/users/${user._id}`)
//         fetchUsers()
     
//     }
//     return <>
//         <div className="container">
//             <h2>{user.name}</h2>
//             <h5>{user.userName}</h5>
//             <h5>{user.email}</h5>
//             <h5>{user.address}</h5>
//             <h5>{user.phone}</h5>
//             <button onClick={deleted}>Delete</button>
//             <button onClick={()=>setShowUpdate(true)}>Edit</button>
//             {showUpdate && <UpdateUser user={user} fetchUsers={fetchUsers}/>}
//         </div>
//     </>
// }
// export default UserItem
import Axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import UpdateUser from "./UpdateUser"
import { ListItem, Typography, Button, Box, Dialog, DialogTitle, DialogContent, Grid } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const UserItem = ({ user, fetchUsers }) => {
    const navigate = useNavigate()
    const [openEdit, setOpenEdit] = useState(false)

    const deleted = async (e) => {
        e.preventDefault()
        const { data } = await Axios.delete(`http://localhost:2003/api/users/${user._id}`)
        fetchUsers()
    }
    
    return (
        <>
            <ListItem 
                divider
                sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { xs: 'flex-start', md: 'center' }, 
                    justifyContent: 'space-between',
                    gap: 2,
                    padding: 2,
                    width: '100%'
                }}
            >
                {/* פריסת פרטי המשתמש לרוחב השורה באמצעות Grid */}
                <Grid container spacing={2} sx={{ flexGrow: 1, alignItems: 'center' }}>
                    <Grid item xs={12} sm={4} md={3}>
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                            {user.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            @{user.userName}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Typography variant="body2" color="text.primary">
                            {user.email}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Typography variant="body2" color="text.secondary">
                            {user.phone}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                            {user.address || 'No address provided'}
                        </Typography>
                    </Grid>
                </Grid>
                
                {/* כפתורי פעולה בצד שמאל */}
                <Box sx={{ display: 'flex', gap: 1, width: { xs: '100%', md: 'auto' }, justifyContent: 'flex-end', mt: { xs: 1, md: 0 } }}>
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

            {/* מעבר לדיאלוג מודאלי נקי לעריכה כדי לא להרוס את מבנה השורה */}
            <Dialog open={openEdit} onClose={() => setOpenEdit(false)} fullWidth maxWidth="xs">
                <DialogTitle sx={{ pb: 1 }}>Edit User</DialogTitle>
                <DialogContent>
                    <UpdateUser user={user} fetchUsers={fetchUsers} setOpenEdit={setOpenEdit} />
                </DialogContent>
            </Dialog>
        </>
    )
}
export default UserItem
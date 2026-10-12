// import React from 'react'
// import { useState } from "react"
// import Axios from "axios"

// const UpdateUser = ({ user,fetchUsers }) => {
//     const [name, setName] = useState(user.name)
//     const [userName, setUserName] = useState(user.userName)
//     const [email, setEmail] = useState(user.email)
//     const [address, setAddress] = useState(user.address)
//     const [phone, setPhone] = useState(user.phone)
    
//     const submitForm = async (e) => {
//         e.preventDefault()
//         const { data } = await Axios.put("http://localhost:2003/api/users/", { id: user._id, name: name, userName: userName,email:email,address:address,phone:phone })
//         fetchUsers()
//     }
//     return (
//         <form onSubmit={submitForm}>
//             <input type="text" defaultValue={name} placeholder="Please add name" required={true} onChange={(e) => { setName(e.target.value) }} />
//             <input type="text" defaultValue={userName} placeholder="Please add userName" required={true} onChange={(e) => { setUserName(e.target.value) }} />
//             <input type="text" defaultValue={email} placeholder="Please add email" required={true} onChange={(e) => { setEmail(e.target.value) }} />
//             <input type="text" defaultValue={address} placeholder="Please add address" onChange={(e) => { setAddress(e.target.value) }} />
//             <input type="text" defaultValue={phone} placeholder="Please add phone" required={true} onChange={(e) => { setPhone(e.target.value) }} />
//             <button type="submit">send</button>
//         </form>)
// }

// export default UpdateUser
import React from 'react'
import { useState } from "react"
import Axios from "axios"
import { Box, TextField, Button } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'

const UpdateUser = ({ user, fetchUsers, setOpenEdit }) => {
    const [name, setName] = useState(user.name)
    const [userName, setUserName] = useState(user.userName)
    const [email, setEmail] = useState(user.email)
    const [address, setAddress] = useState(user.address)
    const [phone, setPhone] = useState(user.phone)
    
    const submitForm = async (e) => {
        e.preventDefault()
        const { data } = await Axios.put("http://localhost:2003/api/users/", { id: user._id, name: name, userName: userName, email: email, address: address, phone: phone })
        fetchUsers()
        if (setOpenEdit) setOpenEdit(false) // סגירת הדיאלוג אוטומטית לאחר השמירה
    }
    
    return (
        <Box 
            component="form" 
            onSubmit={submitForm} 
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}
        >
            <TextField 
                label="Name" 
                variant="outlined" 
                size="small"
                required 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                fullWidth 
            />
            <TextField 
                label="Username" 
                variant="outlined" 
                size="small"
                required 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)} 
                fullWidth 
            />
            <TextField 
                label="Email" 
                type="email"
                variant="outlined" 
                size="small"
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                fullWidth 
            />
            <TextField 
                label="Address" 
                variant="outlined" 
                size="small"
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
                fullWidth 
            />
            <TextField 
                label="Phone" 
                variant="outlined" 
                size="small"
                required 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                fullWidth 
            />
            <Button type="submit" variant="contained" color="primary" startIcon={<SaveIcon />} fullWidth>
                Save Changes
            </Button>
        </Box>
    )
}

export default UpdateUser
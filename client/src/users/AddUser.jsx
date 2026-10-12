// import { useState } from "react"
// import Axios from "axios"
// import { useNavigate } from "react-router-dom"
// import TextField from '@mui/material/TextField'

// const AddUser = () => {
//     const [name, setName] = useState("")
//     const [userName, setUserName] = useState("")
//     const [email, setEmail] = useState("")
//     const [address, setAddress] = useState("")
//     const [phone, setPhone] = useState("")
//     const navigate = useNavigate()

//     const submitForm = async (e) => {
//         e.preventDefault()
//         const { data } = await Axios.post("http://localhost:2003/api/users/", { name, userName, email, address, phone })
//         navigate("/users")

//     }
//     return <>
//         <form onSubmit={submitForm}>
//             <input type="text" defaultValue={name} placeholder="Please add name" required={true} onChange={(e) => { setName(e.target.value) }} />
//             <input type="text" defaultValue={userName} placeholder="Please add userName" required={true} onChange={(e) => { setUserName(e.target.value) }} />
//             <input type="text" defaultValue={email} placeholder="Please add email" required={true} onChange={(e) => { setEmail(e.target.value) }} />
//             <input type="text" defaultValue={address} placeholder="Please add address" onChange={(e) => { setAddress(e.target.value) }} />
//             <input type="text" defaultValue={phone} placeholder="Please add phone" required={true} onChange={(e) => { setPhone(e.target.value) }} />
//             <button type="submit">send</button>
//         </form>
//     </>
// }
// export default AddUser
import { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
import { Box, TextField, Button, Typography } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const AddUser = () => {
    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const navigate = useNavigate()

    const submitForm = async (e) => {
        e.preventDefault()
        const { data } = await Axios.post("http://localhost:2003/api/users/", { name, userName, email, address, phone })
        navigate("/users")
    }
    
    return (
        <Box 
            component="form" 
            onSubmit={submitForm} 
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 450, mt: 2, p: 2 }}
        >
            <Typography variant="h5" component="h2" sx={{ mb: 1, fontWeight: 500 }}>Add New User</Typography>
            <TextField 
                label="Name" 
                variant="outlined" 
                required 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                fullWidth 
            />
            <TextField 
                label="Username" 
                variant="outlined" 
                required 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)} 
                fullWidth 
            />
            <TextField 
                label="Email" 
                type="email"
                variant="outlined" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                fullWidth 
            />
            <TextField 
                label="Address" 
                variant="outlined" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
                fullWidth 
            />
            <TextField 
                label="Phone" 
                variant="outlined" 
                required 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                fullWidth 
            />
            <Button type="submit" variant="contained" color="primary" startIcon={<PersonAddIcon />}>
                Send
            </Button>
        </Box>
    )
}
export default AddUser
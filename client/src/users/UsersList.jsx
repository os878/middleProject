// import { useEffect, useState } from "react"
// import Axios from "axios"
// import { Link } from "react-router-dom"
// import UserItem from "./UserItem"


// const UsersList = () => {
//     const [users, setUsers] = useState([])
//     const [sort, setSort] = useState("")

//     const fetchUsers = async () => {
//         const { data } = await Axios.get("http://localhost:2003/api/users/")
//         setUsers(data)
//     }
//     useEffect(() => {
//         fetchUsers()
//     }, [])
//     const a = users.filter((user) => {
//         return user.name.includes(sort)
//     })
//     if (users.length === 0) return <h1>Loading...</h1>
//     return <>       
//         <div className="container">
//             <input onChange={(e) => setSort(e.target.value)}></input>
//             {a.map((user, index) => {
//                 return <UserItem user={user} fetchUsers={fetchUsers} />
//             })}
//         </div>
//     </>
// }
// export default UsersList
import { useEffect, useState } from "react"
import Axios from "axios"
import UserItem from "./UserItem"
import { Box, TextField, CircularProgress, Typography, List, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const UsersList = () => {
    const [users, setUsers] = useState([])
    const [sort, setSort] = useState("")

    const fetchUsers = async () => {
        const { data } = await Axios.get("http://localhost:2003/api/users/")
        setUsers(data)
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    
    const a = users.filter((user) => {
        return user.name.includes(sort)
    })
    
    if (users.length === 0) {
        return (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 4, justifyContent: 'center', width: '100%' }}>
                <CircularProgress />
                <Typography variant="h6">Loading...</Typography>
            </Box>
        )
    }
    
    return (
        <Box sx={{ padding: 3, width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
            <TextField 
                label="Search users" 
                variant="outlined" 
                size="small"
                onChange={(e) => setSort(e.target.value)} 
                sx={{ mb: 4, width: '100%', maxWidth: 600 }}
                InputProps={{
                    startAdornment: <SearchIcon sx={{ color: 'action.active', mr: 1 }} />,
                }}
            />
            
            <Paper elevation={2} sx={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
                <List disablePadding>
                    {a.map((user, index) => (
                        <UserItem key={user._id || index} user={user} fetchUsers={fetchUsers} />
                    ))}
                </List>
            </Paper>
        </Box>
    )
}
export default UsersList
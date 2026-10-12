// import { NavLink } from "react-router-dom"
// import './Navigate.css'
// import MenuList from '@mui/material/MenuList'
// import MenuItem from '@mui/material/MenuItem'
// import Paper from '@mui/material/Paper'
// import ListItemIcon from '@mui/material/ListItemIcon'
// import Typography from '@mui/material/Typography'
// import CameraIcon from '@mui/icons-material/Camera'
// import Icon from '@mui/material/Icon'

// const Navigate = () => {
//     return <>
//         <nav className="sidebar-navigation">
//             <NavLink to="/tasks">Todos</NavLink>
//             <NavLink to="/article">Posts</NavLink>
//             <NavLink to="/users">Users</NavLink>
//             <NavLink to="/albums">Albums</NavLink>
//             <NavLink to="/tasks/add">Add new task</NavLink>
//             <NavLink to="/article/add">Add new article</NavLink>
//             <NavLink to="/users/add">Add new user</NavLink>
//             <NavLink to="/albums/add">Add new album</NavLink>
//         </nav>


//     </>
// }
// export default Navigate
import { NavLink } from "react-router-dom"
import { List, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material'
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck'
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import PeopleIcon from '@mui/icons-material/People'
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum'
import ArticleIcon from '@mui/icons-material/Article';
const Navigate = () => {
    return (
        <List component="nav" sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            
            {/* קישורים ראשיים */}
            <ListItemButton 
                component={NavLink} 
                to="/tasks"
                sx={{ borderRadius: 1, '&.active': { bgcolor: 'primary.light', color: 'primary.contrastText', '& .MuiSvgIcon-root': { color: 'inherit' } } }}
            >
                <ListItemIcon sx={{ minWidth: 40 }}><PlaylistAddCheckIcon color="primary" /></ListItemIcon>
                <ListItemText primary="Todos" primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }} />
            </ListItemButton>

            <ListItemButton 
                component={NavLink} 
                to="/article"
                sx={{ borderRadius: 1, '&.active': { bgcolor: 'primary.light', color: 'primary.contrastText', '& .MuiSvgIcon-root': { color: 'inherit' } } }}
            >
                <ListItemIcon sx={{ minWidth: 40 }}><ArticleIcon color="primary" /></ListItemIcon>
                <ListItemText primary="Posts" primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }} />
            </ListItemButton>

            <ListItemButton 
                component={NavLink} 
                to="/users"
                sx={{ borderRadius: 1, '&.active': { bgcolor: 'primary.light', color: 'primary.contrastText', '& .MuiSvgIcon-root': { color: 'inherit' } } }}
            >
                <ListItemIcon sx={{ minWidth: 40 }}><PeopleIcon color="primary" /></ListItemIcon>
                <ListItemText primary="Users" primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }} />
            </ListItemButton>

            <ListItemButton 
                component={NavLink} 
                to="/albums"
                sx={{ borderRadius: 1, '&.active': { bgcolor: 'primary.light', color: 'primary.contrastText', '& .MuiSvgIcon-root': { color: 'inherit' } } }}
            >
                <ListItemIcon sx={{ minWidth: 40 }}><PhotoAlbumIcon color="primary" /></ListItemIcon>
                <ListItemText primary="Albums" primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }} />
            </ListItemButton>

            <Divider sx={{ my: 1 }} />

            {/* קישורי הוספה עם אייקון פלוס */}
            <ListItemButton 
                component={NavLink} 
                to="/tasks/add"
                sx={{ borderRadius: 1, '&.active': { bgcolor: 'success.light', color: 'success.contrastText', '& .MuiSvgIcon-root': { color: 'inherit' } } }}
            >
                <ListItemIcon sx={{ minWidth: 40 }}><AddCircleOutlineIcon color="success" /></ListItemIcon>
                <ListItemText primary="Add new task" primaryTypographyProps={{ variant: 'body2' }} />
            </ListItemButton>

            <ListItemButton 
                component={NavLink} 
                to="/article/add"
                sx={{ borderRadius: 1, '&.active': { bgcolor: 'success.light', color: 'success.contrastText', '& .MuiSvgIcon-root': { color: 'inherit' } } }}
            >
                <ListItemIcon sx={{ minWidth: 40 }}><AddCircleOutlineIcon color="success" /></ListItemIcon>
                <ListItemText primary="Add new article" primaryTypographyProps={{ variant: 'body2' }} />
            </ListItemButton>

            <ListItemButton 
                component={NavLink} 
                to="/users/add"
                sx={{ borderRadius: 1, '&.active': { bgcolor: 'success.light', color: 'success.contrastText', '& .MuiSvgIcon-root': { color: 'inherit' } } }}
            >
                <ListItemIcon sx={{ minWidth: 40 }}><AddCircleOutlineIcon color="success" /></ListItemIcon>
                <ListItemText primary="Add new user" primaryTypographyProps={{ variant: 'body2' }} />
            </ListItemButton>

            <ListItemButton 
                component={NavLink} 
                to="/albums/add"
                sx={{ borderRadius: 1, '&.active': { bgcolor: 'success.light', color: 'success.contrastText', '& .MuiSvgIcon-root': { color: 'inherit' } } }}
            >
                <ListItemIcon sx={{ minWidth: 40 }}><AddCircleOutlineIcon color="success" /></ListItemIcon>
                <ListItemText primary="Add new album" primaryTypographyProps={{ variant: 'body2' }} />
            </ListItemButton>

        </List>
    )
}
export default Navigate
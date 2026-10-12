// import { useEffect, useState } from "react"
// import Axios from "axios"
// import { Link } from "react-router-dom"
// import AlbumItem from "./AlbumItem"
// const PhotosList = () => {
//     const [photos, setPhotos] = useState([])
//     const [sort, setSort] = useState("")
//     const fetchPhotos = async () => {
//         const { data } = await Axios.get("http://localhost:2003/api/photo/")
//         setPhotos(data)
//     }
//     useEffect(() => {
//         fetchPhotos()

//     }, [])
//     const a = photos.filter((photo) => {
//         return photo.imageURL.includes(sort)
//     })
//     if (photos.length === 0) return <h1>Loading...</h1>
//     return <>
//         <input onChange={(e) => setSort(e.target.value)}></input>
//         {a.map((photo, index) => {
//             return <AlbumItem photo={photo} fetchPhotos={fetchPhotos} />
//         })}
//     </>
// }
// export default PhotosList
import { useEffect, useState } from "react"
import Axios from "axios"
import AlbumItem from "./AlbumItem"
import { Box, TextField, CircularProgress, Typography, Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const PhotosList = () => {
    const [photos, setPhotos] = useState([])
    const [sort, setSort] = useState("")

    const fetchPhotos = async () => {
        const { data } = await Axios.get("http://localhost:2003/api/photo/")
        setPhotos(data)
    }

    useEffect(() => {
        fetchPhotos()
    }, [])

    const a = photos.filter((photo) => {
        return photo.title.includes(sort)
    })

    if (photos.length === 0) {
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
                label="Search by image URL" 
                variant="outlined" 
                size="small"
                onChange={(e) => setSort(e.target.value)} 
                sx={{ mb: 4, maxWidth: 400, width: '100%' }}
                InputProps={{
                    startAdornment: <SearchIcon sx={{ color: 'action.active', mr: 1 }} />,
                }}
            />
            
            {/* גריד המנצל 100% מהרוחב הזמין ומסדר את הכרטיסיות בצורה שווה */}
            <Grid container spacing={3} sx={{ width: '100%', margin: 0 }}>
                {a.map((photo, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={photo._id || index} sx={{ display: 'flex' }}>
                        <Box sx={{ width: '100%' }}>
                            <AlbumItem photo={photo} fetchPhotos={fetchPhotos} />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
export default PhotosList
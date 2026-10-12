// import React from 'react'
// import { useState } from "react"
// import Axios from "axios"

// const UpdateArticle = ({ article }) => {
//     const [body, setBody] = useState(article.body)
    
//     const submitForm = async (e) => {
//         e.preventDefault()
//         const { data } = await Axios.put("http://localhost:2003/api/article/", { id: article._id, title: article.title, body: body })
//         setBody("")
//         // navigate("/tasks")
//     }
//     return (
//         <form onSubmit={submitForm}>
//             <h1>{article.title}</h1>
//             <input type="text" defaultValue={body} placeholder="Please add name" required={true} onChange={(e) => { setBody(e.target.value) }} />
//             <button type="submit">send</button>
//         </form>)
// }

// export default UpdateArticle
import React from 'react'
import { useState } from "react"
import Axios from "axios"
import { Box, TextField, Button, Typography } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'

const UpdateArticle = ({ article, fetchArticles, setOpenEdit }) => {
    const [body, setBody] = useState(article.body)
    
    const submitForm = async (e) => {
        e.preventDefault()
        const { data } = await Axios.put("http://localhost:2003/api/article/", { id: article._id, title: article.title, body: body })
        setBody("")
        if (fetchArticles) fetchArticles()
        if (setOpenEdit) setOpenEdit(false) // סגירת חלונית הדיאלוג לאחר השמירה
    }

    return (
        <Box 
            component="form" 
            onSubmit={submitForm} 
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}
        >
            <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                Title: {article.title}
            </Typography>
            <TextField 
                label="Please add content" 
                variant="outlined" 
                size="small" 
                required 
                multiline
                rows={3}
                defaultValue={body} 
                onChange={(e) => setBody(e.target.value)} 
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

export default UpdateArticle
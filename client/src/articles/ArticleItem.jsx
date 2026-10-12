// import Axios from "axios"
// import { useNavigate } from "react-router-dom"
// import ArticlesList from "./ArticlesList"
// import { useState } from "react"
// import Box from '@mui/material/Box'
// import TextField from '@mui/material/TextField'
// import UpdateArticle from "./UpdateArticle"

// const ArticleItem = ({ article,fetchArticles}) => {
//     const navigate = useNavigate()
//     const [showUpdate,setShowUpdate]=useState(false)

//     const deleted = async (e) => {
//         e.preventDefault()
//         const { data } = await Axios.delete(`http://localhost:2003/api/article/${article._id}`)
//         fetchArticles()
     
//     }
//     return <>
//         <div className="container">
//             <h2>{article.title}</h2>
//             <h5>{article.body}</h5>
//             <button onClick={deleted}>Delete</button>
//             <button onClick={()=>setShowUpdate(true)}>Edit</button>
//             {showUpdate && <UpdateArticle article={article}/>}
//         </div>
//     </>
// }
// export default ArticleItem
import Axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import UpdateArticle from "./UpdateArticle"
import { Card, CardContent, Typography, Button, Box, Dialog, DialogTitle, DialogContent } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const ArticleItem = ({ article, fetchArticles }) => {
    const navigate = useNavigate()
    const [openEdit, setOpenEdit] = useState(false)

    const deleted = async (e) => {
        e.preventDefault()
        const { data } = await Axios.delete(`http://localhost:2003/api/article/${article._id}`)
        fetchArticles()
    }

    return (
        <>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: 3 }}>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', mb: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {article.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1, minHeight: '60px' }}>
                        {article.body}
                    </Typography>
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

            {/* דיאלוג מודאלי לעריכת המאמר */}
            <Dialog open={openEdit} onClose={() => setOpenEdit(false)} fullWidth maxWidth="xs">
                <DialogTitle sx={{ pb: 1 }}>Edit Article</DialogTitle>
                <DialogContent>
                    <UpdateArticle article={article} fetchArticles={fetchArticles} setOpenEdit={setOpenEdit} />
                </DialogContent>
            </Dialog>
        </>
    )
}
export default ArticleItem
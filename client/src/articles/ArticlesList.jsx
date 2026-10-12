// import { useEffect, useState } from "react"
// import Axios from "axios"
// import { Link } from "react-router-dom"
// import ArticleItem from "./ArticleItem"
// import './ArticlesList.css'

// const ArticlesList = () => {
//     const [articles, setArticles] = useState([])
//     const [sort, setSort] = useState("")

//     const fetchArticles = async () => {
//         const { data } = await Axios.get("http://localhost:2003/api/article/")
//         setArticles(data)
//     }
//     useEffect(() => {
//         fetchArticles()
//     }, [])
//     const a = articles.filter((article) => {
//         return article.title.includes(sort)
//     })
//     if (articles.length === 0) return <h1>Loading...</h1>
//     return <>       
//         <div className="container">
//             <input onChange={(e) => setSort(e.target.value)}></input>
//             {a.map((article, index) => {
//                 return <ArticleItem article={article} fetchArticles={fetchArticles} />
//             })}
//         </div>
//     </>
// }
// export default ArticlesList
import { useEffect, useState } from "react"
import Axios from "axios"
import ArticleItem from "./ArticleItem"
import { Box, TextField, CircularProgress, Typography, Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const ArticlesList = () => {
    const [articles, setArticles] = useState([])
    const [sort, setSort] = useState("")

    const fetchArticles = async () => {
        const { data } = await Axios.get("http://localhost:2003/api/article/")
        setArticles(data)
    }
    
    useEffect(() => {
        fetchArticles()
    }, [])

    const a = articles.filter((article) => {
        return article.title.includes(sort)
    })

    if (articles.length === 0) {
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
                label="Search by title" 
                variant="outlined" 
                size="small"
                onChange={(e) => setSort(e.target.value)} 
                sx={{ mb: 4, maxWidth: 400, width: '100%' }}
                InputProps={{
                    startAdornment: <SearchIcon sx={{ color: 'action.active', mr: 1 }} />,
                }}
            />
            
            <Grid container spacing={3} sx={{ width: '100%', margin: 0 }}>
                {a.map((article, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={article._id || index} sx={{ display: 'flex' }}>
                        <Box sx={{ width: '100%' }}>
                            <ArticleItem article={article} fetchArticles={fetchArticles} />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
export default ArticlesList
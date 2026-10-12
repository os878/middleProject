const Article=require("../models/Article")

const getAllArticles=async(req,res)=>{

    const articles=await Article.find().lean()
    res.json(articles)
}

const getArticleById=async(req,res)=>{
    const{id}=req.params
    const article=await Article.findById(id).lean()
    if(!article)
        return res.status(404).json("No article founs")
    res.json(article)

}

const createArticle=async(req,res)=>{
    const {title,body}=req.body
    if(!title ||!body)
        return res.status(400).send("title and body are required")
    const article=await Article.create({title,body})
    if(!article)
        return res.json(404).json("Error while adding new article")
    res.json(article)

}

const updateArticle=async(req,res)=>{
    const{id,title, body}=req.body
    if(!id||!title||!body)
        return res.status(400).send("id and title and body are required")
    const article=await Article.findById(id).exec()
    article.title=title
    article.body=body
    const newArticle=await article.save()
    res.json(`update task ${id} success`)

}
const deleteArticle=async(req,res)=>{
    const{id}=req.params
    if(!id)
        return res.status(400).send("id is required")
    const article=await Article.findById(id).exec()
    const deleted= await article.deleteOne()
    res.json(`Deleted article with id ${deleted._id}`)
}

module.exports={getAllArticles,getArticleById,createArticle,updateArticle,deleteArticle}
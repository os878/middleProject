const Task=require("../models/Tasks")

const getAllTasks=async(req,res)=>{

    const tasks=await Task.find().lean()
    res.json(tasks)
}

const getTaskById=async(req,res)=>{
    const{id}=req.params
    const task=await Task.findById(id).lean()
    if(!task)
        return res.status(404).json("No task founs")
    res.json(task)

}

const createTask=async(req,res)=>{
    const {name,tags}=req.body
    if(!name || !tags)
        return res.status(400).send("name and tags are required")
    const newTags=tags.split(",")
    const task=await Task.create({name:name,tags:newTags})
    if(!task)
        return res.json(404).json("Error while adding new task")
    res.json(task)

}

const updateTask=async(req,res)=>{
    const{id,name,tags, complete}=req.body
    if(!id||!name||!tags)
        return res.status(400).send("id, name and tags are required")
    const task=await Task.findById(id).exec()
const newTags = typeof tags === 'string' ? tags.split(",") : tags
    task.name=name
    task.tags = newTags
    task.complete=complete
    const newTask=await task.save()
    res.json(`update task ${id} success`)

}
const deleteTask=async(req,res)=>{
    const{id}=req.params
    if(!id)
        return res.status(400).send("id is required")
    const task=await Task.findById(id).exec()
    const deleted= await task.deleteOne()
    res.json(`Deleted task with id ${deleted._id}`)
}

module.exports={getAllTasks,getTaskById,createTask,updateTask,deleteTask}
const Photo=require("../models/Photos")

const getAllPhotos=async(req,res)=>{

    const photos=await Photo.find().lean()
    res.json(photos)
}

const getPhotoById=async(req,res)=>{
    const{id}=req.params
    const photo=await Photo.findById(id).lean()
    if(!photo)
        return res.status(404).json("No photo founs")
    res.json(photo)

}

const createPhoto=async(req,res)=>{
    const {title,imageURL}=req.body
    if(!title||!imageURL)
        return res.status(400).send("title and imageURL are required")
    const photo=await Photo.create({title,imageURL})
    if(!photo)
        return res.json(404).json("Error while adding new photo")
    res.json(photo)

}

const updatePhoto=async(req,res)=>{
    const{id,title,imageURL}=req.body
    if(!id||!title||!imageURL)
        return res.status(400).send("id, title and imageURL are required")
    const photo=await Photo.findById(id).exec()
    photo.title=title
    photo.imageURL=imageURL
    const newPhoto=await photo.save()
    res.json(`update photo ${id} success`)

}
const deletePhoto=async(req,res)=>{
    const{id}=req.params
    if(!id)
        return res.status(400).send("id is required")
    const photo=await Photo.findById(id).exec()
    const deleted= await photo.deleteOne()
    res.json(`Deleted photo with id ${deleted._id}`)
}

module.exports={getAllPhotos,getPhotoById,createPhoto,updatePhoto,deletePhoto}
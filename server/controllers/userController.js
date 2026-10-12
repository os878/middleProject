const Users=require("../models/Users")

const getAllUsers=async(req,res)=>{

    const users=await Users.find().lean()
    res.json(users)
}

const getUserById=async(req,res)=>{
    const{id}=req.params
    const user=await Users.findById(id).lean()
    if(!user)
        return res.status(404).json("No user founs")
    res.json(user)

}

const createUser=async(req,res)=>{
    const {name,userName,email,address,phone}=req.body
    if(!name ||!userName||!email||!phone)
        return res.status(400).send("name, userName, email, phone are required")
    const user=await Users.create({name,userName,email,address,phone})
    if(!user)
        return res.json(404).json("Error while adding new user")
    res.json(user)

}

const updateUser=async(req,res)=>{
    const{id,name,userName,email,address,phone}=req.body
    if(!id||!name ||!userName||!email||!phone)
        return res.status(400).send("id, name, userName, email, phone are required")
    const user=await Users.findById(id).exec()
    user.name=name
    user.userName=userName
    user.email=email
    user.address=address
    user.phone=phone
    const newUser=await user.save()
    res.json(`update user ${id} success`)

}
const deleteUser=async(req,res)=>{
    const{id}=req.params
    if(!id)
        return res.status(400).send("id is required")
    const user=await Users.findById(id).exec()
    const deleted= await user.deleteOne()
    res.json(`Deleted user with id ${deleted._id}`)
}

module.exports={getAllUsers,getUserById,createUser,updateUser,deleteUser}
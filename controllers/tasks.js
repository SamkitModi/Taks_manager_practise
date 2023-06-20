const Task = require('../models/task')

const getAllTasks = async (req,res) =>{
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg:'There is an error fetching tasks.'})
    }
}

const createTasks = async (req,res) =>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})    
    } catch (error) {
        res.status(500).json({msg:'There is an error creating task.'})
    }
}

const getTask = async (req, res) =>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID});
        if(!task){
            return res.status(404).json({msg:`There was no task with id: ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:'There is an error fetching task.'})
    }
}


const deleteTask = async (req, res) =>{
    try {       
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`There was no task with id: ${taskID}`})
        }
        res.status(200).send()
        // res.status(200).json({task}) this shows task in postman.
    } catch (error) {
        res.status(500).json({msg:'There is an error deleting task.'})
    }
}

const updateTask = async (req, res) =>{
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
            new:true, 
            runValidators:true,
        })
        if(!task){
            return res.status(404).json({msg:`There was no task with id: ${taskID}`})
        }

        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:'There is an error updating task.'})
    }
}


module.exports = {
    getAllTasks, createTasks, getTask, updateTask, deleteTask
}
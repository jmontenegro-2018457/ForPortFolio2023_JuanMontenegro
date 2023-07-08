'use strict'

const Event = require('./event.model');

exports.create = async(req, res)=>{
    try {
        let data = req,body;
        let event = new Event(data);
        await event.save();
        return res.send({message: 'Event created successfully'})
    } catch (err) {
        return res.status(500).send({message:'Error creating event'})
    }
}

exports.get = async(req,res)=>{
    try {
        let events = await Event.find()
        if(!events) return res.status(404).send({message:'There are not any events'})
        return res.send({events});
    } catch (err) {
        return res.status(500).send({message:'Error getting events'})
    }
}

exports.update = async(req,res)=>{
    try {
        let eventId = req.params.id;
        let data = req.body;
        let event = await Event.findOne({_id: eventId});
        if(!event) return res.status(404).send({message: 'Event not found and not updated'})
        let updatedEvent = await Event.FindOneAndUpdate(
            {_id: eventId},
            data,
            {new:true})
    } catch (err) {
        return res.status(500).send({message:'Error updating event'})
    }
}

exports.delete = async(req,res)=>{
    try {
        let eventId = req.params.id;
        let eventDeleted = await Event.deleteOne({_id:eventId})
        if(eventDeleted.deletedCount === 0) return res.status(404).send({message: 'Event not found and not deleted'})
        return res.send({message: 'Event deleted successfully'})
    } catch (err) {
        return res.status(500).send({message: 'Error deleting event'})
    }
}
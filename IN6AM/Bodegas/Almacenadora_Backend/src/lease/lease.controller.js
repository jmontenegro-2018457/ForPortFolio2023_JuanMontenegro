'use strict'

const Lease = require('./lease.model');
const User = require('../user/user.model');
const Cellars = require('../cellars/cellars.model')
const infoUser = ['name', 'surname'];
const infoCellar = ['name', 'description', 'availability', 'price']; 

exports.test = (req, res)=>{
    return res.send({message: 'test function is running'});
}

exports.saveLease = async(req, res)=>{
    try{
        let data = req.body;
        let lease = new Lease(data);
        await Cellars.findOneAndUpdate(
            { _id: data.cellar },
            { availability: "no" }
        );
        await lease.save();
        return res.send({message: 'Lease created successfully'});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error creating lease'});
    }
}


exports.getLeaseByUser = async(req, res)=>{
    try{
        let leaseId = req.params.id;
        let lease = await Lease.findOne({_id: leaseId});
        if(!lease) return res.status(404).send({message: 'lease not found'});
        return res.send({message: 'lease found:', lease});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error getting your Leases'});
    }
}

exports.getLeases = async(req, res)=>{
    try{
        let leases = await Lease.find();
        return res.send({leases});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error getting leases'});
    }
}

  exports.updateLease = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description,total, user, cellar } = req.body;
  
      const currentLease = await Lease.findOne({ _id: id }).populate('cellar');
  
      if (!currentLease) {
        return res.status(404).send({ message: 'Lease not found' });
      }
  
      if (currentLease.cellar._id.toString() !== cellar) {
        await Cellars.findOneAndUpdate(
          { _id: currentLease.cellar._id },
          { availability: 'si' }
        );
      }
      const updatedLease = await Lease.findOneAndUpdate(
        { _id: id },
        { name, description, user, cellar },
        { new: true }
      )

        .populate('user')
        .populate('cellar');
  
      if (!updatedLease) {
        return res.status(404).send({ message: 'Lease not found, not updated' });
      }
  
      await Cellars.findOneAndUpdate(
        { _id: cellar },
        { availability: 'no' }
      );
  
      return res.send({ message: 'Lease updated successfully', updatedLease });
    } catch (err) {
      console.error(err);
      return res.status(500).send({ message: 'Error updating lease' });
    }
  }

exports.deleteLease = async(req, res)=>{
    try{
        let idLease = req.params.id;
        let deletedLease = await Lease.findOneAndDelete({_id: idLease});
        const cellar = await Cellars.findOne({_id: deletedLease.cellar});
        await Cellars.findOneAndUpdate({_id: deletedLease.cellar}, {availability: 'si'});
        return res.send({message: 'Lease deleted successfully'})
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error removing lease'});
    }
}
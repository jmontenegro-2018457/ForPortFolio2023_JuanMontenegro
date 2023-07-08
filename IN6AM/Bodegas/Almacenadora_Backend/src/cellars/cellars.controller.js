const Cellars = require('./cellars.model');
const Benefit = require('../benefit/benefit.model');
const fs = require('fs')
const path = require('path')
const { validateData } = require('../utils/validate');

exports.test = (req, res)=>{
    return res.send({message: 'test function is running'});
}

exports.addCellars = async(req, res)=>{
    try{
        //Obtener datos del usuario (Body)
        let data = req.body;
        //¿Hay una validación?
        //Validar que llegue la categoría
        //Validar que exista el servicio!!!
        let newCellar = new Cellars(data);
        await newCellar.save();
        return res.status(201).send({message: 'Cellar saved sucessfully'});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error creating Cellar'});
    }
}


exports.get = async(req, res)=>{
    try {
        let cellars = await Cellars.find()
        return res.send({cellars});
    } catch (err) {
        return res.status(500).send({message:'Error getting Cellers'})        
    }
}


exports.updateCellar = async(req, res)=>{
    try {
        let cellarId = req.params.id;
        let data = req.body;
        let updatedCellar = await Cellars.findOneAndUpdate(
            {_id: cellarId},
            data,
            {new: true}
        )
        if(!updatedCellar) return res.status(404).send({message: 'Cellar not found and not updated'});
        return res.send({message: 'Cellar updated:', updatedCellar});
    } catch (err) {
        console.log(err);
        return res.status(500).send({message: 'Error updating Cellar'})
    }
}



exports.deleteCellar = async(req, res)=>{
    try {
        let idCellar = req.params.id;
        let deletedCellar = await Cellars.findOneAndDelete({_id: idCellar});
        if(!deletedCellar) return res.status(404).send({message: 'Cellar not found or already deleted'});
        return res.send({message: 'Cellar deleted sucessfully'})
    } catch (err) {
        console.log(err);
        return res.status(500).send({message: 'Error deleting Cellar'})
    }
}

exports.uploadImage = async(req, res)=>{
    try{
        const cellarId = req.params.id;
        const alreadyImage = await Cellars.findOne({_id: cellarId})
        let pathFile = './uploads/cellars/'
        if(!req.files.image || !req.files.image.type) return res.status(400).send({message: 'Havent sent image'})
        if(alreadyImage.image) fs.unlinkSync(`${pathFile}${alreadyImage.image}`)
        const filePath = req.files.image.path;
        const fileSplit = filePath.split('\\')
        const fileName = fileSplit[2]
        const extension = fileName.split('\.')
        const fileExt = extension[1]
        if(
            fileExt == 'png' ||
            fileExt == 'jpg' ||
            fileExt == 'jpeg' ||
            fileExt == 'gif'
        ){
            const updatedCellar = await Cellars.findOneAndUpdate(
                {_id: cellarId},
                {image: fileName},
                {new: true}
            )
            if(!updatedCellar) return res.status(404).send({message: 'Cellar not found, not updated'})
            return res.send({message: 'Uploaded image', updatedCellar})
        }
        fs.unlinkSync(filePath)
        return res.status(400).send({message: 'Invalid extension'})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error uploading image'})
    }
}

exports.getImage = async(req, res)=>{
    try{
        const fileName = req.params.fileName;
        const filePath = `./uploads/cellars/${fileName}`
        const image = fs.existsSync(filePath)
        if(!image) return res.status(404).send({message: 'Image not found'})
        return res.sendFile(path.resolve(filePath));
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error getting image'})
    }
}




exports.search = async(req, res)=>{
    try{
        let data = req.body;
        let params = {
            name: data.name 
        }
        let validate = validateData(params);
        if(validate) return res.status(400).send(validate);
        let cellars = await Cellars.find({
            name: {
                $regex: params.name, 
                $options: 'i'
            }
        })
        return res.send({cellars});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error searching...'});
    }
}

exports.availability = async(req, res)=>{
    try{
        let data = req.body;
        let status = data.status;
        if(!status) {
            return res.status(400).send({message: 'Debe proporcionar un estado'});
        }
        status = status.toLowerCase();
        let cellars = await Cellars.find({
            availability: { $eq: status }
        })
        return res.send({cellars});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error searching...'});
    }
}

exports.getCellar = async(req, res)=>{
    try{

        let cellarId = req.params.id;
        //Buscar en la BD
        let cellar = await Cellars.findOne({_id: cellarId})

        if(!cellar) return res.status(404).send({message: 'Cellar not found'});
        //Si existe lo devuelvo
        return res.send({mesasge: 'Cellar found:', cellar});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error getting cellar'});
    }
} 
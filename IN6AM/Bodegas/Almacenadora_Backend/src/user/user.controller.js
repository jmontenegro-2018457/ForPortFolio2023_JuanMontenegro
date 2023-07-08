'use strict'

const User = require('./user.model');
//Desestructuración
const { validateData, encrypt, checkPassword, checkUpdate } = require('../utils/validate');
const { createToken } = require('../services/jwt');
const e = require('express');
const Lease = require('../lease/lease.model');


exports.test = (req, res)=>{
    res.send({message: 'Test function is running', user: req.user});
}

exports.register = async(req, res)=>{
    try{
        //capturar el formulario de registro (Body)
        let data = req.body;
        //Encriptar la contraseña
        data.password = await encrypt(data.password);
        //Me venga el dato que me vanga en el role, siempre asignar role Client
        data.role = 'client';
        //Guardar la información
        let sameUser = await User.findOne({username: data.username})
        if(sameUser) return res.send({message: 'This username is in use'});
        let user = new User(data);
        await user.save();
        return res.send({message: 'Account created sucessfully'});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error creating account', error: err.message});
    }
}

exports.save = async(req, res)=>{
    try{
        //Capturar la data
        let data = req.body;
        let params = {
            password: data.password
        }
        let validate = validateData(params);
        if(validate) return res.status(400).send(validate)
        //encriptar la password
        data.password = await encrypt(data.password);
        //Guardar la info
        
        let user = new User(data);
        await user.save();
        return res.send({message: 'Accound created sucessfully'});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error saving user', error: err.message});
    }
}

exports.login = async(req, res)=>{
    try{
        //obtener la data a validar (username y password)
        let data = req.body;
        let credentials = {
            username: data.username,
            password: data.password
        }
        let msg = validateData(credentials);
        if(msg) return res.status(400).send({message: msg})
        //Validar que exista el usuario en la BD
        let user = await User.findOne({username: data.username});
        //Validar que la contraseña coincida
        if(user && await checkPassword(data.password, user.password)) {
            let token = await createToken(user)
            let userLogged = {
                name: user.name,
                username: user.username,
                role: user.role
            }
            return res.send({message: 'User logged successfully', token, userLogged});
        }
        //Mensaje de bienvenida
        return res.status(404).send({message: 'Invalid credentials'});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error not logged'});
    }
}

exports.update = async(req, res)=>{
    try{
        //Obtener el Id del usuario a actualizar;
        let userId = req.params.id;
        //Obtener los datos a actualizar
        let data = req.body;
        //Validar si tiene permisos
        if(req.user.role == 'CLIENT'){
            if(userId != req.user.sub) return res.status(401).send({message: 'Dont have permission to do this action'});
        }
        //Validar que le llegue data a actualizar
        
        let userUpdated = await User.findOneAndUpdate(
            {_id: userId},
            data,
            {new: true} 
        )
        if(!userUpdated) return res.status(404).send({message: 'User not found adn not updated'});
        return res.send({message: 'User updated', userUpdated})
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error not updated', err: `Username ${err.keyValue.username} is already taken`});
    }
}

exports.get = async(req, res)=>{
    try {
        let users = await User.find()
        return res.send({users});
    } catch (err) {
        return res.status(500).send({message:'Error getting Users'})        
    }
}

exports.getUser = async(req, res)=>{
    try{

        let userId = req.params.id;
        //Buscar en la BD
        if(!userId) return res.send ({mesasge: 'loading id'})
        let user = await User.findOne({_id: userId})
        
        if(!user) return res.status(404).send({message: 'User not found'});
        //Si existe lo devuelvo
        return res.send({mesasge: 'User found:', user});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error getting user'});
    }
}

exports.delete = async(req, res)=>{
    try{
        //Obtener el id a eliminar
        let userId = req.params.id;
        //Validar si tiene permisos

        let lease = await Lease.findOne({user: userId})
        if(lease) return res.send({message: 'You cannot delete an user whit a lease'})
        if(req.user.role == 'CLIENT'){
            if( userId != req.user.sub) return res.status(401).send({message: 'Dont have permission to do this action'});
        }
            //Eliminar
        let userDeleted = await User.findOneAndDelete({_id: userId});
        if(!userDeleted) return res.send({message: 'Account not found and not deleted'});
        return res.send({message: `Account with username ${userDeleted.username} deleted sucessfully`});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error not deleted'});
    }
}


exports.defaultAdmin = async()=>{
    try{
        let defAdmin = {
            name: 'Ian',
            surname: 'Monterroso',
            username: 'Imonterroso',
            password: '123',
            email: 'scrumsaurio@kinal.edu.gt',
            phone: '46457897',
            role: 'ADMIN'
        }
        let existAdmin = await User.findOne({name: 'Ian'});
        if(existAdmin) return console.log('Default admin already created');
        let createdAdmin = new User(defAdmin);
        await createdAdmin.save();
        return console.log('Default admin created');
    }catch(err){
        return console.error(err);
    }
}
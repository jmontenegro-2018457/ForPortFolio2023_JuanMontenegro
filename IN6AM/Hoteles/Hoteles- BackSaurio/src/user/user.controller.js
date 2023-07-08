'use strict'

const User = require('./user.model');
//Desestructuración
const { validateData, encrypt, checkPassword, checkUpdate } = require('../utils/validate');
const { createToken } = require('../services/jwt');
const e = require('express');

exports.defaultUser = async()=>{
    try{
        let defUser = {
            name: 'Ian',
            surname: 'Monterroso',
            username: 'scrum',
            password: await encrypt('123'),
            email: 'imonterroso@gmail.com',
            phone: '666',
            role: 'Admin'
        }
        let existUser = await User.findOne({username: 'Default'});
        if(existUser) return console.log('Default Admin already created');
        let createdAdmin = new User(defUser);
        await createdAdmin.save();
        return console.log('Default Admin created');
    }catch(err){
        return console.error(err);
    }
}

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
        if(userId != req.user.sub) return res.status(401).send({message: 'Dont have permission to do this action'});
        //Validar que le llegue data a actualizar
        let update = checkUpdate(data, true);
        if(!update) return res.status(400).send({message: 'Have submitted some data that cannot be updated'});
        let userUpdated = await User.findOneAndUpdate(
            {_id: req.user.sub},
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

exports.delete = async(req, res)=>{
    try{
        //Obtener el id a eliminar
        let userId = req.params.id;
        //Validar si tiene permisos
        if( userId != req.user.sub) return res.status(401).send({message: 'Dont have permission to do this action'});
        //Eliminar
        let userDeleted = await User.findOneAndDelete({_id: req.user.sub});
        if(!userDeleted) return res.send({message: 'Account not found and not deleted'});
        return res.send({message: `Account with username ${userDeleted.username} deleted sucessfully`});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error not deleted'});
    }
}
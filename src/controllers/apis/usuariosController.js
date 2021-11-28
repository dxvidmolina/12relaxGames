/*
const express = require('express');
const sequelize = db.sequelize;
const fs = require('fs');
const path = require('path');
const Usuario = require('../../models/User')
let db= require("../../../database/models");


const usuariosController =
            {detail: (req, res) => {
                    db.Usuario.findByPk(req.params.id)
                    .then(usuario => {
                        res
                        .status(status)
                        .json({data: usuario, status:status})
                        })
                        .catch(error => 
                        {console.log(error)})     
            },list:(req, res) => {
                    db.Usuario.findAll({
                        include:[{association:"generos"}]})
                        .then(usuario => {
                        res
                        .json(usuario)
                        })
                        .catch(error => 
                        {console.log(error)})
                }
            }
module.exports= usuariosController;
*/
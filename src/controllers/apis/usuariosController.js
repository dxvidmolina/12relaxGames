const express = require('express');
const fs = require('fs');
const path = require('path');
const db= require("../../../database/models");


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
                    db.Usuario.findAll()
                        .then(usuario => {
                        res
                        .json(usuario)
                        })
                        .catch(error => 
                        {console.log(error)})
                }
            }
module.exports= usuariosController;

const express = require('express');
const Router = express.Router();
const postDAO = require('../dao/postDAO.js');

//get all post data
Router.get('/',async(req,res)=>{
    res.send(await postDAO.getPostData());
});



module.exports = Router;
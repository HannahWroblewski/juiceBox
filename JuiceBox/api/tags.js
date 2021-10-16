const express = require('express');
const tagsRouter = express.Router();

tagsRouter.get('/', async (req, res) => {
    try {const tags = await getAllTags();
  
    res.send({
      tags
    });} catch (err) {
      console.log(err)
    }
  });
  
  module.exports = tagsRouter;
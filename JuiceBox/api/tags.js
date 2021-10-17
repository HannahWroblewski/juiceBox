const express = require('express');
const { getAllTags, getPostsByTagName } = require('../db');
const tagsRouter = express.Router();

tagsRouter.get('/', async (req, res) => {
    try {const tags = await getAllTags();
  
    res.send({
      tags
    });} catch (err) {
      console.log(err)
    }
  });

  tagsRouter.get('/:tagName/posts', async (req, res, next) => {
    // read the tagname from the params
    const {tagName} = req.params;

    try {
      // use our method to get posts by tag name from the db
      // send out an object to the client { posts: // the posts }
      const posts = await getPostsByTagName(tagName);
      if(posts){
        res.send(posts);
      } else {
        next({ name: "ain't no tags ain't no posts", message: "bad job"})
      }

    } catch ({ name, message }) {
      // forward the name and message to the error handler
      next({ name, message });
    }
  });
  
  module.exports = tagsRouter;
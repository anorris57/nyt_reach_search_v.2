const express = require('express');
const router = express.Router();

//Article Model
const Article = require('../../models/Article');


//@route Get api/articles
//@desc Get All Items
//@access Public
router.get('/', (req, res) => {
  Article.find()
   .sort({date: -1})
   .then(articles => res.json(articles))
  
});

//@route POST api/articles
//@desc Create An Article
//@access Public
router.post('/', (req, res) => {
  const newArticle = new Article({
    title: req.body.title,
    date: req.body.date,
    url: req.body.url
   });

   newArticle.save().then(article => res.json(article));
});

//@route DELETE api/articles/:id
//@desc Delete An Article
//@access Public
router.delete('/:id', (req, res) => {
  Article.findByIdAndRemove(req.params.id)
   .then(item => item.remove().then(()=> res.json({success: true}))
   )
   .catch(err => res.status(404).json({ success: false}));
})
  



module.exports = router;
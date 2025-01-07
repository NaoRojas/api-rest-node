const express = require('express')
const router = express.Router()
const {
  getArticleById,
  getAllArticles,
  createArticle,
  updateArticle,
  deleteArticle
} = require('../controllers/Articles')

// Get all articles
router.get('/', getAllArticles)
router.post('/', createArticle)
router.put('/:id', updateArticle)
router.delete('/:id', deleteArticle)
router.get('/:id', getArticleById)
module.exports = router;
const { Schema, model } = require('mongoose');


const articleSchema = Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  body: {
    type: String,
    required: true
  },
  date:
  {
    type: Date,
    default: Date.now
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/150'
  }
})

module.exports = model('Article', articleSchema, "articles")
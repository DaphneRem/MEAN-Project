var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  subTitle: String,
  body: String,
  author: String,
  links: String,
  urlImage : String,
  postDate : { type: Date },
  editDate : { type: Date }
});

articleSchema.methods.concatanceNameAndBlog = function() {
    this.title = this.title + this.subtitle;

    return this.title;
  };

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;

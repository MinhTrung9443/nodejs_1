class NewsController {
  // [GET] /news
  index(req, res) {
    res.render("new");
  }

  // [GET] /news/:slug  -- slug is a variable in the URL
  show(req, res) {
    res.send("News detail");
  }
}

module.exports = new NewsController(); // khoi tao mot instance cua NewsController

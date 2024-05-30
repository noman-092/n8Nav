var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home || ABC' });
});
router.get("/register", function(req,res){
  res.render("register",{title: "register || page"})
});
router.post("/login", function(req,res){
  res.redirect("index")
  console.log(req.body);
});
router.get("/login", function(req,res){
  res.render("login",{title: "login || page"})
});



module.exports = router;

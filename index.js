const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("index"))
  .get("/home", (req, res) => res.render("index"))
  .get("/about", (req, res) => res.render("about"))
  .get("/video", (req, res) => res.render("video"))
  .get("/video/:uid", function testfn(req, res, next) {
    // console.log("uid" + req.params.uid);
    window.location.href = "/home" + "?uid=" + req.params.uid;
  })

  .get("/home/:uid", function testfn(req, res, next) {
    window.location.href = "/home" + "?uid=" + req.params.uid;
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

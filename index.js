const express = require("express");
const path = require("path");
var app = express();

var http = require("http");
var app = express();
var server = http.createServer(app);
var io = require("socket.io")(server);

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => res.render("index"));
app.get("/home", (req, res) => res.render("index"));
app.get("/about", (req, res) => res.render("about"));
app.get("/video", (req, res) => res.render("video"));
app.get("/video/:uid", function testfn(req, res, next) {
  // console.log("uid" + req.params.uid);
  window.location.href = "/home" + "?uid=" + req.params.uid;
});

app.get("/home/:uid", function testfn(req, res, next) {
  window.location.href = "/home" + "?uid=" + req.params.uid;
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

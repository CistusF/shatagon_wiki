import express from "express";
// import * as express-session from "express-session";

const app = express();
const config = require('./config');

app.use(express.static(__dirname + '/build'));

app.get("/login", (req, res) => {
    res.redirect("https://discord.com/api/oauth2/authorize?client_id=859326338040463400&redirect_uri=http%3A%2F%2Flocalhost&response_type=code&scope=identify");
});

app.get("*", (req, res) => {
    res.sendFile(__dirname + '/build/index.html');
});

app.listen(80, () => {
    console.log(1)
});
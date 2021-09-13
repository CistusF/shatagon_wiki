"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import * as express-session from "express-session";
var app = express_1.default();
var config = require('./config');
app.use(express_1.default.static(__dirname + '/build'));
app.get("/login", function (req, res) {
    res.redirect("https://discord.com/api/oauth2/authorize?client_id=859326338040463400&redirect_uri=http%3A%2F%2Flocalhost&response_type=code&scope=identify");
});
app.get("*", function (req, res) {
    res.sendFile(__dirname + '/build/index.html');
});
app.listen(80, function () {
    console.log(1);
});

import express from "express";
import session from "express-session";
import fetch from "node-fetch";

const app = express();
const { clientId, clientSecret, password } = require('./config');

app.use(session({
    secret: '!%#!#DAset#q9pijbteqjb35u901pjrvmkl#RJ{P!BJRMKQE>V',
    resave: false,
    saveUninitialized: true,
    cookie: { httpOnly: true }
}));
app.use(express.static(__dirname + '/build'));

declare module 'express-session' {
    interface SessionData {
        token: string;
        timeout: number;
        data: object;
        guilds: object;
    }
}

const oauthRequest = async (token: string, type: "refresh_token" | "authorization_code", req: express.Request, res: express.Response) => {
    try {
        const oauthResult = await fetch('https://discord.com/api/oauth2/token', {
            method: 'POST',
            body: new URLSearchParams({
                client_id: clientId,
                client_secret: clientSecret,
                code: token,
                refresh_token: token,
                redirect_uri: `http://localhost/callback`,
                grant_type: type,
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        const oauthData = await oauthResult.json();
        const userResult = await fetch('https://discord.com/api/users/@me', {
            headers: {
                authorization: `${oauthData.token_type} ${oauthData.access_token}`,
            },
        });

        req.session.token = oauthData.refresh_token;
        let userData = await userResult.json();
        res.cookie("UserData", JSON.stringify({
            "Userinfo": {
                "id": userData.id,
                "avatar": userData.avatar,
                "discriminator": userData.discriminator,
                "username": userData.username,
            }
        }));
    } catch (e) {
        res.clearCookie("UserData");
    }
    return;
}

app.use(async (req, res, next) => {
    if (req.url.includes(".")) return;
    if (req.session.token) {
        await oauthRequest(req.session.token, "refresh_token", req, res);
    } else if (!req.session.token) {
        res.clearCookie("UserData");
    }
    next();
});

app.get("/login", (req, res) => {
    res.redirect("https://discord.com/api/oauth2/authorize?client_id=859326338040463400&redirect_uri=http%3A%2F%2Flocalhost%2Fcallback&response_type=code&scope=identify");
});

app.get("/callback", async (req, res) => {
    let code = req.query?.code;
    if (!code || typeof code != "string") return res.redirect("/");
    try {
        console.log(code);
        await oauthRequest(code, "authorization_code", req, res);
        res.redirect("/");
    } catch (error) {
        console.error(error);
        res.redirect("/");
    }
});

app.get("*", (req, res) => {
    res.sendFile(__dirname + '/build/index.html');
});

app.listen(80);
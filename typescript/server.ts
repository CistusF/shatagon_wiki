import express from "express";
import session from "express-session";
import fetch from "node-fetch";
import { Schema, connect, connection, model, Model, SchemaDefinition } from 'mongoose';

var db = connection;

connect('mongodb://localhost:27017/shatagonWiki').catch(err => {
    throw new Error(err);
});

db.on("open", () => {
    app.listen(80, () => {
        console.log("server listening on port 80")
    });
    console.log("DB is connected");

});

db.on("error", (err) => {
    throw new Error(err);
});

const schemaList: {
    [key: string]: SchemaDefinition
} = {
    "함선": {
        "이름": { type: String, required: true, unique: true },
        "설명": { type: String, required: true },
        "함선제원": { type: String, required: true },
        "전장/전폭/전고": { type: String, required: true },
        "최소승무원": { type: String, required: true },
        "구현단계": { type: String, required: true },
        "함선분류": { type: String, required: true },
        "순항속도": { type: String, required: true },
        "출고중량": { type: String, required: true },
        "화물용량": { type: String, required: true },
        "판매위치": { type: String, required: true },
        "⍺UEC": { type: String, required: true },
        "가격": { type: String, required: true },
        "이미지링크": { type: String, required: true },
        "검색키워드": { type: String, required: true }
    },
    "무기": {
        "이름": { type: String, required: true, unique: true },
        "설명": { type: String, required: true },
        "제조사": { type: String, required: true },
        "종류": { type: String, required: true },
        "사이즈": { type: String, required: true },
        "조준경 부착물": { type: String, required: true },
        "총열 부착물": { type: String, required: true },
        "총열 하부 부착물": { type: String, required: true },
        "발 당 데미지": { type: String, required: true },
        "사격 모드": { type: String, required: true },
        "탄약 타입": { type: String, required: true },
        "연사속도": { type: String, required: true },
        "사거리": { type: String, required: true },
        "탄속": { type: String, required: true },
        "탄 수": { type: String, required: true },
        "판매위치": { type: String, required: true },
        "이미지링크": { type: String, required: true },
        "검색키워드": { type: String, required: true },
    },
    "부품": {
        "이름": { type: String, required: true, unique: true },
        "설명": { type: String, required: true },
        "제조사": { type: String, required: true },
        "종류": { type: String, required: true },
        "사이즈": { type: String, required: true },
        "등급": { type: String, required: true },
        "클래스": { type: String, required: true },
        "성능": { type: String, required: true },
        "EM": { type: String, required: true },
        "IR": { type: String, required: true },
        "판매 위치": { type: String, required: true },
        "이미지링크": { type: String, required: true },
        "검색키워드": { type: String, required: true }
    },
    "행성계": {
        "이름": { type: String, required: true, unique: true },
        "설명": { type: String, required: true },
        "소속": { type: String, required: true },
        "행성": { type: String, required: true },
        "점프 포인트": { type: String, required: true },
        "이미지링크": { type: String, required: true },
        "검색키워드": { type: String, required: true }
    },
    "세력": {
        "이름": { type: String, required: true, unique: true },
        "설명": { type: String, required: true },
        "성향": { type: String, required: true },
        "주 종족": { type: String, required: true },
        "주요 거점": { type: String, required: true },
        "이미지링크": { type: String, required: true },
        "검색키워드": { type: String, required: true }
    },
    "화물": {
        "이름": { type: String, required: true, unique: true },
        "설명": { type: String, required: true },
        "종류": { type: String, required: true },
        "부피": { type: String, required: true },
        "기본 가격": { type: String, required: true },
        "이미지링크": { type: String, required: true },
        "검색키워드": { type: String, required: true }
    },
    "장비": {
        "이름": { type: String, required: true, unique: true },
        "설명": { type: String, required: true },
        "제조사": { type: String, required: true },
        "종류": { type: String, required: true },
        "사이즈": { type: String, required: true },
        "발 당 대미지": { type: String, required: true },
        "연사속도": { type: String, required: true },
        "사거리": { type: String, required: true },
        "탄속": { type: String, required: true },
        "탄 수": { type: String, required: true },
        "판매 위치": { type: String, required: true },
        "이미지링크": { type: String, required: true },
        "검색키워드": { type: String, required: true }
    }
};
var schemas: {
    [key: string]: Schema;
} = {};

for (let i in schemaList) {
    schemas[i] = new Schema(schemaList[i], {
        timestamps: true
    });
};

const app = express();
const { clientId, clientSecret, secret, Editor } = require('./config');

app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: { httpOnly: true }
}));
app.use(express.static(__dirname + '/build'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

declare module 'express-session' {
    interface SessionData {
        token: string;
        timeout: number;
        data: {
            "id": string;
        };
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
        req.session.data = userData;
        res.cookie("UserData", JSON.stringify({
            "Userinfo": {
                "id": userData.id,
                "avatar": userData.avatar,
                "discriminator": userData.discriminator,
                "username": userData.username,
            }
        }));
    } catch (e) {
        req.session.destroy(err => {
            console.log(err)
        });
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

app.post("/callData", async (req, res) => {
    if (!req.session || !req.session.token || !req.session.data || !Editor.includes(req.session.data.id)) return res.status(404).end(null);
    let data: {
        [key: string]: any
    } = {};
    for (let i in schemas) {
        let models = model(i, schemas[i]);
        data[i] = await models.find({});
    };
    return res.status(200).end(JSON.stringify(data));
});

app.post("/submit", async (req, res) => {
    if (!req.session || !req.session.token || !req.session.data || !Editor.includes(req.session.data.id)) return res.status(404).end(null);
    if (!req.body || !req.body.type) return res.status(404).end("Invaild type");
    if (!schemaList[req.body.type]) return res.status(404).end("Invaild schema");
    let info: {
        [key: string]: string;
    } = {};
    for (let i in req.body) {
        if (!["type", "edit"].includes(i))
            info[i] = req.body[i];
    };
    let schema = model(req.body.type, schemas[req.body.type]);

    if (req.body.edit === "true") {
        await schema.update({ "이름": req.body.이름 }, info, { "multi": true }).then(() => {
            return res.status(200).redirect("/wiki")
        }).catch((err) => {
            return res.status(500).end(err);
        });
    } else {
        let handler = await schema.find({ "이름": req.body.이름 }).exec();
        if (handler[0]) return res.status(500).end("<html><head><meta charset='utf-8'></head><body>" + req.body.이름 + " is already created</body></html>");
        let data = new schema(info);
        await data.save();
        res.status(200).redirect("/wiki");
    };
});

app.get("/login", (req, res) => {
    res.redirect("https://discord.com/api/oauth2/authorize?client_id=859326338040463400&redirect_uri=http%3A%2F%2Flocalhost%2Fcallback&response_type=code&scope=identify");
});

app.get("/callback", async (req, res) => {
    let code = req.query?.code;
    if (!code || typeof code != "string") return res.redirect("/");
    try {
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
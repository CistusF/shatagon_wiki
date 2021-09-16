"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_session_1 = __importDefault(require("express-session"));
var node_fetch_1 = __importDefault(require("node-fetch"));
var moment_timezone_1 = __importDefault(require("moment-timezone"));
var mongoose_1 = require("mongoose");
var discord_js_1 = require("discord.js");
var app = express_1.default();
var _a = require('./config'), clientId = _a.clientId, clientSecret = _a.clientSecret, editor = _a.editor, secret = _a.secret, token = _a.token;
var db = mongoose_1.connection;
var schemaList = {
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
var schemas = {};
for (var i in schemaList) {
    schemas[i] = new mongoose_1.Schema(schemaList[i], {
        timestamps: true
    });
}
;
mongoose_1.connect('mongodb://localhost:27017/shatagonWiki').catch(function (err) {
    throw new Error(err);
});
db.on("open", function () {
    app.listen(80, function () { return __awaiter(void 0, void 0, void 0, function () {
        var client;
        return __generator(this, function (_a) {
            console.log("server listening on port 80");
            client = new discord_js_1.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"], partials: ["CHANNEL", "MESSAGE", "GUILD_MEMBER"] });
            client.on("ready", function () {
                console.log("Bot is Online");
            });
            client.on("messageCreate", function (message) { return __awaiter(void 0, void 0, void 0, function () {
                var args, command, data, _a, _b, _i, i, models, d, info, btn, embed, i;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (message.author.bot || !message.content.startsWith("!"))
                                return [2 /*return*/];
                            args = message.content.slice(1).trim().split(" ");
                            command = args.shift().toLowerCase();
                            if (!command)
                                return [2 /*return*/];
                            data = [];
                            _a = [];
                            for (_b in schemas)
                                _a.push(_b);
                            _i = 0;
                            _c.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            i = _a[_i];
                            models = mongoose_1.model(i, schemas[i]);
                            return [4 /*yield*/, models.find({})];
                        case 2:
                            d = _c.sent();
                            for (i in d) {
                                data.push(d[i].toJSON());
                            }
                            ;
                            _c.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4:
                            ;
                            info = data.find(function (i) { return i.검색키워드.toLowerCase().trim().split(",").includes(command.toLowerCase()); });
                            if (info) {
                                btn = new discord_js_1.MessageActionRow().addComponents(new discord_js_1.MessageButton({
                                    label: "삭제하기",
                                    style: "DANGER",
                                    customId: "delete " + message.author.id
                                }));
                                embed = new discord_js_1.MessageEmbed({
                                    title: info.이름,
                                    description: info.설명,
                                    color: "AQUA",
                                    author: {
                                        name: message.author.tag,
                                        iconURL: message.author.displayAvatarURL()
                                    },
                                    footer: {
                                        "text": "created by Cistus / Wiki from Shatagon Discord"
                                    }
                                });
                                if (info.이미지링크 && info.이미지링크.toLowerCase() != "false") {
                                    embed.setImage(info.이미지링크);
                                }
                                ;
                                for (i in info) {
                                    if (!["_id", "createdAt", "updatedAt", "이름", "설명", "이미지링크", "__v"].includes(i)) {
                                        embed.addField(i, info[i], true);
                                    }
                                }
                                ;
                                embed.addFields({
                                    "name": "생성일",
                                    "value": moment_timezone_1.default(info.createdAt).tz("Asia/Seoul").format("YYYY-MM-DD / HH:mm:ss")
                                }, {
                                    "name": "마지막 수정일",
                                    "value": moment_timezone_1.default(info.updatedAt).tz("Asia/Seoul").format("YYYY-MM-DD / HH:mm:ss")
                                });
                                message.reply({ embeds: [embed], components: [btn] });
                            }
                            ;
                            return [2 /*return*/];
                    }
                });
            }); });
            client.on("interactionCreate", function (interaction) {
                var _a;
                if (interaction.isButton()) {
                    if (interaction.customId.startsWith("delete")) {
                        var userId = interaction.customId.split(" ")[1];
                        if (!userId)
                            return;
                        if (interaction.user.id !== userId)
                            return interaction.reply({ content: "당신은 이 메세지 주인이 아닙니다.", ephemeral: true });
                        (_a = interaction.channel) === null || _a === void 0 ? void 0 : _a.messages.fetch(interaction.message.id).then(function (m) {
                            if (m.deletable)
                                return m.delete();
                        });
                    }
                }
                ;
            });
            client.login(token);
            return [2 /*return*/];
        });
    }); });
    console.log("DB is connected");
});
db.on("error", function (err) {
    throw new Error(err);
});
app.use(express_session_1.default({
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: { httpOnly: true }
}));
app.use(express_1.default.static(__dirname + '/build'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
var oauthRequest = function (token, type, req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var oauthResult, oauthData, userResult, userData, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, node_fetch_1.default('https://discord.com/api/oauth2/token', {
                        method: 'POST',
                        body: new URLSearchParams({
                            client_id: clientId,
                            client_secret: clientSecret,
                            code: token,
                            refresh_token: token,
                            redirect_uri: "http://localhost/callback",
                            grant_type: type,
                        }),
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                    })];
            case 1:
                oauthResult = _a.sent();
                return [4 /*yield*/, oauthResult.json()];
            case 2:
                oauthData = _a.sent();
                return [4 /*yield*/, node_fetch_1.default('https://discord.com/api/users/@me', {
                        headers: {
                            authorization: oauthData.token_type + " " + oauthData.access_token,
                        },
                    })];
            case 3:
                userResult = _a.sent();
                req.session.token = oauthData.refresh_token;
                return [4 /*yield*/, userResult.json()];
            case 4:
                userData = _a.sent();
                req.session.data = userData;
                res.cookie("UserData", JSON.stringify({
                    "Userinfo": {
                        "id": userData.id,
                        "avatar": userData.avatar,
                        "discriminator": userData.discriminator,
                        "username": userData.username,
                    }
                }));
                return [3 /*break*/, 6];
            case 5:
                e_1 = _a.sent();
                req.session.destroy(function (err) {
                    console.log(err);
                });
                res.clearCookie("UserData");
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
app.use(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (req.url.includes("."))
                    return [2 /*return*/];
                if (!req.session.token) return [3 /*break*/, 2];
                return [4 /*yield*/, oauthRequest(req.session.token, "refresh_token", req, res)];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                if (!req.session.token) {
                    res.clearCookie("UserData");
                }
                _a.label = 3;
            case 3:
                next();
                return [2 /*return*/];
        }
    });
}); });
app.post("/callData", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, _a, _b, _i, i, models, _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                if (!req.session || !req.session.token || !req.session.data || !editor.includes(req.session.data.id))
                    return [2 /*return*/, res.status(404).end(null)];
                data = {};
                _a = [];
                for (_b in schemas)
                    _a.push(_b);
                _i = 0;
                _e.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3 /*break*/, 4];
                i = _a[_i];
                models = mongoose_1.model(i, schemas[i]);
                _c = data;
                _d = i;
                return [4 /*yield*/, models.find({})];
            case 2:
                _c[_d] = _e.sent();
                _e.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4:
                ;
                return [2 /*return*/, res.status(200).end(JSON.stringify(data))];
        }
    });
}); });
app.get("/delete", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var schema;
    return __generator(this, function (_a) {
        if (!req.session || !req.session.token || !req.session.data || !editor.includes(req.session.data.id))
            return [2 /*return*/, res.status(404).end(null)];
        if (!req.query || !req.query.type)
            return [2 /*return*/, res.status(404).end("Invaild type")];
        if (!schemaList["" + req.query.type])
            return [2 /*return*/, res.status(404).end("Invaild schema")];
        schema = mongoose_1.model("" + req.query.type, schemas["" + req.query.type]);
        schema.findOneAndDelete({ "이름": req.query.이름 }).then(function () {
            return res.status(200).redirect("/wiki");
        }).catch(function (err) {
            return res.status(500).end(err);
        });
        return [2 /*return*/];
    });
}); });
app.post("/submit", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var info, i, schema, handler, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!req.session || !req.session.token || !req.session.data || !editor.includes(req.session.data.id))
                    return [2 /*return*/, res.status(404).end(null)];
                if (!req.body || !req.body.type)
                    return [2 /*return*/, res.status(404).end("Invaild type")];
                if (!schemaList[req.body.type])
                    return [2 /*return*/, res.status(404).end("Invaild schema")];
                info = {};
                for (i in req.body) {
                    if (!["type", "edit"].includes(i))
                        info[i] = req.body[i];
                }
                ;
                schema = mongoose_1.model(req.body.type, schemas[req.body.type]);
                if (!(req.body.edit === "true")) return [3 /*break*/, 1];
                schema.update({ "이름": req.body.이름 }, info, { "multi": true }).then(function () {
                    return res.status(200).redirect("/wiki");
                }).catch(function (err) {
                    return res.status(500).end(err);
                });
                return [3 /*break*/, 4];
            case 1: return [4 /*yield*/, schema.find({ "이름": req.body.이름 }).exec()];
            case 2:
                handler = _a.sent();
                if (handler[0])
                    return [2 /*return*/, res.status(500).end("<html><head><meta charset='utf-8'></head><body>" + req.body.이름 + " is already created</body></html>")];
                data = new schema(info);
                return [4 /*yield*/, data.save()];
            case 3:
                _a.sent();
                res.status(200).redirect("/wiki");
                _a.label = 4;
            case 4:
                ;
                return [2 /*return*/];
        }
    });
}); });
app.get("/login", function (req, res) {
    res.redirect("https://discord.com/api/oauth2/authorize?client_id=859326338040463400&redirect_uri=http%3A%2F%2Flocalhost%2Fcallback&response_type=code&scope=identify");
});
app.get("/callback", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var code, error_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                code = (_a = req.query) === null || _a === void 0 ? void 0 : _a.code;
                if (!code || typeof code != "string")
                    return [2 /*return*/, res.redirect("/")];
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, oauthRequest(code, "authorization_code", req, res)];
            case 2:
                _b.sent();
                res.redirect("/");
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                console.error(error_1);
                res.redirect("/");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get("*", function (req, res) {
    res.sendFile(__dirname + '/build/index.html');
});

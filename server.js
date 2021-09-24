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
var _a = require('./config'), clientId = _a.clientId, clientSecret = _a.clientSecret, editor = _a.editor, host = _a.host, secret = _a.secret, token = _a.token;
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
            client = new discord_js_1.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"], partials: ["CHANNEL", "MESSAGE", "GUILD_MEMBER", "USER"] });
            client.once("ready", function () {
                var _a;
                console.log("Bot is Online");
                (_a = client.user) === null || _a === void 0 ? void 0 : _a.setActivity("!help");
            });
            client.on("messageCreate", function (message) { return __awaiter(void 0, void 0, void 0, function () {
                var args, command, data, _a, _b, _i, i, models, d, j, json, embed, ment, _loop_1, i, info_1, btn_1, createEmbed_1, page_1, btns, e_1, e;
                var _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            if (message.author.bot || !message.content.startsWith("!"))
                                return [2 /*return*/];
                            args = message.content.slice(1).trim().split(" ");
                            command = args.shift().toLowerCase();
                            if (!command)
                                return [2 /*return*/];
                            if (!message.channel.isText())
                                return [2 /*return*/];
                            data = [];
                            _a = [];
                            for (_b in schemas)
                                _a.push(_b);
                            _i = 0;
                            _d.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            i = _a[_i];
                            models = mongoose_1.model(i, schemas[i]);
                            return [4 /*yield*/, models.find({})];
                        case 2:
                            d = _d.sent();
                            for (j in d) {
                                json = d[j].toJSON();
                                json.type = i;
                                data.push(json);
                            }
                            ;
                            _d.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4:
                            ;
                            switch (command) {
                                case "help":
                                    embed = new discord_js_1.MessageEmbed({
                                        title: "샤타곤 위키 봇",
                                        description: "> \uBD07, \uC704\uD0A4\uC5D0 \uB300\uD55C \uBB38\uC758\uB294 [\uC0E4\uD0C0\uACE4 \uB514\uC2A4\uCF54\uB4DC \uC11C\uBC84](https://discord.gg/starcitizenkr) \uC5D0\uC11C \uBD80\uD0C1\uB4DC\uB9AC\uBA70\n> \uBAA8\uB4E0 \uC800\uC791\uAD8C\uC740 \uAC1C\uBC1C\uC790||Cistus||\uC640 \uC704\uD0A4 \uC791\uC131\uC790||Shatagon Discord Wiki Team||\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4.",
                                        color: "AQUA",
                                        author: {
                                            iconURL: "https://cdn.discordapp.com/app-icons/859326338040463400/dd381c0c267d47637eea8bfb2b9fb051.png?size=64",
                                            name: "Shatagon Discord"
                                        },
                                        footer: {
                                            iconURL: (_c = client.user) === null || _c === void 0 ? void 0 : _c.displayAvatarURL(),
                                            text: "Shatagon Wiki Bot"
                                        },
                                        fields: [
                                            {
                                                name: "How to use?",
                                                value: "!{함선이름}\nex) !자벨린\`",
                                                inline: true
                                            }
                                        ]
                                    });
                                    console.log(data);
                                    ment = "**`\uCD1D \uB370\uC774\uD130`** : " + data.length + "\n\n";
                                    _loop_1 = function (i) {
                                        ment += "**" + i + "** : " + data.filter(function (j) { return j.type == i; }).length + "\n";
                                    };
                                    for (i in schemas) {
                                        _loop_1(i);
                                    }
                                    ;
                                    embed.addField("보유 데이터 수", ment, true);
                                    message.reply({ embeds: [embed] });
                                    break;
                                default:
                                    info_1 = data.filter(function (i) { return i.검색키워드.toLowerCase().includes(command.toLowerCase()); });
                                    btn_1 = new discord_js_1.MessageActionRow().addComponents(new discord_js_1.MessageButton({
                                        label: "삭제하기",
                                        style: "DANGER",
                                        customId: "delete " + message.author.id
                                    }));
                                    if (info_1 && message.channel.type === "GUILD_TEXT" && message.channel.name.toLowerCase() === "shatagonwiki-bot") {
                                        createEmbed_1 = function (ship) {
                                            var embed = new discord_js_1.MessageEmbed({
                                                title: ship.이름,
                                                description: ship.설명,
                                                color: "AQUA",
                                                author: {
                                                    name: message.author.tag,
                                                    iconURL: message.author.displayAvatarURL()
                                                },
                                                footer: {
                                                    "text": "created by Cistus / Wiki from Shatagon Discord"
                                                }
                                            });
                                            if (ship.이미지링크 && ship.이미지링크.toLowerCase() != "false") {
                                                embed.setImage(ship.이미지링크);
                                            }
                                            ;
                                            for (var i in ship) {
                                                if (!["_id", "createdAt", "updatedAt", "이름", "설명", "이미지링크", "__v", "type"].includes(i)) {
                                                    embed.addField(i, ship[i], true);
                                                }
                                            }
                                            ;
                                            embed.addFields({
                                                "name": "생성일",
                                                "value": moment_timezone_1.default(ship.createdAt).tz("Asia/Seoul").format("YYYY-MM-DD / HH:mm:ss")
                                            }, {
                                                "name": "마지막 수정일",
                                                "value": moment_timezone_1.default(ship.updatedAt).tz("Asia/Seoul").format("YYYY-MM-DD / HH:mm:ss")
                                            });
                                            return embed;
                                        };
                                        if (info_1.length > 1) {
                                            page_1 = 0;
                                            btns = new discord_js_1.MessageActionRow().addComponents(new discord_js_1.MessageButton({
                                                customId: "back",
                                                emoji: "⏮️",
                                                style: "PRIMARY",
                                                label: "이전"
                                            }), new discord_js_1.MessageButton({
                                                customId: "next",
                                                emoji: "⏭️",
                                                style: "PRIMARY",
                                                label: "다음"
                                            }), new discord_js_1.MessageButton({
                                                customId: "delete",
                                                emoji: "🗑️",
                                                style: "DANGER",
                                                label: "지우기"
                                            }));
                                            e_1 = createEmbed_1(info_1[page_1]);
                                            message.reply({ embeds: [e_1], components: [btns] }).then(function (m) {
                                                var filter = function (interaction) { return interaction.isButton() && interaction.user.id === message.author.id; };
                                                var collector = m.createMessageComponentCollector({ filter: filter, time: 60000 });
                                                collector.on('collect', function (i) {
                                                    i.deferUpdate();
                                                    switch (i.customId) {
                                                        case "next":
                                                            if (page_1 === info_1.length)
                                                                return;
                                                            page_1++;
                                                            e_1 = createEmbed_1(info_1[page_1]);
                                                            m.edit({ embeds: [e_1] });
                                                            break;
                                                        case "back":
                                                            if (page_1 === 0)
                                                                return;
                                                            page_1--;
                                                            e_1 = createEmbed_1(info_1[page_1]);
                                                            m.edit({ embeds: [e_1] });
                                                            break;
                                                        case "delete":
                                                            m.delete();
                                                            collector.stop("stop");
                                                            break;
                                                    }
                                                    ;
                                                });
                                                collector.on('end', function (collected, reason) {
                                                    if (reason === "stop")
                                                        return;
                                                    m.edit({ content: "1분이 지나 삭제버튼만 남겼습니다.", components: [btn_1] });
                                                });
                                            });
                                        }
                                        else if (info_1.length === 1) {
                                            e = createEmbed_1(info_1[0]);
                                            message.reply({ embeds: [e], components: [btn_1] });
                                        }
                                        ;
                                    }
                                    ;
                                    break;
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
    var oauthResult, oauthData, userResult, userData, e_2;
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
                            redirect_uri: "http://" + host + "/callback",
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
                e_2 = _a.sent();
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
                console.log(req.query);
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
    res.redirect("https://discord.com/api/oauth2/authorize?client_id=859326338040463400&redirect_uri=http%3A%2F%2F" + host + "%2Fcallback&response_type=code&scope=identify");
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

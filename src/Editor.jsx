import Header from './modules/Header';
import Footer from './modules/Footer';

import 무기 from "./Types/무기";
import 부품 from "./Types/부품";
import 세력 from "./Types/세력";
import 장비 from "./Types/장비";
import 함선 from "./Types/함선";
import 행성계 from "./Types/행성계";
import 화물 from "./Types/화물";

import style from './Editor.module.css';
import { Container, Form, FloatingLabel } from 'react-bootstrap';

import { useState, useEffect } from 'react';


function Editor() {
    const [handler] = useState(null);
    const [name, setName] = useState(null);
    const [endPoint, setEndPoint] = useState("불러올 에디터 템플릿을 골라주세요");

    useEffect(() => {
        (async () => {
            try {
                let url = "";
                url = new URL(window.location.href);
                let Params = url.searchParams;
                let name = Params.get("이름");
                let type = Params.get("type");
                if (!type || !name || !type) return;
                setName(name);
                setEndPoint(type);
                const edit = () => {
                    let ele;
                    for (let i in wikiData) {
                        if (i !== "_id") {
                            ele = document.getElementsByName(i)
                            if (ele.length < 0) return
                            if (!ele[0]) return
                            if (i === "이름") {
                                ele[0].style.visibility = "hidden"
                                ele[0].style.maxHeight = "0px";
                            }
                            ele[0].value = wikiData[i];
                        }
                    };
                }
                let data = await fetch('/callData', { method: 'POST' });
                if (!data) return window.location.href = "/";
                data = await data.json();
                let wikiData = data[type].find(i => i.이름 === name);
                if (document.readyState === "complete") {
                    edit();
                } else {
                    document.addEventListener("load", edit());
                    return document.removeEventListener("load", edit());
                };
            } catch (e) {
                console.log(e)
                window.location.href = "/";
            };
        })();
    }, [handler]);


    const change = (ele) => {
        setEndPoint(ele.target.value);
    };

    const Selector = () => {
        let url = "";
        url = new URL(window.location.href);
        let edit = url.searchParams.get("edit");
        if (edit || edit === "true") {
            return <>
                <FloatingLabel label="에디터">
                    <Form.Select name="type" onChange={change}>
                        <option>{endPoint}</option>
                        <option value="무기">무기</option>
                        <option value="부품">부품</option>
                        <option value="세력">세력</option>
                        <option value="장비">장비</option>
                        <option value="함선">함선</option>
                        <option value="행성계">행성계</option>
                        <option value="화물">화물</option>
                    </Form.Select>
                </FloatingLabel>
                <input type="text" name="edit" value="false" style={{
                    "visibility": "hidden",
                    "maxHeight": "0px"
                }} />
            </>
        } else {
            return <>
                <input type="text" name="type" value={endPoint} style={{
                    "visibility": "hidden",
                    "maxHeight": "0px"
                }} />
                <input type="text" name="edit" value="true" style={{
                    "visibility": "hidden",
                    "maxHeight": "0px"
                }} />
            </>
        };
    };

    return (
        <>
            <div className="Main">
                <Header />
                <Container>
                    <Form className={style.form} method="POST" action="/submit">
                        <Selector />
                        {
                            (() => {
                                if (!endPoint) return;
                                switch (endPoint) {
                                    case "무기":
                                        return <무기 />
                                    case "부품":
                                        return <부품 />
                                    case "세력":
                                        return <세력 />
                                    case "장비":
                                        return <장비 />
                                    case "함선":
                                        return <함선 />
                                    case "행성계":
                                        return <행성계 />
                                    case "화물":
                                        return <화물 />
                                    default:
                                        return <></>
                                }
                            }
                            )()
                        }
                    </Form>
                </Container>
            </div>
            <Footer />
        </>
    );
}

export default Editor;

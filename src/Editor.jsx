import wiki from './data.json';

import Header from './modules/Header';
import Footer from './modules/Footer';


import 함선 from "./Types/함선";
import 무기 from "./Types/무기";

import style from './Editor.module.css';
import { Container, Form, FloatingLabel } from 'react-bootstrap';

import { useState } from 'react';
import getCookieValue from './getCookieValue';

function Wiki() {
    const [endPoint, setEndPoint] = useState(null);

    let url = "";
    window.onload = () => {
        url = new URL(window.location.href);
        let Params = url.searchParams;
        let name = Params.get("이름");
        let type = Params.get("type");
        if (!type) return;
        setEndPoint(type);
        let data = wiki[type].find(i => i.이름 === name);
        for (let i in data) {
            let ele = document.getElementsByName(i);
            if (ele.length < 0) return;
            if (!ele[0]) return;
            ele[0].value = data[i];
        };
    };

    const change = (ele) => {
        setEndPoint(ele.target.value);
    };

    const A = () => {
        url = new URL(window.location.href);
        let edit = url.searchParams.get("edit");
        if (edit || edit == "true") {
            return <FloatingLabel label="에디터">
                <Form.Select onChange={change}>
                    <option>불러올 에디터 템플릿을 골라주세요</option>
                    <option value="무기">무기</option>
                    <option value="함선">함선</option>
                </Form.Select>
            </FloatingLabel>
        } else {
            return <></>
        }
    }

    if (!getCookieValue("UserData")) return window.location.href = "/";
    
    return (
        <>
            <div className="Main">
                <Header />
                <A />
                <Container>
                    <Form className={style.form} method="POST" action={`/${endPoint}`}>
                        {
                            (() => {
                                if (!endPoint) return;
                                switch (endPoint) {
                                    case "함선":
                                        return <함선 />
                                    case "무기":
                                        return <무기 />
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

export default Wiki;

import Header from './modules/Header';
import Footer from './modules/Footer';

import 함선 from "./Types/함선";
import 무기 from "./Types/무기";

import style from './Editor.module.css';
import { Button, Container, Dropdown, DropdownButton, Form } from 'react-bootstrap';

function Wiki() {
    let url = "";
    window.onload = () => {
        url = new URL(window.location.href);
        url.searchParams.forEach((value, key) => {
            let ele = document.getElementsByName(key);
            if (ele.length < 0) return;
            if (!ele[0]) return;
            ele[0].value = value;
        });
    }

    const A = () => {
        url = new URL(window.location.href);
        let edit = url.searchParams.get("edit");
        if (edit || edit == "true") {
            return <div class={style.center}>
                <DropdownButton id="dropdown-basic-button" title="설정">
                    <Dropdown.Item href="#/action-1">설정</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">인데</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">뭐넣지</Dropdown.Item>
                </DropdownButton>
            </div>
        } else {
            return <></>
        }
    }
    return (
        <>
            <div className="Main">
                <Header />
                <A />
                <Container>
                    <Form className={style.form} method="POST" action="/">
                        {
                            (() => {
                                let query = Object.fromEntries(new URL(window.location.href).searchParams.entries())
                                if (!query) return;
                                console.log(query["type"])
                                switch (query["type"]) {
                                    case "함선":
                                        return <함선 />
                                    case "무기":
                                        return <무기 />
                                }
                            }
                            )()
                        }
                        <div className={`${style.center} ${style.submit}`}>
                            <Button type="submit">Submit form</Button>
                        </div>
                    </Form>
                </Container>
            </div>
            <Footer />
        </>
    );
}

export default Wiki;

import Header from './modules/Header';
import Footer from './modules/Footer';

import style from './Wiki.module.css';

import { useState, useEffect } from 'react';
import { Alert, Button, ButtonGroup, FormControl, Table, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Wiki() {
    const [t, setType] = useState(null);
    const [wiki, setWiki] = useState(null);
    const [view, setView] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                if (wiki) return;
                let data = await fetch('/callData', { method: 'POST' });
                if (!data) return window.location.href = "/";
                data = await data.json();
                setWiki(data);
                setView(true);
            } catch {
                window.location.href = "/";
            }
        })();
    }, [wiki]);

    const search = () => {
        let data = "";
        let a = document.getElementById("searchBar").value;
        wiki[t].filter(i => i.검색키워드.includes(a)).forEach(j => {
            data += `
            <tr>
                <td>${j.이름}</td>
                <td>${j.검색키워드}</td>
                <td style="text-align: center">
                    <a href="/editor?type=${t}&edit=true&이름=${j.이름}">
                        <svg aria-hidden="true" focusable="true" data-prefix="fas" data-icon="pen" class="svg-inline--fa fa-pen fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"/></svg>
                    </a>
                </td>
                <td style="text-align: center">
                    <a href="/delete?type=${t}&이름=${j.이름}">
                        <svg aria-hidden="true" focusable="true" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"/>
                        </svg>
                    </a>
                </td>
            </tr>
            `;
        });
        document.getElementById("body").innerHTML = data;
    };
    const load = (type) => {
        if (!wiki) return window.location.href = "/";
        setType(type)
        let data = "";
        wiki[type].forEach(i => {
            data += `
            <tr>
                <td>${i.이름}</td>
                <td>${i.검색키워드}</td>
                <td style="text-align: center">
                    <a href="/editor?type=${type}&이름=${i.이름}">
                        <svg aria-hidden="true" focusable="true" data-prefix="fas" data-icon="pen" class="svg-inline--fa fa-pen fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>
                    </a>
                </td>
                <td style="text-align: center">
                    <a href="/delete?type=${type}&이름=${i.이름}">
                        <svg aria-hidden="true" focusable="true" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"/>
                        </svg>
                    </a>
                </td>
            </tr>
            `
        });
        document.getElementById("body").innerHTML = data;
    }
    const Handel = () => {
        if (view) {
            return <Alert key="2" variant="success" onClose={() => setView(false)} dismissible>
                <Alert.Heading>성공!</Alert.Heading>
                위키 정보를 불러왔습니다.
            </Alert>
        } else {
            return <></>
        }
    }

    return (
        <>
            <div className="Main">
                <Header />
                <Handel />
                <ButtonGroup className={style.center} aria-label="First group">
                    <Button variant="secondary" onClick={() => load("무기")}>무기</Button>
                    <Button variant="secondary" onClick={() => load("부품")}>부품</Button>
                    <Button variant="secondary" onClick={() => load("세력")}>세력</Button>
                    <Button variant="secondary" onClick={() => load("장비")}>장비</Button>
                    <Button variant="secondary" onClick={() => load("함선")}>함선</Button>
                    <Button variant="secondary" onClick={() => load("행성계")}>행성계</Button>
                    <Button variant="secondary" onClick={() => load("화물")}>화물</Button>
                </ButtonGroup>
                <InputGroup>
                    <FormControl
                        id="searchBar"
                        placeholder="검색할 이름"
                        aria-label="name"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2" onClick={() => search()}>
                        검색
                    </Button>
                </InputGroup>
                <Table variant="dark" striped bordered hover>
                    <thead>
                        <tr>
                            <th>이름</th>
                            <th>검색키워드</th>
                            <th style={{ textAlign: "center" }}>
                                <Link to="/editor?edit=false">
                                    <FontAwesomeIcon icon={faPen} />
                                </Link>
                            </th>
                            <td style={{ textAlign: "center" }}>
                                삭제
                            </td>
                        </tr>
                    </thead>
                    <tbody id="body">
                    </tbody>
                </Table>
            </div>
            <Footer />
        </>
    );
}

export default Wiki;

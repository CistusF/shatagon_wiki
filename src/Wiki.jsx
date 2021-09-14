import Header from './modules/Header';
import Footer from './modules/Footer';

import style from './Wiki.module.css';

import wiki from './data.json';

import { useState } from 'react';
import { Button, ButtonGroup, Container, FormControl, Table, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Wiki() {
    const [t, setType] = useState(null);
    const search = () => {
        let data = "";
        let a = document.getElementById("searchBar").value;
        wiki[t].filter(i => i.검색키워드.includes(a)).forEach(j => {
            let query = "";
            for (let k in j) {
                query += `${k}=${j[k]}&`;
            }
            data += `
            <tr>
                <td>${j.이름}</td>
                <td>${j.검색키워드}</td>
                <td style="text-align: center">
                    <a href="/edit?${query}">
                        <svg aria-hidden="true" focusable="true" data-prefix="fas" data-icon="pen" class="svg-inline--fa fa-pen fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>
                    </a>
                </td>
            </tr>
            `;
        });
        document.getElementById("body").innerHTML = data;
    };
    const load = (type) => {
        setType(type)
        let data = "";
        wiki[type].forEach(i => {
            let query = "";
            for (let j in i) {
                query += `${j}=${i[j]}&`;
            }
            data += `
            <tr>
                <td>${i.이름}</td>
                <td>${i.검색키워드}</td>
                <td style="text-align: center">
                    <a href="/edit?${query}">
                        <svg aria-hidden="true" focusable="true" data-prefix="fas" data-icon="pen" class="svg-inline--fa fa-pen fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>
                    </a>
                </td>
            </tr>
            `
        });
        document.getElementById("body").innerHTML = data;
    }
    return (
        <>
            <div className="Main">
                <Header />
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
                            <th style={{
                                "textAlign": "center"
                            }}>
                                <Link to="/edit">
                                    <FontAwesomeIcon icon={faPen} />
                                </Link>
                            </th>
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

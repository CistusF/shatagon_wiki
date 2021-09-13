import Header from './modules/Header';
import Footer from './modules/Footer';

import style from './Wiki.module.css';

import { Button, ButtonGroup, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Wiki() {
    return (
        <>
            <div className="Main">
                <Header />
                <ButtonGroup className={`me-2 ${style.center}`} aria-label="First group">
                    <Button variant="secondary">무기</Button>
                    <Button variant="secondary">부품</Button>
                    <Button variant="secondary">세력</Button>
                    <Button variant="secondary">장비</Button>
                    <Button variant="secondary">함선</Button>
                    <Button variant="secondary">행성계</Button>
                    <Button variant="secondary">화물</Button>
                </ButtonGroup>
                <Table style={{
                    "textAlign": "center"
                }} variant="dark" striped bordered hover>
                    <thead>
                        <tr>
                            <th>이름</th>
                            <th>검색키워드</th>
                            <th>
                                <Link to="/edit">작성하기</Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>아크라이트 권총</td>
                            <td>아크라이트, 아크라이트 피스톨, 아크라이트 권총</td>
                            <td>
                                <Link to="/edit">수정하기</Link>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <Footer />
        </>
    );
}

export default Wiki;

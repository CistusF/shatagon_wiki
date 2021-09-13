import Header from './modules/Header';
import Footer from './modules/Footer';

import style from './Editor.module.css';

import fetch from 'node-fetch';
import { useState } from 'react';
import { Container, Col, Button, Form, FloatingLabel, Row } from 'react-bootstrap';

function Wiki() {

    return (
        <>
            <div className="Main">
                <Header />
                <Container>
                    <Form className={style.form} methodName="POST">
                        <Row>
                            <Col>
                                <Form.Label className={style.text}>이름</Form.Label>
                                <Form.Group style={{
                                    "width": "30vw"
                                }} md="4" controlId="validationCustom01">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="이름"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group md="4" controlId="validationCustom02">
                                    <Form.Label className={style.text}>종류</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="종류"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group style={{
                                    "width": "30vw"
                                }} md="4" controlId="validationCustom02">
                                    <Form.Label className={style.text}>제조사</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="제조사"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group md="4" controlId="floatingTextarea2">
                            <FloatingLabel className={style.text}>설명</FloatingLabel >
                            <Form.Control
                                required
                                as="textarea"
                                placeholder="설명"
                            />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group md="4" controlId="validationCustom02">
                                    <Form.Label className={style.text}>판매 위치</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="판매 위치"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group md="4" controlId="validationCustom02">
                                    <Form.Label className={style.text}>사격 모드</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="사격 모드"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Label className={style.text}>부착물</Form.Label>
                            <Col>
                                <Form.Group md="4" controlId="validationCustom02">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="조준경"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group md="4" controlId="validationCustom02">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="총열"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group md="4" controlId="validationCustom02">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="총열 하부"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group md="4" controlId="validationCustom02">
                                    <Form.Label className={style.text}>사이즈</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="사이즈"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group md="4" controlId="validationCustom02">
                                    <Form.Label className={style.text}>발 당 데미지</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="발 당 데미지"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Label className={style.text}>기타 총기 설명</Form.Label>
                            <Col>
                                <Form.Group md="4" controlId="validationCustom02">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="연사속도"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group md="4" controlId="validationCustom02">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="사거리"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group md="4" controlId="validationCustom02">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="탄속"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className={style.nextStep}>
                            <Col>
                                <Form.Group md="4" controlId="validationCustom02">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="탄 수"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group md="4" controlId="validationCustom02">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="탄약타입"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group md="4" controlId="validationCustom02">
                            <Form.Label className={style.text}>이미지 링크</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="이미지 링크"
                            />
                        </Form.Group>
                        <Form.Group md="4" controlId="validationCustom02">
                            <Form.Label className={style.text}>검색 키워드</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="검색 키워드"
                            />
                        </Form.Group>
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

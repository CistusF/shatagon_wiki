import Header from './modules/Header';
import Footer from './modules/Footer';

import style from './Editor.module.css';

import fetch from 'node-fetch';
import { useState } from 'react';
import { Button, Form, FloatingLabel } from 'react-bootstrap';

function Wiki() {

    return (
        <>
            <div className="Main">
                <Header />
                <Form className={style.form}>
                    <Form.Group md="4" controlId="validationCustom01">
                        <Form.Label className={style.text}>이름</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="이름"
                        />
                    </Form.Group>
                    <Form.Group md="4" controlId="floatingTextarea2">
                        <FloatingLabel className={style.text}>설명</FloatingLabel >
                        <Form.Control
                            required
                            as="textarea"
                            placeholder="설명"
                        />
                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustom02">
                        <Form.Label className={style.text}>제조사</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="제조사"
                        />
                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustom02">
                        <Form.Label className={style.text}>종류</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="종류"
                        />
                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustom02">
                        <Form.Label className={style.text}>사이즈</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="사이즈"
                        />
                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustom02">
                        <Form.Label className={style.text}>조준경 부착물</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="조준경 부착물"
                        />
                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustom02">
                        <Form.Label className={style.text}>총열 부착물</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="총열 부착물"
                        />
                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustom02">
                        <Form.Label className={style.text}>총열 하부 부착물</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="총열 하부 부착물"
                        />
                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustom02">
                        <Form.Label className={style.text}>발 당 데미지</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="설명"
                        />
                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustom02">
                        <Form.Label className={style.text}>연사속도</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="연사속도"
                        />
                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustom02">
                        <Form.Label className={style.text}>사거리</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="사거리"
                        />
                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustom02">
                        <Form.Label className={style.text}>탄속</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="탄속"
                        />
                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustom02">
                        <Form.Label className={style.text}>탄 수</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="탄 수"
                        />
                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustom02">
                        <Form.Label className={style.text}>판매 위치</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="판매 위치"
                        />
                    </Form.Group>
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
            </div>
            <Footer />
        </>
    );
}

export default Wiki;

import style from "./Editor.module.css";
import { Col, Form, FloatingLabel, Row } from 'react-bootstrap';

function 함선() {
    console.log('Loading')
    return (
        <>
            <Row className={style.nextStep}>
                <Col>
                    <Form.Label className={style.text}>이름</Form.Label>
                    <Form.Group style={{
                        "width": "30vw"
                    }} md="4" controlId="validationCustom01">
                        <Form.Control
                            required
                            name="이름"
                            type="text"
                            placeholder="이름"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group md="4">
                        <Form.Label className={style.text}>종류</Form.Label>
                        <Form.Control
                            required
                            name="함선제원"
                            type="text"
                            placeholder="함선제원"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group style={{
                        "width": "30vw"
                    }} md="4">
                        <Form.Label className={style.text}>제조사</Form.Label>
                        <Form.Control
                            required
                            name="전장/전폭/전고"
                            type="text"
                            placeholder="전장/전폭/전고"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group md="4" controlId="floatingTextarea2" className={style.nextStep}>
                <FloatingLabel className={style.text}>설명</FloatingLabel >
                <Form.Control
                    required
                    name="설명"
                    as="textarea"
                    placeholder="설명"
                />
            </Form.Group>
            <Row className={style.nextStep}>
                <Form.Label className={style.text}>가격정보</Form.Label>
                <Col>
                    <Form.Group md="4">
                        <Form.Control
                            required
                            name="판매위치"
                            type="text"
                            placeholder="판매 위치"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group md="4">
                        <Form.Control
                            required
                            name="가격"
                            type="text"
                            placeholder="가격"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group md="4">
                        <Form.Control
                            required
                            name="⍺UEC"
                            type="text"
                            placeholder="⍺UEC"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className={style.nextStep}>
                <Form.Label className={style.text}>중량</Form.Label>
                <Col>
                    <Form.Group md="4">
                        <Form.Control
                            required
                            name="출고중량"
                            type="text"
                            placeholder="출고중량"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group md="4">
                        <Form.Control
                            required
                            name="화물용량"
                            type="text"
                            placeholder="화물용량"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className={style.nextStep}>
                <Form.Label className={style.text}>기타정보</Form.Label>
                <Col>
                    <Form.Group md="4">
                        <Form.Control
                            required
                            name="구현단계"
                            type="text"
                            placeholder="구현단계"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group md="4">
                        <Form.Control
                            required
                            name="함선분류"
                            type="text"
                            placeholder="함선분류"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group md="4">
                        <Form.Control
                            required
                            name="순항속도"
                            type="text"
                            placeholder="순항속도"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group md="4">
                        <Form.Control
                            required
                            name="최소승무원"
                            type="text"
                            placeholder="최소승무원"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group md="4" className={style.nextStep}>
                <Form.Label className={style.text}>이미지 링크</Form.Label>
                <Form.Control
                    required
                    name="이미지링크"
                    type="text"
                    placeholder="이미지 링크"
                />
            </Form.Group>
            <Form.Group md="4" className={style.nextStep}>
                <Form.Label className={style.text}>검색 키워드</Form.Label>
                <Form.Control
                    required
                    name="검색키워드"
                    type="text"
                    placeholder="검색 키워드"
                />
            </Form.Group>
        </>
    );
}

export default 함선;
import style from "./Editor.module.css";
import { Button, Col, Form, FloatingLabel, Row } from 'react-bootstrap';

function 장비() {
    return (
        <>
            <Row className={style.nextStep}>
                <Col>
                    <Form.Label className={style.text}>이름</Form.Label>
                    <Form.Group style={{
                        "width": "30vw"
                    }} md="4">
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
                        <Form.Label className={style.text}>제조사</Form.Label>
                        <Form.Control
                            required
                            name="제조사"
                            type="text"
                            placeholder="제조사"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group style={{
                        "width": "30vw"
                    }} md="4">
                        <Form.Label className={style.text}>사이즈</Form.Label>
                        <Form.Control
                            required
                            name="사이즈"
                            type="text"
                            placeholder="사이즈"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group style={{
                        "width": "30vw"
                    }} md="4">
                        <Form.Label className={style.text}>종류</Form.Label>
                        <Form.Control
                            required
                            name="종류"
                            type="text"
                            placeholder="종류"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group md="4" className={style.nextStep}>
                <FloatingLabel className={style.text}>설명</FloatingLabel >
                <Form.Control
                    required
                    name="설명"
                    as="textarea"
                    placeholder="설명"
                />
            </Form.Group>
            <Row className={style.nextStep}>
                <Form.Label className={style.text}>총기정보</Form.Label>
                <Col>
                    <Form.Group md="4">
                        <Form.Control
                            required
                            name="발 당 대미지"
                            type="text"
                            placeholder="발 당 대미지"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group md="4">
                        <Form.Control
                            required
                            name="연사속도"
                            type="text"
                            placeholder="연사속도"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group md="4">
                        <Form.Control
                            required
                            name="사거리"
                            type="text"
                            placeholder="사거리"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group md="4">
                        <Form.Control
                            required
                            name="탄속"
                            type="text"
                            placeholder="탄속"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group md="4">
                        <Form.Control
                            required
                            name="탄 수"
                            type="text"
                            placeholder="탄 수"
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
                            name="사이즈"
                            type="text"
                            placeholder="사이즈"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group md="4">
                        <Form.Control
                            required
                            name="판매 위치"
                            type="text"
                            placeholder="판매 위치"
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
            <div className={`${style.center} ${style.submit}`}>
                <Button type="submit">Submit form</Button>
            </div>
        </>
    );
}

export default 장비;
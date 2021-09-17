import style from "./Editor.module.css";
import { Button, Col, Form, FloatingLabel, Row } from 'react-bootstrap';

function 행성계() {
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
                        <Form.Label className={style.text}>소속</Form.Label>
                        <Form.Control
                            required
                            name="소속"
                            type="text"
                            placeholder="소속"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group style={{
                        "width": "30vw"
                    }} md="4">
                        <Form.Label className={style.text}>행성</Form.Label>
                        <Form.Control
                            required
                            name="행성"
                            type="text"
                            placeholder="행성"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group style={{
                        "width": "30vw"
                    }} md="4">
                        <Form.Label className={style.text}>점프 포인트</Form.Label>
                        <Form.Control
                            required
                            name="점프 포인트"
                            type="text"
                            placeholder="점프 포인트"
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

export default 행성계;
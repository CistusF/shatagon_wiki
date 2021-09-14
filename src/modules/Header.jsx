import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    const getCookieValue = (key) => {
        let cookieKey = key + "=";
        let result = "";
        const cookieArr = document.cookie.split(";");

        for (let i = 0; i < cookieArr.length; i++) {
            if (cookieArr[i][0] === " ") {
                cookieArr[i] = cookieArr[i].substring(1);
            }

            if (cookieArr[i].indexOf(cookieKey) === 0) {
                result = cookieArr[i].slice(cookieKey.length, cookieArr[i].length);
                return result;
            }
        }
        return result;
    }
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" style={{
                            "color": "white"
                        }}>S_Wiki</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" className="nav-link">Home</Link>
                            {
                                getCookieValue("UserData") ?
                                    <Link to="/test" className="nav-link">Wiki</Link>
                                    :
                                    <></>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
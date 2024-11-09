import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../../css/allCss.css"

export default function HomeNav() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home" className="Home-navbar-title">한잔의 시간</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Drink" id="basic-nav-dropdown1" className="Home-navbar">
                            <NavDropdown.Item href="#action/3.1">
                                Action
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Glass" id="basic-nav-dropdown2" className="Home-navbar">
                            <NavDropdown.Item href="#action/3.1">
                                Action
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown3" className="Home-navbar">
                            <NavDropdown.Item href="#action/3.1">
                                Action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

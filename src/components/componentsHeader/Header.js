import React from "react";
import {Navbar, Container, Nav, Form} from 'react-bootstrap'
import logoImg from "../../assets/./Logo/cropped-gogopizza-logo.png"
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";


class Header extends React.Component{

    render(){
        return (
            <>
                <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" fixed="top">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logoImg}
                                height="50"
                                width="50"
                                className="d-inline-block align-top"
                                alt="Logo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link className='nav' href='/home'>О нас</Nav.Link>
                                <Nav.Link className='nav' href='/stock'>Акции</Nav.Link>
                                <Nav.Link className='nav' href='/contacts'>Контакти</Nav.Link>
                                <Nav.Link className='nav' href='/works'>Работа в Гоу-Гоу</Nav.Link>
                                <Nav.Link className='nav' href='/call'>Позвони нам МТС +375(29)555-1-666</Nav.Link>
                                <Nav.Link className='nav' href='/basket'>Корзина</Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl type="text"
                                             placeholder="Search"
                                             className="mr-sm-2"/>

                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>

        )
    }
}

export default Header







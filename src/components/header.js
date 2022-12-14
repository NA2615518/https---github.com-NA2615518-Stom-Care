import React, {Component} from 'react'
import { Button, Container, FormControl, Nav, Navbar } from 'react-bootstrap'
import logo from './logo192.png'

export default class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
                <Container>
                    <Navbar.brand href= "/">
                        <img 
                        src={logo}
                        height="30"
                        width="30"
                        className="d-inline-block align-top"
                        alt="Logo"
                        />
                    </Navbar.brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="mr-auto">
                        <Nav.Link hrev="/" >Home</Nav.Link>
                        <Nav.Link hrev="/about" >About us</Nav.Link>
                        <Nav.Link hrev="/contacts" >Contacts</Nav.Link>
                        <Nav.Link hrev="/blog" >Blog</Nav.Link>
                    </Nav>
                    <From inline>
                        <FormControl
                        type="text"
                        placeholder="Search"
                        classname="mr-sm-2"
                        />
                        <Button variant="outline-info">Search</Button>
                    </From>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            
        )
    }
}
import Link from "next/link"
import { useContext, useState } from "react"
import { TagContext } from "../../contexts/TagContext"
import { CategoryContext } from "../../contexts/CategoryContext"
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const NavBar = () => {
    const navTags = useContext(TagContext)
    console.log('navTags : ', navTags)
    
    const navCategory = useContext(CategoryContext)
    console.log('navCategory: ', navCategory);

    return (
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container>
                <Navbar.Brand href="/">Post-Post</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Tags">
                            {
                                !!navTags &&
                                navTags.map((item, index) => {
                                    return (
                                        // <NavDropdown.Item key={index} href={'/tag/' + item.id}>{ item.name }</NavDropdown.Item>
                                        <Link key={index} href={'/tag/' + item.id} >
                                            <NavDropdown.Item href={'/tag/' + item.id}>{ item.name }</NavDropdown.Item> 
                                        </Link>
                                    )
                                })
                            }
                        </NavDropdown>
                        <NavDropdown title="Categories">
                            {
                                !!navCategory &&
                                navCategory.map((item, index) => {
                                    return (
                                        // <NavDropdown.Item key={index} href={'/tag/' + item.id}>{ item.name }</NavDropdown.Item>
                                        <Link key={index} href={'/categories/' + item.id} >
                                            <NavDropdown.Item href={'/categories/' + item.id}>{ item.name }</NavDropdown.Item> 
                                        </Link>
                                    )
                                })
                            }
                        </NavDropdown>
                        <Nav.Link href="/comments">Comments</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
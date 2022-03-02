import Image from "next/image"
import Link from "next/link"
import { useContext, useState } from "react"
import { TagContext } from "../../contexts/TagContext"
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const NavBar = () => {
    const [ isActive, setIsActive ] = useState(false)
    const navTags = useContext(TagContext)
    console.log('navTags : ', navTags)
    
    return (
        // <div>
        //     <nav className="navbar is-warning">
        //         <div className="navbar-brand">
        //             <Link href={'/'}>
        //                 <a className="navbar-item">
        //                     <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        //                 </a>
        //             </Link>

        //             {
        //                 isActive ?
        //                 <a role="button" className="navbar-burger burger is-active" onClick={() => {
        //                     setIsActive(!isActive)
        //                     console.log(isActive);
        //                 }}>
        //                     <span aria-hidden="true"></span>
        //                     <span aria-hidden="true"></span>
        //                     <span aria-hidden="true"></span>
        //                 </a>
        //                 : 
        //                     <a role="button" className="navbar-burger" onClick={() => {
        //                         setIsActive(!isActive)
        //                         console.log(isActive);
        //                     }}>
        //                         <span aria-hidden="true"></span>
        //                         <span aria-hidden="true"></span>
        //                         <span aria-hidden="true"></span>
        //                     </a>
        //             }
        //         </div>
                
        //         <div className="navbar-menu">
        //             <div className="navbar-start">
        //                 <Link href={'/'}>
        //                     <a className="navbar-item">
        //                         Home
        //                     </a>
        //                 </Link>
        //                 <div className="navbar-item has-dropdown is-hoverable">
        //                     <a className="navbar-link">
        //                         Tags
        //                     </a>
        //                     <div className="navbar-dropdown">
        //                         {
        //                             !!navTags &&
        //                             navTags.map((item, index) => {
        //                                 return (
        //                                     <Link key={ index } href={'/tag/' + item.id} >
        //                                         <a className="navbar-item">
        //                                             {item.name}
        //                                         </a>
        //                                     </Link>
        //                                 )
        //                             })
        //                         }
        //                     </div>
        //                 </div>
        //                 <Link href={'/Categories'}>
        //                     <a className="navbar-item">
        //                         Categories
        //                     </a>
        //                 </Link>
        //             </div>
        //         </div>
        //     </nav>
        // </div>
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
                        <Nav.Link href="/comments">Comments</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
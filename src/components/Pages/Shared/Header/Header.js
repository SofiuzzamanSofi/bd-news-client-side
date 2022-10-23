
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {

    const { user, LogOut } = useContext(AuthContext);

    const handleLogOut = () => {
        LogOut()
            .then(() => {

            })
            .catch(error => {

            });
    }


    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand ><Link to="/">BD-News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className='d-flex align-items-center gap-3'>
                        {
                            user?.uid ?
                                <>
                                    <Nav.Link >{user?.displayName}  </Nav.Link>
                                    <Nav.Link onClick={handleLogOut}> <Button variant="light">Log Out</Button></Nav.Link>
                                </>
                                :
                                <div className='d-flex gap-2'>
                                    <Link to='/login'><Button variant="outline-primary">Log In</Button></Link>
                                    <Link to='/register'><Button variant="outline-primary">Register</Button></Link>
                                </div>
                        }

                        <Link to="/profile" className=''>
                            {user?.photoURL ?
                                <Image roundedCircle style={{ height: '40px', border: '1px solid red' }} src={user?.photoURL} ></Image>
                                :
                                <FaUser />
                            }
                        </Link>
                    </Nav>

                    {/* lg te dekhabe news items  */}
                    <div className='d-lg-none'>
                        <LeftSideNav />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
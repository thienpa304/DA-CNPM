import React from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap';
import { FaBookOpen } from 'react-icons/fa';

const AdsBanner = () => {
    return (
        <Navbar className="navbar-header" color="light"  expand="md"  light container>
            <NavbarBrand href="/home">
                <img width="120px" height="75px" src='assets/images/logo.png' alt="Logo"></img>
            </NavbarBrand>
            <NavbarToggler />
                <Collapse navbar>
                    <Nav className="nav-header flex-container" style={{width: "100%"}} navbar>

                        <NavItem className="flex-item" style={{flexGrow: "30"}}>
                            <NavLink href="/">
                                <FaBookOpen /> QUẢN LÝ
                            </NavLink>

                        </NavItem>

                        <NavItem className="flex-item" style={{flexGrow: "30"}}> 
                            <NavLink href="/ordering">
                                <FaBookOpen /> XEM MENU
                            </NavLink>
                  
                        </NavItem>

                        <NavItem className="flex-item" style={{flexGrow: "5"}}>
                            <NavLink href="/login">
                                <FaBookOpen /> ĐĂNG NHẬP / ĐĂNG KÝ
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>

        </Navbar>
    );
};


export default AdsBanner;
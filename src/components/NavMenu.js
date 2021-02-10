import React, { useState } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Nav,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import './style-starter.css'

import { createGlobalStyle} from "styled-components"
import {ThemeProvider} from "styled-components";

const lightTheme = {
  body: '#FFF',
  backgroundColor: '#363537',
}
const darkTheme = {
  body: 'black',
  backgroundColor: '#999',
}

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    transition: all 0.50s linear;
  }`  

export function NavMenu () {
    
   const [isOpen,setisOpen] = useState(false)
   const toggle =() => {
      setisOpen(!isOpen)
    }

    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
      theme === 'light' ? setTheme('dark') : setTheme('light')
  }
 
        return (
          <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
        <header>
               
        <Navbar color="white" light expand="md" className="ng-white border-bottom box-shadow mb-3">
        <Container>
        <NavbarBrand href="/">
            <span className="fa fa-newspaper-o"></span> InfoBuddy
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <div className="search-bar mx-auto">
            <form className="search ml-m-5 ">
            <span className="fa fa-search search__icon"></span>
                <input type="search" className="search__input " name="search" placeholder="Discover news, articles and more" required>
                </input>
               
            </form>
            </div>  
          <Nav className="mx-auto" navbar>
            <NavItem>
           
            </NavItem>
            <NavItem  >
            <Link className="nav-link" to="/">Home</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className="d-none d-md-block">
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
               <Link to="/blog-page">Fitness</Link> 
                </DropdownItem>
                <DropdownItem>
                Sports
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className="d-none d-md-block">
            <Link className="nav-link" to="/">Contact</Link>
            </NavItem>
            <NavItem>
            <div className="mobile-position mt-2">
                <nav className="navigation">
                    <div className="theme-switch-wrapper">
                        <label className="theme-switch">
                            <input type="checkbox" id="checkbox" onChange={themeToggler}></input>
                            <div className="mode-container">
                                <i className="gg-sun"></i>
                                <i className="gg-moon"></i>
                            </div>
                        </label>
                    </div>
                </nav>
            </div>
            </NavItem>
            
          </Nav>
    
        </Collapse>
        </Container>
      </Navbar>
            </header>
            </ThemeProvider>
        );
    }


import React, { Component } from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container
} from 'reactstrap';

class AppNavBar extends Component{
    state = {
        isOpen:false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
        return (
        <div>
            <Navbar color="dark" dark expand="sm" className="">
                <Container>
                    <NavbarBrand href="/">ShoppingList</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="m1-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/akhil1213">Github</NavLink>
                            </NavItem>
                        </Nav>                     
                    </Collapse>  
                </Container>
            </Navbar>
        </div>
        );
        
    }
}
export default AppNavBar;
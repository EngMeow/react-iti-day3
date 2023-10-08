import React, { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { CartContex } from '../context/CartContex';
import { CounterContext } from '../context/CounterContex';

export  function MyNav() {
  
  const value = useContext( CounterContext );
  let { count } = value 
  return (
    <>
        <Navbar expand="lg" className="bg-warning ">
        <Container>
          <Navbar.Brand >MO basyoni</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/products">Products</NavLink>
              <NavLink className="nav-link" to="/products/0/edit">Product Form</NavLink>
              <NavLink className="nav-link" to="/cart "><i className="bi bi-bag-plus fs-4"><h6>{count}</h6></i></NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

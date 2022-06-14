import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import logo from '../assets/free_pizza_logo-_frae.png';
import './Header.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { Twitter, Instagram } from 'react-bootstrap-icons';

import Home from '../Pages/Home';
import Menu from '../Pages/Menu';
import About from '../Pages/About';
import Stocks from '../Pages/Stocks';
import Cart from '../Pages/Cart';
import Auth from '../Pages/Auth';
import Job from '../Pages/Job';
import notFound from '../Pages/notFound';
import Map from '../Pages/Map';
import Feedback from './Feedback';
import Order from '../Pages/Order';
 
export default function Header({navigateTo, PAGE_CART, PAGE_PRODUCTS, page}) {

        return (
            <>
            <Navbar bg="dark" collapseOnSelect expand="lg" variant="dark">
    <Container>
    <Navbar.Brand href="/">
      <img
        src={logo}
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      Pizza Place
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
     <Navbar.Collapse id="responsive-navbar-nav" className="navWrap">
    <Nav className="me-auto">
      <Nav.Link href="/">На главную</Nav.Link>
      <Nav.Link href="/menu">Меню</Nav.Link>
      <Nav.Link href="/about">О нас</Nav.Link>
      <Nav.Link href="/stocks">Акции</Nav.Link>
    </Nav>

    <Nav className="justify-content-flex-end">

      <Nav.Link href="/" >
    <Twitter color="white" size={25} href='/' />
    </Nav.Link>

    <Nav.Link href="/" className="iconMarg">
    <Instagram color="white" size={25} />
    </Nav.Link>

    <Button variant='warning' className='headButt' href="/auth">Авторизация</Button>

    </Nav>    

    </Navbar.Collapse>
  </Container>
  </Navbar>

  <Router>
    <Switch>
      <Route exact path = '/' component={Home} />
      <Route exact path = '/menu' component={Menu} />
      <Route exact path = '/about' component={About} />
      <Route exact path = '/stocks' component={Stocks} />
      <Route exact path = '/cart' component={Cart} />
      <Route exact path = '/auth' component={Auth} />
      <Route exact path = '/job' component={Job} />
      <Route exact path = '/notFound' component={notFound} />
      <Route exact path= '/map' component={Map} />
      <Route exact path= '/feed' component={Feedback} />
      <Route exact path= '/order' component={Order} />
      <Redirect to='/notFound' />
    </Switch>
  </Router>
</>
        )
    }


import React, { useState } from 'react';
import './Header.css';
import { Twitter, Instagram, Youtube } from 'react-bootstrap-icons';
import { Nav, Modal, Form, Button } from 'react-bootstrap';


export default function Footer() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
        return (
            <>
        <div className="main-footer foot">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-2 col-sm-6 hFoot">
                        <h4 className="text-white">Pizza Place</h4>
                        <ul className="list-unstyled">
                            <li><a href="/about">О нас</a></li>
                            <li><a href="/menu">Меню</a></li>
                            <li><a href="/stocks">Акции</a></li>
                            <li><a href="/">На главную</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-6 hFoot">
                        <h4 className="text-white">Покупателям</h4>
                        <ul className="list-unstyled">
                            <li><a href="/order">Доставка и оплата</a></li>
                            <li><a onClick={handleShow} href="#">Обратная связь</a></li>
                            <li><a href="/map">Наши кафе</a></li>
                            <li><a href="/about">Отзывы</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-6 hFoot">
                        <h4 className="text-white">Партнерам</h4>
                        <ul className="list-unstyled">
                            <li><a href="/about">Франшиза</a></li>
                            <li><a href="/about">Инвестиции</a></li>
                            <li><a href="/about">Поставщикам</a></li>
                            <li><a href="/job">Сотрудничество</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-6 hFoot">
                        <h4 className="text-white ">Контакты</h4>
                        <h5 className="text-white ">Фактический адрес:</h5>
                        <ul className="list-unstyled">
                            <li><p className="text-white">г.Владивосток, ул. Крылова, 10</p></li>
                            <li><p className="text-white">Тел: +7 (423) 208-88-88</p></li>
                        </ul>
                        <Nav className="justify-content-flex-end">

                        <Nav.Link href="/">
                            <Instagram color="white" size={25} />
                        </Nav.Link>
                        <Nav.Link href="/">
                            <Youtube color="white" size={25} />
                        </Nav.Link>
                        <Nav.Link href="/">
                            <Twitter color="white" size={25} />
                        </Nav.Link>

                        </Nav>

                    </div>
                  </div>
                <div className="footer-bottom pading">
                    <p className="text-center text-white">
                        &copy;{new Date().getFullYear()} PIZZA PLACE ALL RIGHTS RESERVED
                    </p>
                </div>
            </div>
        </div>
        <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title className="">Обратная связь</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email адресс</Form.Label>
    <Form.Control type="email" placeholder="Введите ваш Email адресс..." />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Текст</Form.Label>
    <Form.Control as="textarea" placeholder="Введите ваше сообщение..." ыrows={3} />
  </Form.Group>
</Form>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="primary" href="/">Отправить</Button>
  </Modal.Footer>
        </Modal>
</>
        )
    }


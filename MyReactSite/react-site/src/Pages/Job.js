import React, { Component, useState } from 'react';
import {Container, Row, Col, Image, Tab, Nav, Button, Modal, Form} from 'react-bootstrap';
import Footer from '../Components/Footer';
import 'animate.css';
import 'wow.js/dist/wow';
import WOW from 'wow.js';

export default function Job(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    new WOW().init();

        return (
            <><h1 className='text-center jobTitle'>Работай с нами</h1>
                <Container className='marJob'>
                    <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column mt-2">
                                    <Nav.Item>
                                        <Nav.Link eventKey='first'>Повар</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey='second'>Менеджер</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey='third'>Доставщик</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey='fourth'>Уборщик</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content className='mt-3'>
                                    <Tab.Pane eventKey='first'>
                                        <Image className='jobImg wow animate__animated animate__fadeInRight' src='https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                                        <div className='mt-2'>
                                        <Col>
                                        <ul>
                                            <h5>Обязанности:</h5>
                                            <li>
                                            Нарезка, заправка салатов;
                                            </li>
                                            <li>
                                            Приготовление пиццы;
                                            </li>
                                            <li>
                                            Выполнение поставленных руководителем задач.
                                            </li>
                                        </ul>
                                        </Col>
                                        <Col>
                                        <ul>
                                            <h5>Требования:</h5>
                                            <li>
                                            Официальное оформление с первого рабочего дня;
                                            </li>
                                            <li>
                                            Стабильная заработная плата (с возможностью роста);
                                            </li>
                                            <li>
                                            Социальный пакет (оплачиваемые больничные, отпуск).
                                            </li>
                                        </ul>
                                        </Col>
                                        <Col>
                                        <ul>
                                            <h5>Условия:</h5>
                                            <li>
                                            График работы — 3/3 или 4/2, с 08:00 до 21:00, либо до 23:00;
                                            </li>
                                            <li>
                                            Заработная плата 2 раза в месяц и всегда вовремя;
                                            </li>
                                            <li>
                                            Официальное трудоустройство, обеды, форма.
                                            </li>
                                        </ul>
                                        </Col>
                                        
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='second'>
                                        <Image className='jobImg wow animate__animated animate__fadeInRight' src='https://images.pexels.com/photos/4347366/pexels-photo-4347366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                                        <div className='mt-2'>
                                        <Col>
                                        <ul>
                                            <h5>Обязанности:</h5>
                                            <li>
                                            Открытие/закрытие предприятия;
                                            </li>
                                            <li>
                                            Планирование, организация и контроль работы предприятия;
                                            </li>
                                            <li>
                                            Выполнение планов продаж по выручке;
                                            </li>
                                            <li>
                                            Работа с персоналом (ввод в должность, обучение, мотивация).
                                            </li>
                                        </ul>
                                        </Col>
                                        <Col>
                                        <ul>
                                            <h5>Требования:</h5>
                                            <li>
                                            Преимуществами будут высшее образование в области "технология продуктов общественного питания" и опыт работы в сфере общественного питания на управленческих должностях;
                                            </li>
                                            <li>
                                            Нам нужны горящие глаза, позитивный взгляд на жизнь, способность увлечь своим энтузиазмом всех вокруг. 
                                            </li>
                                        </ul>
                                        </Col>
                                        <Col>
                                        <ul>
                                            <h5>Условия:</h5>
                                            <li>
                                            Официальное оформление с первого рабочего дня;
                                            </li>
                                            <li>
                                            Стабильная заработная плата (с возможностью роста);
                                            </li>
                                            <li>
                                            Социальный пакет (оплачиваемые больничные, отпуск).
                                            </li>
                                        </ul>
                                        </Col>
                                        
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='third'>
                                        <Image className='jobImg wow animate__animated animate__fadeInRight' src='https://images.pexels.com/photos/7362881/pexels-photo-7362881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                                        <div className='mt-2'>
                                        <Col>
                                        <ul>
                                            <h5>Обязанности:</h5>
                                            <li>
                                            Доставка продукции по городу до квартиры или до офиса.
                                            </li>
                                        </ul>
                                        </Col>
                                        <Col>
                                        <ul>
                                            <h5>Требования:</h5>
                                            <li>
                                            Личный автомобиль(необязательно);
                                            </li>
                                            <li>
                                            Отличное знание города;
                                            </li>
                                            <li>
                                            Приветливость и внимательность.
                                            </li>
                                        </ul>
                                        </Col>
                                        <Col>
                                        <ul>
                                            <h5>Плюсы:</h5>
                                            <li>
                                            Гибкий график;
                                            </li>
                                            <li>
                                            Много заявок;
                                            </li>
                                            <li>
                                            Стабильная заработная плата (с возможностью роста).
                                            </li>
                                        </ul>
                                        </Col>
                                        
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='fourth'>
                                        <Image className='jobImg wow animate__animated animate__fadeInRight' src='https://lastik.su/upload/iblock/d30/d30650ca50b2a78154c198d298317a81.jpg'/>
                                        <div className='mt-2'>
                                        <Col>
                                        <ul>
                                            <h5>Обязанности:</h5>
                                            <li>
                                            Уборка закрепленных за вами помещений, коридоров, лестниц;
                                            </li>
                                            <li>
                                            Поддержание закрепленной территории в чистоте в течение рабочего дня;
                                            </li>
                                            <li>
                                            Мойка подносов.
                                            </li>
                                        </ul>
                                        </Col>
                                        <Col>
                                        <ul>
                                            <h5>Требования:</h5>
                                            <li>
                                            Официальное оформление с первого рабочего дня;
                                            </li>
                                            <li>
                                            Стабильная заработная плата (с возможностью роста);
                                            </li>
                                            <li>
                                            Социальный пакет (оплачиваемые больничные, отпуск).
                                            </li>
                                        </ul>
                                        </Col>
                                        <Col>
                                        <ul>
                                            <h5>Условия:</h5>
                                            <li>
                                            График работы — 3/3 или 4/2, с 08:00 до 21:00, либо до 23:00;
                                            </li>
                                            <li>
                                            Заработная плата 2 раза в месяц и всегда вовремя;
                                            </li>
                                            <li>
                                            Официальное трудоустройство, обеды, форма.
                                            </li>
                                        </ul>
                                        </Col>
                                        
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                        <Row className='jobText wow animate__fadeInUp animate__animated'>
                            <Col sm={4}>
                            <h2>Гибкий график</h2>
                            </Col>
                            <Col sm={4}>
                            <h2>Стабильная зарплата</h2>
                            </Col>
                            <Col sm={4}>
                            <h2>Быстрый карьерный рост</h2>
                            </Col>
                        </Row>
                        <Row>
                            <div className='jobButDiv'>
                            <Button onClick={handleShow} className='jobBut' variant='warning'>Заполнить анкету</Button>
                            </div>
                        </Row>
                    </Tab.Container>

                    <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title className="">Анкета</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <Form>
  <Form.Label>Ваш город</Form.Label>
                    <Form.Select>
                    <option>Владивосток</option>
                    <option>Москва</option>
                    <option>Омск</option>
                    <option>Хабаровск</option>
  </Form.Select>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Ваше имя</Form.Label>
    <Form.Control type="email" placeholder="Введите ваше имя ..." />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Ваша фамилия</Form.Label>
    <Form.Control as="textarea" placeholder="Введите вашу фамилию..."  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Ваша номер телефона</Form.Label>
    <Form.Control as="textarea" placeholder="Введите ваш номер телефона..."  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Ваша дата рождения</Form.Label>
    <Form.Control as="textarea" placeholder="Введите вашу дату рождения..."  />
  </Form.Group>
</Form>
  </Modal.Body>

  <Modal.Footer className='jobButDiv'>
    <Button variant="primary" href="/">Отправить анкету</Button>
  </Modal.Footer>
        </Modal>
                </Container>
                <Footer/>
            </>
        )
    }

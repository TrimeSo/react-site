import React, { Component } from 'react';
import {Container, Row, Table, Button, Nav} from 'react-bootstrap';
import { X } from 'react-bootstrap-icons';


export default function Cart() {

        return (
            <>
                <Container>
                    <h1 className="text-center hTitle">Корзина</h1>
                    <Container className="cartMargin">
                        <Row>
                        <Table className="justify-content-center">
                            <thead>
                                <tr>
                                <th>Еда</th>
                                <th>Цена</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Big Chease Pizza</td>
                                <td>489 ₽</td>
                                <Nav.Link >
                                    <X color="black" size={25} />
                                </Nav.Link>
                                </tr>
                                <tr>
                                <td>Coca-Cola</td>
                                <td>100 ₽</td>
                                <Nav.Link >
                                    <X color="black" size={25} />
                                </Nav.Link>
                                </tr>
                                <tr>
                                <td>Картошка Фри Средняя</td>
                                <td>80 ₽</td>
                                <Nav.Link >
                                    <X color="black" size={25} />
                                </Nav.Link>
                                </tr>
                            </tbody>
                            </Table>
                        </Row>
                        <Row>
                        <Button className="cartButton" variant="warning">Оформить заказ</Button>
                        </Row>
                    </Container>
                </Container>
            </>
        )
    }


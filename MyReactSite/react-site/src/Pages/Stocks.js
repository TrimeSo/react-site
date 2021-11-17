import React, { Component } from 'react';
import {Container, Row, CardGroup, Card} from 'react-bootstrap';
import Footer from '../Components/Footer';

export default class Stocks extends Component {
    render() {
        return (
            <>
                <Container>
                    <h1 className="text-center hTitle">Акции и скидки</h1>
                    <Row>
                    <CardGroup>
                        <Card className="m-3">
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/5b/f5/b4/5bf5b45cd4e7f2c505ac6ff537d07655.jpg"/>
                            <Card.Body>
                                <Card.Title>Пицца в Хэллоуин!</Card.Title>
                                <Card.Text>
                                    Не пропустите нашу ужасающе-выгодную акцию на Хэллоуин. Только 30 октября. 
                                    Купи пиццу в костюме на Хэллоуин и получи кофе в подарок! 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="m-3">
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/5b/f5/b4/5bf5b45cd4e7f2c505ac6ff537d07655.jpg"/>
                            <Card.Body>
                                <Card.Title>Пицца в Хэллоуин!</Card.Title>
                                <Card.Text>
                                    Не пропустите нашу ужасающе-выгодную акцию на Хэллоуин. Только 30 октября. 
                                    Купи пиццу в костюме на Хэллоуин и получи кофе в подарок! 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    </Row>
                    <Row>
                    <CardGroup>
                        <Card className="m-3">
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/5b/f5/b4/5bf5b45cd4e7f2c505ac6ff537d07655.jpg"/>
                            <Card.Body>
                                <Card.Title>Пицца в Хэллоуин!</Card.Title>
                                <Card.Text>
                                    Не пропустите нашу ужасающе-выгодную акцию на Хэллоуин. Только 30 октября. 
                                    Купи пиццу в костюме на Хэллоуин и получи кофе в подарок! 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="m-3">
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/5b/f5/b4/5bf5b45cd4e7f2c505ac6ff537d07655.jpg"/>
                            <Card.Body>
                                <Card.Title>Пицца в Хэллоуин!</Card.Title>
                                <Card.Text>
                                    Не пропустите нашу ужасающе-выгодную акцию на Хэллоуин. Только 30 октября. 
                                    Купи пиццу в костюме на Хэллоуин и получи кофе в подарок! 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    </Row>
                </Container>
                <Footer/>
            </>
        )
    }
}

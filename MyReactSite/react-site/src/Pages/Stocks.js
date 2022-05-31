import React, { Component } from 'react';
import {Container, Row, CardGroup, Card} from 'react-bootstrap';
import Footer from '../Components/Footer';
import stocks from '../stocks.json';

export default function Stocks(){

        return (
            <>
                <Container>
                    <h1 className="text-center hTitle">Акции и скидки</h1>
                    <Row lg={2} sm={2} md={2} xs={1}>
                    {stocks.stocks.map((stocks) => (
                    <CardGroup>
                        <Card className="m-3">
                        <Card.Img variant="top" src={stocks.image}/>
                            <Card.Body>
                                <Card.Title><strong>{stocks.name}</strong></Card.Title>
                                <Card.Text>
                                {stocks.descrip} 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
  ))}
                    </Row>
                </Container>
                <Footer/>
            </>
        )
    }


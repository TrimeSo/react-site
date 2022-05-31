import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import Footer from '../Components/Footer';

export default class Job extends Component {
    render() {
        return (
            <>
                <Container>
                    <h1 className="text-center hTitle">Вакансии</h1>
                    
                     
                     <Row className='jobList' lg={3} sm={3} md={3} xs={1}>
                  <Col className='divSet'>
                  <Image
                     src="https://static.baza.farpost.ru/v/1624857487664_bulletin"
                     roundedCircle
                     className = "jobImg" />
                  </Col>
                  <Col className='divSet'>
                  <Image
                     src="https://static.baza.farpost.ru/v/1624857487664_bulletin"
                     roundedCircle
                     className = "jobImg" />
                  </Col>
                  <Col className='divSet'>
                  <Image
                     src="https://static.baza.farpost.ru/v/1624857487664_bulletin"
                     roundedCircle
                     className = "jobImg" />
                  </Col>
              </Row>

                    <Row className='jobList'>
                  <Col className='divSet'>
                      <h2>Вкусно</h2>
                      <p>Мы используем только свежие продукты, благодаря чему пиццы становиться вкуснее и сочнее. Вкус и качество - лучшее сочетание!</p>
                  </Col>
                  <Col className='divSet'>
                      <h2>Вкусно</h2>
                      <p>Мы используем только свежие продукты, благодаря чему пиццы становиться вкуснее и сочнее. Вкус и качество - лучшее сочетание!</p>
                  </Col>
                  <Col className='divSet'>
                      <h2>Быстро</h2>
                      <p>Пиццы является быстрым блюдом и идеально подходит для быстрого перекуса, завтрака или любого другого приема пищи! </p>
                  </Col>
              </Row>
                    
                </Container>
                <Footer/>
            </>
        )
    }
}

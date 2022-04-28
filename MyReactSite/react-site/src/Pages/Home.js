import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Col, Row, Image, Button} from 'react-bootstrap';
import Footer from '../Components/Footer';
import './PageSettings.css';
import 'animate.css';
import 'wow.js/dist/wow';
import WOW from 'wow.js';
import pizzaArt from '../assets/98e1d4344dbaca5d08d04fe65b2ebde0.png'





export default function Home() {
    
    new WOW().init();

        return (
            <>
          <CarouselBox />
          
          <Container>
              <Row className='homeDiv'>
                  <Col lg={8} md={8}>
                  <Image
                     src="https://kyky.org/uploads/post/photo/5228/DSC_6747.jpg"
                     fluid
                     className = "photo imgSetLeft wow animate__animated animate__fadeInLeft" />
                  </Col>
                  <Col lg={4} md={4} className = "wow animate__animated animate__fadeInRight"> 
                  <h2 className='text-center homeText'>С нами работают только лучшие повора из всего мира!</h2>
                  </Col>
              </Row>

              <Row className='homeDiv'>
                  <Col lg={4} md={4}> 
                  <h2 className='text-center homeText wow animate__animated animate__fadeInLeft'>Мы выбираем только лучшие и свежи ингредиенты!</h2>
                  </Col>
                  <Col lg={8} md={8} className = 'homeImg'>
                  <Image
                     src="https://kartinkin.net/uploads/posts/2021-03/1617157331_17-p-ingredienti-dlya-pitstsi-krasivo-22.jpg"
                     fluid
                     className = "photo imgSetRight wow animate__animated animate__fadeInRight" />
                  </Col>
              </Row>

              <Row className='rowSet wow animate__fadeInUp animate__animated'>
                  <Col className='divSet'>
                      <h2>Вкусно</h2>
                      <p>Мы используем только свежие продукты, благодаря чему пиццы становиться вкуснее и сочнее. Вкус и качество - лучшее сочетание!</p>
                  </Col>
                  <Col className='divSet'>
                      <h2>Быстро</h2>
                      <p>Пиццы является быстрым блюдом и идеально подходит для быстрого перекуса, завтрака или любого другого приема пищи! </p>
                  </Col>
                  <Col className='divSet'>
                      <h2>С любовью</h2>
                      <p>Наши повора готовят блюда с любовью для вас, чтобы вы улыбались после каждого кусочка нашей пиццы!</p>
                  </Col>
              </Row>

              <Row className='artRow'>
                 <Image 
                    src={pizzaArt}
                    alt='pA'
                    className='artSet wow animate__fadeInUp animate__animated'
                 />
              </Row>

              <Row className='textRow'>
                  <h1 className='text-center wow animate__rubberBand animate__animated'>ПРИЯТНОГО АППЕТИТА!</h1>
              </Row>

           </Container>
           <Footer />
            </>
        )
    }


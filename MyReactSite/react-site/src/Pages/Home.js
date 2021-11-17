import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Card, CardGroup, Button} from 'react-bootstrap';
import Footer from '../Components/Footer';
import './PageSettings.css';



export default class Home extends Component {
    render() {
        return (
            <>
          <CarouselBox />
          
          <Container>
               <h1 className='text-center m-4'>Новости</h1>
               <CardGroup>
                   <Card className='m-3'>
                       <Card.Img
                        variant="top"
                        src="https://im0-tub-ru.yandex.net/i?id=43f1dbdba55d852f98b86945544c0498-l&n=13"
                       />
                       <Card.Body>
                           <Card.Title>Пицца в подарок!</Card.Title>
                          
                           <Button variant="warning">Подробнее</Button>
                       </Card.Body>
                   </Card>
                  
                   <Card className='m-3'>
                       <Card.Img
                        variant="top"
                        src="https://storage.googleapis.com/2b-ru/1565869637136.jpeg"
                       />
                       <Card.Body>
                           <Card.Title>Попробуйте новую Пеперони плюс!</Card.Title>
                           
                           <Button variant="warning">Подробнее</Button>
                       </Card.Body>
                   </Card>
                   
               </CardGroup>
           </Container>
           <Footer />
            </>
        )
    }
}

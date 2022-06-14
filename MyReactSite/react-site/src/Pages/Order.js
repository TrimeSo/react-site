import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import Footer from '../Components/Footer';

export default function Order() {
  return (
      <>
      <Container>
          <h1 className='text-center'>Доставка и оплата</h1>
    <Row className='wow animate__fadeInUp animate__animated'>
        <div className='orderRow'>
                <Col sm={4} lg={4} md={4}>
                <Image className='orderImg' src='https://images.pexels.com/photos/6691140/pexels-photo-6691140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                <h4 className='text-center'>Принимаем<br/> заказы <br/> с 9:00 до 22:15</h4>
                <hr className='hrOrder'/>
                <p className='text-center'>*Если вы заказали более 10 пицц,<br/> время доставки может измениться. <br/> </p>
                 </Col>
                 <Col sm={4} lg={4} md={4}>
                 <Image className='orderImg' src='https://images.pexels.com/photos/4604668/pexels-photo-4604668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                 <h4 className='text-center'>Осуществляем<br/> доствку <br/> с 10:00 до 23:00</h4>
                 <hr className='hrOrder'/>
                 <p className='text-center'>*Стоимость доставки по городу - 150 руб.</p>
                 </Col>
                 <Col sm={4} lg={4} md={4}>
                 <Image className='orderImg' src='https://images.pexels.com/photos/7621131/pexels-photo-7621131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                 <h4 className='text-center'>При заказе на сумму 1000<br/> рублей и выше доставим <br/> ваш заказ бесплатно.</h4>
                 <hr className='hrOrder'/>
                 <p className='text-center'>*По территории города.</p>
                  </Col>
         </div>
    </Row>

    <Row className='orderUl'>
        <Col sm={4}>
            <ul>
                <h3 className='xText'>Оформить заказ можно:</h3>
                <li>
                    По номеру телефона: 240-75-75.
                </li>
                <li>
                    На сайте.
                </li>
                <li>
                Через мобильное приложение What’s App на номер +7 (951) 007-08-08
                </li>
            </ul>
        </Col>
    </Row>
    <Row className='mt-4 mb-5'>
        <Col sm={4}>
            <ul>
                <h3 className='xText'>Оплатить можно:</h3>
                <li>
                Наличными курьеру или на месте
                </li>
                <li>
                Картой курьеру или на месте
                </li>
            </ul>
        </Col>
    </Row>
        </Container>
        <Footer />
        </>
  )
}

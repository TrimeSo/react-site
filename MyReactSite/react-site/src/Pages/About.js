import React, { Component } from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap';
import './PageSettings.css';
import Footer from '../Components/Footer';

export default class About extends Component {
    render() {
        return (
           <>
           <Container className="heightAboutPage">
                <Row className="marginTopAbout">
                <Col>
                    <Image
                     src="http://www.pizzaplaceparkchester.com/wp-content/uploads/2017/07/pizzaplacepicture.jpg"
                     roundedCircle
                     className = "photo" />
                </Col>
                <Col>
                <h1 className='text-center m-4'>О нас</h1>
                <p>C 2008 года мы делаем настоящую горячую американскую пиццу на пышном тесте каждый день!</p>
                <br></br>
                <p>Ежедневно в 8:15 утра мы начинаем замешивать тесто «на завтра»,
                     ведь идеальное пышное тесто обязательно должно «вызревать» ровно
                      24 часа. Мы используем специально отфильтрованную воду,
                       охлажденную ровно до 4 градусов по Цельсию, муку только высших
                        сортов от поставщиков, которые являются лидерами рынка, и дрожжи, имеющие особый
                     секретный фирменный рецепт, привезенный из Америки в 2008 году.</p>
                     <br></br>
                     <p>После добавления всех ингредиентов мы замешиваем тесто в течение
                          24 мин 30 секунд исключительно вручную, в 2 этапа. Далее тесто
                           делится на отдельные «колобочки», основы для будущих пицц,
                          и отправляется «дозревать» в специальный холодильник на 24 часа.</p>
                </Col>
                </Row>
           </Container>
           <Footer/>
           </>
        )
    }
}

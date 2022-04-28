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
                        <Card.Img variant="top" src="https://okidokivl.ru/cache/gen/633x600_cc%2Fpublic%2Fuploads%2Fimages%2Fd7218e559e39d3707496d734bca80a17_78afe58b0b.jpg?s=BWWid5ZET15XOI08MVOrrg"/>
                            <Card.Body>
                                <Card.Title><strong>ДЕНЬ РОЖДЕНИЯ</strong></Card.Title>
                                <Card.Text>
                                Если вы сделаете заказ в свой день рождения, на ваш счёт будут начислены “двойные баллы”,
                                 то есть 10% от суммы покупки. 
                                 <br></br>
                                 <br></br>
                                 *Акция действует на постоянной основе. 
                                 <br></br>
                                 **Правила начисления и использования баллов могут быть изменены компанией в любой момент в одностороннем порядке.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="m-3">
                        <Card.Img variant="top" src="https://okidokivl.ru/cache/gen/633x600_cc%2Fpublic%2Fuploads%2Fimages%2F846b3ffcc2813d03c391a48e2a023980_8d62e4f471.jpg?s=7TSnkulc0aaSIOQNvXSx4Q"/>
                            <Card.Body>
                                <Card.Title><strong>ВРЕМЯ ЗАВТРАКАТЬ</strong></Card.Title>
                                <Card.Text>
                                «Завтрак с сырниками», включающий в себя: два сырника со сгущенным молоком и
                                 напиток на выбор (чай черный 0,2мл / чай зеленый 0,2 мл / кофе зерновой 0,2 мл), по цене 140 ₽.
                                    <br></br>
                                    <br></br>
                                 *Предложение ограничено по времени: с 10:00 до 12:00, или пока товар есть в наличии. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    </Row>
                    <Row>
                    <CardGroup>
                        <Card className="m-3">
                        <Card.Img variant="top" src="https://okidokivl.ru/cache/gen/633x600_cc%2Fpublic%2Fuploads%2Fimages%2Ffa269e002a63ee2eabf1e9e29b61c687_4b6d8eb02e.jpg?s=xMO76fY8GKaKnksX0SZqxA"/>
                            <Card.Body>
                                <Card.Title><strong>СЛАДКО ЖИТЬ НЕ ЗАПРЕТИШЬ</strong></Card.Title>
                                <Card.Text>
                                Этой весной мы хотим вам напомнить, что «Сладко жить не запретишь!»
                                <br></br>
                                <br></br>
                                Коктейль молочный 500мл – всего за 130 рублей, вместо 169 рублей
                                <br></br>
                                Коктейль молочный 300мл – всего за 89 рублей, вместо 118 рублей
                                <br></br>
                                Мороженное с карамельным или шоколадным топпингом – всего 69 рублей
                                <br></br>
                                Мороженное «Рожок» - всего 21 рубль, вместо 28 рублей. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="m-3">
                        <Card.Img variant="top" src="https://okidokivl.ru/cache/gen/633x600_cc%2Fpublic%2Fuploads%2Fimages%2F8a68b7bc66ed9e13e9b5e3e6368d2042_7aa108f585.jpg?s=-9WKfdygVwYMnVM7lctpEw"/>
                            <Card.Body>
                                <Card.Title><strong>ВЕЧЕРНИЙ ПЕРЕКУС</strong></Card.Title>
                                <Card.Text>
                                Во всех пиццериях каждый вечер с 20:00 действует скидка на кусочки пиццы - 15% (75 рублей, вместо 89 рублей).
                                <br></br>
                                <br></br>
                                *В Акции участвуют пиццы, которые на данный момент есть на витрине кусочками.
                                <br></br>
                                *Срок проведения акции: с 01.02.2022г по 29.06.2022
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

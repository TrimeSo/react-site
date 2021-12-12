import React, { Component } from 'react'
import { Container, Card, CardGroup, Button, Row, Col} from 'react-bootstrap';
import Footer from '../Components/Footer';

export default class Menu extends Component {
    render() {
        return (
            <>
            <Container>
            <h1 className='text-center m-4'>Итальянская пицца</h1>
            <Row lg={4} sm={2} md={3} xs={1}>
            <Col>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://dodopizza-a.akamaihd.net/static/Img/Products/b10dd95184eb49d39a739d75b8cbfeaf_292x292.jpeg"
                    />
                    <Card.Body>
                        <Card.Title>Пепперони</Card.Title>
                        <Card.Text className='cardText'>
                        Пикантная пепперони, увеличенная порция моцареллы, томатный соус
                        </Card.Text>
                        <footer>
                        <div className='cardDiv'>
                            <h4>23₽</h4>
                        </div>
                            <Button className='buttEdit' variant="warning">Добавить в корзину</Button>
                        </footer>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://dodopizza-a.akamaihd.net/static/Img/Products/e8a8ded1f8154d11ab5065dc5208b187_292x292.jpeg"
                    />
                    <Card.Body>
                        <Card.Title>Маргарита</Card.Title>
                        <Card.Text className='cardText'>
                        Увеличенная порция моцареллы, томаты, итальянские травы, томатный соус
                        </Card.Text>
                        <footer>
                        <div className='cardDiv'>
                            <h4>23₽</h4>
                        </div>
                            <Button className='buttEdit' variant="warning">Добавить в корзину</Button>
                        </footer>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://dodopizza-a.akamaihd.net/static/Img/Products/26fa2948b6c74113afb9d09a3262fc26_292x292.jpeg"
                    />
                    <Card.Body>
                        <Card.Title>Грибная</Card.Title>
                        <Card.Text className='cardText'>
                        Шампиньоны, увеличенная порция моцареллы, томатный соус
                        </Card.Text>
                        <footer>
                        <div className='cardDiv'>
                            <h4>23₽</h4>
                        </div>
                            <Button className='buttEdit' variant="warning">Добавить в корзину</Button>
                        </footer>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://dodopizza-a.akamaihd.net/static/Img/Products/4fd8c71e03d24ff6a4d54024bd6c6bec_292x292.jpeg"
                    />
                    <Card.Body>
                        <Card.Title>Вегатарианская</Card.Title>
                        <Card.Text className='cardText'>
                        Шампиньоны, томаты, сладкий перец, красный лук, маслины, кубики брынзы, моцарелла, томатный соус, итальянские травы
                        </Card.Text>
                        <footer>
                        <div className='cardDiv'>
                            <h4>23₽</h4>
                        </div>
                            <Button className='buttEdit' variant="warning">Добавить в корзину</Button>
                        </footer>
                    </Card.Body>
                </Card>
                </Col>
                </Row>
        </Container>

        <Container>
            <h1 className='text-center m-4'>Американская пицца</h1>
                <Row lg={4} sm={2} md={3} xs={1}>
                    <Col>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/679924dc-e4fd-45fd-aceb-be139f265425.jpg"
                    />
                    <Card.Body>
                        <Card.Title>Ветчинная</Card.Title>
                        <Card.Text className='cardText'>
                        Ветчина, моцарелла, соус альфредо
                        </Card.Text>
                        <footer>
                        <div className='cardDiv'>
                            <h4>23₽</h4>
                        </div>
                            <Button className='buttEdit' variant="warning">Добавить в корзину</Button>
                        </footer>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://dodopizza-a.akamaihd.net/static/Img/Products/dd4b719911d048e0b05c3e4219880e64_292x292.jpeg"
                    />
                    <Card.Body>
                        <Card.Title>Классическая</Card.Title>
                        <Card.Text className='cardText'>
                        Аппетитная ветчина и кусочки свежих томатов, заправленные оригинальным соусом с пряными травами, запекаются под ароматным сыром моцарелла 
                        </Card.Text>
                        <footer>
                        <div className='cardDiv'>
                            <h4>23₽</h4>
                        </div>
                            <Button className='buttEdit' variant="warning">Добавить в корзину</Button>
                        </footer>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://dodopizza-a.akamaihd.net/static/Img/Products/3c9d32eb9de14f8db32da72128c1e4e6_292x292.jpeg"
                    />
                    <Card.Body>
                        <Card.Title>4 сыра</Card.Title>
                        <Card.Text className='cardText'>
                        Сыр блю чиз, сыры чеддер и пармезан, моцарелла, соус альфредо
                        </Card.Text>
                        <footer>
                        <div className='cardDiv'>
                            <h4>23₽</h4>
                        </div>
                            <Button className='buttEdit' variant="warning">Добавить в корзину</Button>
                        </footer>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://dodopizza-a.akamaihd.net/static/Img/Products/78e7d6286b3c4b4b9882e9422b8bdf01_292x292.jpeg"
                    />
                    <Card.Body>
                        <Card.Title>4 сезона</Card.Title>
                        <Card.Text className='cardText'>
                        Увеличенная порция моцареллы, ветчина, пикантная пепперони, кубики брынзы, томаты, шампиньоны, итальянские травы, томатный соус
                        </Card.Text>
                        <footer>
                        <div className='cardDiv'>
                            <h4>23₽</h4>
                        </div>
                            <Button className='buttEdit' variant="warning">Добавить в корзину</Button>
                        </footer>
                    </Card.Body>
                </Card>
                </Col>
                </Row>
            </Container>

            <Container>
            <h1 className='text-center m-4'>Хит сезона</h1>
            <Row lg={4} sm={2} md={3} xs={1}>
                <Col>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://dodopizza-a.akamaihd.net/static/Img/Products/9bd4c76d4c2548c090ac6ae5a1eabae6_292x292.jpeg"
                    />
                    <Card.Body>
                        <Card.Title>Песто</Card.Title>
                        <Card.Text className='cardText'>
                        Цыпленок, соус песто, кубики брынзы, томаты, моцарелла, соус альфредо
                        </Card.Text>
                        <footer>
                        <div className='cardDiv'>
                            <h4>23₽</h4>
                        </div>
                            <Button className='buttEdit' variant="warning">Добавить в корзину</Button>
                        </footer>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://dodopizza-a.akamaihd.net/static/Img/Products/7a0fac09c2264f8e8928f205c7acb5cf_292x292.jpeg"
                    />
                    <Card.Body>
                        <Card.Title>Карбонара</Card.Title>
                        <Card.Text className='cardText'>
                        Бекон, сыры чеддер и пармезан, моцарелла, томаты, красный лук, чеснок, соус альфредо, итальянские травы
                        </Card.Text>
                        <footer>
                        <div className='cardDiv'>
                            <h4>23₽</h4>
                        </div>
                            <Button className='buttEdit' variant="warning">Добавить в корзину</Button>
                        </footer>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://dodopizza-a.akamaihd.net/static/Img/Products/a2407468a4094e498d258f65bffa4c46_292x292.jpeg"
                    />
                    <Card.Body>
                        <Card.Title>Аррива!</Card.Title>
                        <Card.Text className='cardText'>
                        Цыпленок, острая чоризо, соус бургер, сладкий перец, красный лук, томаты, моцарелла, соус ранч, чеснок
                        </Card.Text>
                        <footer>
                        <div className='cardDiv'>
                            <h4>23₽</h4>
                        </div>
                            <Button className='buttEdit' variant="warning">Добавить в корзину</Button>
                        </footer>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://dodopizza-a.akamaihd.net/static/Img/Products/40c9e7c8c01d4b29a816f2fd65d5bb60_292x292.jpeg"
                    />
                    <Card.Body>
                        <Card.Title>Пицца-Чизбургер</Card.Title>
                        <Card.Text className='cardText'>
                        Мясной соус болоньезе, соус бургер, соленые огурчики, томаты, красный лук, моцарелла
                        </Card.Text>
                        <footer>
                        <div className='cardDiv'>
                            <h4>23₽</h4>
                        </div>
                            <Button className='buttEdit' variant="warning">Добавить в корзину</Button>
                        </footer>
                    </Card.Body>
                </Card>
                </Col>
                </Row>
            </Container>

            <Container>
            <h1 className='text-center m-4'>Напитки</h1>
            <Row lg={4} sm={2} md={3} xs={1}>
                <Col>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://dodopizza-a.akamaihd.net/static/Img/Products/646062734a454f6c9c8b8992846d478a_292x292.jpeg"
                    />
                    <Card.Body>
                        <Card.Title>Coca-Cola-Zero</Card.Title>
                        <Card.Text className='cardText'>
                        0,5 л
                        </Card.Text>
                        <footer>
                            <Row lg={2}>
                        <Col>
                            <h4>23₽</h4>
                        </Col>
                        <Col>
                            <Button className='' variant="warning">Добавить в корзину</Button>
                        </Col>
                            </Row>
                        </footer>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://dodopizza-a.akamaihd.net/static/Img/Products/b3e62e857ee54390a90ae320cab686a5_292x292.jpeg"
                    />
                    <Card.Body>
                        <Card.Title>2 Coca-Cola по суперцене</Card.Title>
                        <Card.Text className='cardText'>
                        Две классические Coca-Cola по 0,5 литров по выгодной цене, 0,5 л
                        </Card.Text>
                        <footer>
                        <div className='cardDiv'>
                            <h4>23₽</h4>
                        </div>
                            <Button className='buttEdit' variant="warning">Добавить в корзину</Button>
                        </footer>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://dodopizza-a.akamaihd.net/static/Img/Products/c99ec0985f37456a8084928dfe8ed379_292x292.jpeg"
                    />
                    <Card.Body>
                        <Card.Title>Coca-Cola</Card.Title>
                        <Card.Text className='cardText'>
                        0,5 л
                        </Card.Text>
                        <footer>
                        <div className='cardDiv'>
                            <h4>23₽</h4>
                        </div>
                            <Button className='buttEdit' variant="warning">Добавить в корзину</Button>
                        </footer>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://dodopizza-a.akamaihd.net/static/Img/Products/6fadad5d935948848a10c3046e55f9d5_292x292.jpeg"
                    />
                    <Card.Body>
                        <Card.Title>Coca-Cola-Lime</Card.Title>
                        <Card.Text className='cardText'>
                        0,5 л
                        </Card.Text>
                        <footer>
                        <div className='cardDiv'>
                            <h4>23₽</h4>
                        </div>
                            <Button className='buttEdit' variant="warning">Добавить в корзину</Button>
                        </footer>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://dodopizza-a.akamaihd.net/static/Img/Products/bc87655534d44acebcbbffab2ee0b822_292x292.jpeg"
                    />
                    <Card.Body>
                        <Card.Title>Американо</Card.Title>
                        <Card.Text className='cardText'>
                        Горячий напиток на основе эспрессо #поворотныймомент, 0,4 л
                        </Card.Text>
                        <footer>
                        <div className='cardDiv'>
                            <h4>23₽</h4>
                        </div>
                            <Button className='buttEdit' variant="warning">Добавить в корзину</Button>
                        </footer>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://dodopizza-a.akamaihd.net/static/Img/Products/5972d1b78fec44b4a3fae17019c269cf_292x292.jpeg"
                    />
                    <Card.Body>
                        <Card.Title>Кофе Капучино</Card.Title>
                        <Card.Text className='cardText'>
                        Горячий напиток на основе эспрессо со вспененным молоком #поворотныймомент, 0,4 л
                        </Card.Text>
                        <footer>
                        <div className='cardDiv'>
                            <h4>23₽</h4>
                        </div>
                            <Button className='buttEdit' variant="warning">Добавить в корзину</Button>
                        </footer>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://dodopizza-a.akamaihd.net/static/Img/Products/870e47d7c0c6409eb3208d1e1f39d7fc_292x292.jpeg"
                    />
                    <Card.Body>
                        <Card.Title>Кофе Латте</Card.Title>
                        <Card.Text className='cardText'>
                        Горячий напиток на основе эспрессо с увеличенной порцией молока #поворотныймомент, 0,4 л
                        </Card.Text>
                        <footer>
                        <div className='cardDiv'>
                            <h4>23₽</h4>
                        </div>
                            <Button className='buttEdit' variant="warning">Добавить в корзину</Button>
                        </footer>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://dodopizza-a.akamaihd.net/static/Img/Products/17a0ea9b6f03429abf525d2d3fe6ab74_292x292.jpeg"
                    />
                    <Card.Body>
                        <Card.Title>Кофе Ореховый латте</Card.Title>
                        <Card.Text className='cardText'>
                        Горячий напиток на основе эспрессо с увеличенной порцией молока и сиропом со вкусом фундука #поворотныймомент, 0,3 л
                        </Card.Text>
                        <footer>
                        <div className='cardDiv'>
                            <h4>23₽</h4>
                        </div>
                            <Button className='buttEdit' variant="warning">Добавить в корзину</Button>
                        </footer>
                    </Card.Body>
                </Card>
                </Col>
                </Row>
        </Container>
            <Footer/>
        </>
        )
    }
}

import React, { Component, useState } from 'react'
import { Container, Card, Button, Row, Col, Nav, Table} from 'react-bootstrap';
import Footer from '../Components/Footer';
import { X } from 'react-bootstrap-icons';


export default function Menu() {

    const PAGE_PRODUCTS = 'products';
    const PAGE_CART = 'cart';
    
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCTS)
    
    const [italianPizza] = useState([
        {
            name: 'Пепперони',
            cost: '223₽',
            image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/b10dd95184eb49d39a739d75b8cbfeaf_292x292.jpeg',
            desc: 'Пикантная пепперони, увеличенная порция моцареллы, томатный соус'
        },

        {
            name: 'Маргарита',
            cost: '300р',
            image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/e8a8ded1f8154d11ab5065dc5208b187_292x292.jpeg',
            desc: 'Увеличенная порция моцареллы, томаты, итальянские травы, томатный соус'
        },

        {
            name: 'Грибная',
            cost: '320р',
            image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/26fa2948b6c74113afb9d09a3262fc26_292x292.jpeg',
            desc: 'Шампиньоны, увеличенная порция моцареллы, томатный соус'
        },

        {
            name: 'Вегатарианская',
            cost: '280р',
            image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/4fd8c71e03d24ff6a4d54024bd6c6bec_292x292.jpeg',
            desc: 'Шампиньоны, томаты, сладкий перец, красный лук, маслины, кубики брынзы, моцарелла'
        },

    ]);

    const [americanPizza] = useState([
        {
            name: 'Ветчинная',
            cost: '250₽',
            image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/679924dc-e4fd-45fd-aceb-be139f265425.jpg',
            desc: 'Ветчина, моцарелла, соус альфредо, томатный соус, пряные травы, свежие томаты'
        },

        {
            name: 'Сливочная курочка',
            cost: '300р',
            image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/dd4b719911d048e0b05c3e4219880e64_292x292.jpeg',
            desc: 'Аппетитное куриное филе, кусочки свежих томатов, томатный соус, пряные травы, сыр моцарелла'
        },

        {
            name: '4 сыра',
            cost: '310р',
            image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/3c9d32eb9de14f8db32da72128c1e4e6_292x292.jpeg',
            desc: 'Сыр блю чиз, сыры чеддер и пармезан, моцарелла, соус альфредо'
        },

        {
            name: '4 сезона',
            cost: '280р',
            image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/78e7d6286b3c4b4b9882e9422b8bdf01_292x292.jpeg',
            desc: 'Увеличенная порция моцареллы, ветчина, пепперони, брынза, томаты, шампиньоны'
        },

    ]);

    const [hitPizza] = useState([
        {
            name: 'Песто',
            cost: '350₽',
            image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/9bd4c76d4c2548c090ac6ae5a1eabae6_292x292.jpeg',
            desc: 'Цыпленок, соус песто, кубики брынзы, томаты, моцарелла, соус альфредо'
        },

        {
            name: 'Карбонара',
            cost: '300р',
            image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/7a0fac09c2264f8e8928f205c7acb5cf_292x292.jpeg',
            desc: 'Бекон, сыры чеддер и пармезан, моцарелла, томаты, красный лук, соус альфредо'
        },

        {
            name: 'Аррива!',
            cost: '310',
            image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/a2407468a4094e498d258f65bffa4c46_292x292.jpeg',
            desc: 'Цыпленок, острая чоризо, соус бургер, сладкий перец, красный лук, томаты, моцарелла'
        },

        {
            name: 'Пицца-Чизбургер',
            cost: '280р',
            image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/40c9e7c8c01d4b29a816f2fd65d5bb60_292x292.jpeg',
            desc: 'Мясной соус болоньезе, соус бургер, соленые огурчики, томаты, красный лук, моцарелла'
        },

    ]);

        const addToCart = (product) => {
            setCart([...cart, { ...product }]);
        };

        const removeFromCart = (productToRemove) => {
            setCart(
                cart.filter((product) => product !== productToRemove)
            );
        }
        
        const navigateTo = (nextPage) => {
            setPage(nextPage);
        };

        let totalPrice = 0;

       

     

        

        const renderCart = () => (
            <>
            <Container className='cart'>
                <Button onClick={() => navigateTo(PAGE_PRODUCTS)}>обратно</Button>
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
                        {cart.map((product, idx) => {
                            totalPrice += Number(product.cost) * (product.idx);
                            return(
                        <tbody>
                            <tr>
                            <td className='costField'>{product.name}</td>
                            <td>{product.cost}</td>
                            <Nav.Link >
                                <X color="black" onClick={() => removeFromCart(product)} size={25} />
                            </Nav.Link>
                            </tr>
                        </tbody>
                        )})}
                        </Table>
                    </Row>
                    <Row>
                        <h1>Сумма:{totalPrice}</h1>
                    <Button className="cartButton" variant="warning">Оформить заказ</Button>
                    </Row>
                </Container>
            </Container>
        </>
        );

        const renderMenu = () => (
            <>
            <Button onClick={() => navigateTo(PAGE_CART)}>корзина</Button>
            <Container className='products'>
            <h1 className='text-center m-4'>Итальянская пицца</h1>
            <Row lg={4} sm={2} md={3} xs={1}>
            {italianPizza.map((product, idx) => (
                <Col className='product' key={idx}>
                    <Card className='m-3'>
                        <Card.Img
                         variant="top"
                         src={product.image}
                         alt={product.name}
                        />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text className='cardText'>{product.desc}</Card.Text>
                            <footer>
                            <div className='cardDiv'>
                                <h4>{product.cost}</h4>
                            </div>
                                <Button className='buttEdit' onClick={() => addToCart(product)} variant="warning">Добавить в корзину</Button>
                            </footer>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
            <h1 className='text-center m-4'>Американская пицца</h1>
            <Row lg={4} sm={2} md={3} xs={1}>
            {americanPizza.map((product) => (
                <Col>
                    <Card className='m-3'>
                        <Card.Img
                         variant="top"
                         src={product.image}
                         alt={product.name}
                        />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text className='cardText'>{product.desc}</Card.Text>
                            <footer>
                            <div className='cardDiv'>
                                <h4>{product.cost}</h4>
                            </div>
                                <Button className='buttEdit' onClick={() => addToCart(product)} variant="warning">Добавить в корзину</Button>
                            </footer>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>

            <h1 className='text-center m-4'>Хит сезона</h1>
            <Row lg={4} sm={2} md={3} xs={1}>
            {hitPizza.map((product) => (
                <Col>
                    <Card className='m-3'>
                        <Card.Img
                         variant="top"
                         src={product.image}
                         alt={product.name}
                        />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text className='cardText'>{product.desc}</Card.Text>
                            <footer>
                            <div className='cardDiv'>
                                <h4>{product.cost}</h4>
                            </div>
                                <Button className='buttEdit' onClick={() => addToCart(product)} variant="warning">Добавить в корзину</Button>
                            </footer>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
            </Container>
            <Footer/>
        </>

        );


        return (
            <div>
            {page === PAGE_PRODUCTS && renderMenu()}
            {page === PAGE_CART && renderCart()}
            </div>

            /*
            
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
                        Бекон, сыры чеддер и пармезан, моцарелла, томаты, красный лук, соус альфредо
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
                        Цыпленок, острая чоризо, соус бургер, сладкий перец, красный лук, томаты, моцарелла
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
                     src="https://dodopizza-a.akamaihd.net/static/Img/Products/4dde423fc98f4c01a3862917ef7bcb25_1875x1875.jpeg"
                    />
                    <Card.Body>
                        <Card.Title>Coca-Cola Vanilla</Card.Title>
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
                         0,4 л
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
                         0,4 л
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
                         0,4 л
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
                        <Card.Title>Ореховый латте</Card.Title>
                        <Card.Text className='cardText'>
                         0,3 л
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
        */
        
        )
    }

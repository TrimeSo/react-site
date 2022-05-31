import React, { Component, useState } from 'react'
import { Container, Card, Button, Row, Col, Nav, Table, Form, Alert} from 'react-bootstrap';
import Footer from '../Components/Footer';
import { X } from 'react-bootstrap-icons';
import { PlusSquare } from 'react-bootstrap-icons';
import { DashSquare } from 'react-bootstrap-icons';
import products from '../products.json';
import Cookie from 'js-cookie';

//ИНКРЕМЕНТ И ДИКРЕМЕНТ КОРЗИНЫ

export default function Menu() {

    const PAGE_PRODUCTS = 'products';
    const PAGE_CART = 'cart';
    
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCTS)
    

        const addToCart = (product) => {
            setCart([...cart, { ...product }]);
            setCookie('product', JSON.stringify(products.cart))
        };

        const removeFromCart = (productToRemove) => {
            setCart(
                cart.filter((product) => product !== productToRemove)
            );
            removeCookie('product');
        }
        
        const navigateTo = (nextPage) => {
            setPage(nextPage);
        };

        const plusProduct = (productToPlus) => {
            setCart(
                cart.filter((product) => product.quantity == productToPlus.quantity++)
            );
        }
        const minusProduct = (productToMinus) => {
            setCart(
                cart.filter((product) => product.quantity == productToMinus.quantity--)
            );
        }

        const setCookie = (cookieName, product)=>{
            Cookie.set(cookieName, product,{
            expires:1,
            secure:true,
            path:'/'
        })};

        const getCookie = (cookieName)=>{
            return Cookie.get(cookieName);
        };

        const removeCookie = (cookieName)=>{
            return Cookie.remove(cookieName);
        };


        let totalPrice = 0;


                
        const renderCart = () => (
            <>
                <div className='cartBut'>
                <Button className='but' onClick={() => navigateTo(PAGE_PRODUCTS)}>обратно</Button>
                </div>
            <Container className='cart'>
                <h1 className="text-center hTitle">Корзина</h1>
                <Container className="cartMargin">
                    <Row>
                    <Table className="justify-content-center">
                        <thead>
                            <tr>
                            <th>Еда</th>
                            <th>Цена</th>
                            <th>Количество</th>
                            </tr>
                        </thead>
                        {cart.map((product, idx) => {
                            totalPrice += product.cost * product.quantity;
                            return(
                        <tbody>
                            <tr>
                            <td className='costField'>{product.name}</td>
                            <td>{product.cost}₽</td>
                            <td>{product.quantity}</td>
                            <Nav.Link >
                                <DashSquare color="black" onClick={() => minusProduct(product)} size={25} alt="минус" />
                                <PlusSquare color="black" onClick={() => plusProduct(product)} size={25} alt="плюс" />
                                <X color="black" onClick={() => removeFromCart(product)} size={25} alt="удалить" />
                            </Nav.Link>
                            </tr>
                        </tbody>
                        )})}
                        </Table>
                    </Row>
                    <Row>
                    
                    <Form className='cartForm'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Промокод</Form.Label>
                            <Form.Control type="text" placeholder="Введите ваш промокод..." />
                        </Form.Group>

                        <Form.Group className="mb-3 radioBut" controlId="formBasicCheckbox">
                            <Col>
                            <Form.Check type="checkbox" label="Самовызов" />
                            </Col>
                            <Col>
                            <Form.Check type="checkbox" label="Доставка"  />
                            </Col>
                        </Form.Group>
                        </Form>
                        <div className='total'>
                        <h1>Сумма:{totalPrice}</h1>
                        <hr className='hrSet'/>
                    <Button className="cartButton" href='/' variant="warning" type="submit" >Оформить заказ</Button>
                        </div>
                    </Row>
                </Container>
            </Container>
        </>
        );

        const renderMenu = () => (
            <>
            <div className='cartBut'>
            <Button className='but' onClick={() => navigateTo(PAGE_CART)}>корзина</Button>
            </div>
            <Container className='products'>
            <h1 className='text-center m-4'>Итальянская пицца</h1>
            <Row lg={4} sm={2} md={3} xs={1}>
            {products.italianPizza.map((product, idx) => (
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
                                <h4>{product.cost}₽</h4>
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
            {products.americanPizza.map((product) => (
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
                                <h4>{product.cost}₽</h4>
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
            {products.hitPizza.map((product) => (
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
                                <h4>{product.cost}₽</h4>
                            </div>
                                <Button className='buttEdit' onClick={() => addToCart(product)} variant="warning">Добавить в корзину</Button>
                            </footer>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>

            <h1 className='text-center m-4'>Напитки</h1>
            <Row lg={4} sm={2} md={3} xs={1}>
            {products.drinks.map((product) => (
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
                                <h4>{product.cost}₽</h4>
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

        
        )
    }

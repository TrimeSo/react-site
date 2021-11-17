import React, { Component } from 'react'
import { Container, Card, CardGroup, Button} from 'react-bootstrap';
import Footer from '../Components/Footer';

export default class Menu extends Component {
    render() {
        return (
            <>
            <Container>
            <h1 className='text-center m-4'>Американская пицца</h1>
            <CardGroup>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://simpatio-pizza.ru/wp-content/uploads/2021/06/%D0%BF%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8-min-2048x2048.jpg"
                    />
                    <Card.Body>
                        <Card.Title>Пеперони</Card.Title>
                        <Card.Text>
                            Afjbdsfbsdkf bdfsdb kbdf hbhdfbdfbh h f. 
                            Fsd fsdfds fdsfds fdsf sdfsd.
                        </Card.Text>
                        <Button variant="warning">Добавить в корзину</Button>
                    </Card.Body>
                </Card>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614548260_73-p-pitstsa-na-belom-fone-110.png"
                    />
                    <Card.Body>
                        <Card.Title>Маргарита</Card.Title>
                        <Card.Text>
                            Afjbdsfbsdkf bdfsdb kbdf hbhdfbdfbh h f. 
                            Fsd fsdfds fdsfds fdsf sdfsd.
                        </Card.Text>
                        <Button variant="warning">Добавить в корзину</Button>
                    </Card.Body>
                </Card>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://osetinskie-pirogi.cdnvideo.ru/images/foto/picca_gribnaya_490.jpg"
                    />
                    <Card.Body>
                        <Card.Title>Грибная</Card.Title>
                        <Card.Text>
                            Afjbdsfbsdkf bdfsdb kbdf hbhdfbdfbh h f. 
                            Fsd fsdfds fdsfds fdsf sdfsd.
                            FDSFDF fdsh dhfds g.
                            Sdf dsf ds fds fddd d dfdsfs.
                        </Card.Text>
                        <Button variant="warning">Добавить в корзину</Button>
                    </Card.Body>
                </Card>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://static.tildacdn.com/tild3434-3936-4730-b030-336438646661/photo.png"
                    />
                    <Card.Body>
                        <Card.Title>Вегатарианская</Card.Title>
                        <Card.Text>
                            Afjbdsfbsdkf bdfsdb kbdf hbhdfbdfbh h f. 
                            Fsd fsdfds fdsfds fdsf sdfsd.
                        </Card.Text>
                        <Button variant="warning">Добавить в корзину</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>

        <Container>
            <h1 className='text-center m-4'>Итальянская пицца</h1>
            <CardGroup>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://62.2233747.ru/upload/shop_1/2/3/6/item_236/shop_property_file_236_79.png"
                    />
                    <Card.Body>
                        <Card.Title>Ветчинная</Card.Title>
                        <Card.Text>
                            Afjbdsfbsdkf bdfsdb kbdf hbhdfbdfbh h f. 
                            Fsd fsdfds fdsfds fdsf sdfsd.
                        </Card.Text>
                        <Button variant="warning">Добавить в корзину</Button>
                    </Card.Body>
                </Card>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614548260_73-p-pitstsa-na-belom-fone-110.png"
                    />
                    <Card.Body>
                        <Card.Title>Маргарита</Card.Title>
                        <Card.Text>
                            Afjbdsfbsdkf bdfsdb kbdf hbhdfbdfbh h f. 
                            Fsd fsdfds fdsfds fdsf sdfsd.
                        </Card.Text>
                        <Button variant="warning">Добавить в корзину</Button>
                    </Card.Body>
                </Card>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://static.tildacdn.com/tild6338-6233-4665-b262-303235613332/_.jpg"
                    />
                    <Card.Body>
                        <Card.Title>Грибная</Card.Title>
                        <Card.Text>
                            Afjbdsfbsdkf bdfsdb kbdf hbhdfbdfbh h f. 
                            Fsd fsdfds fdsfds fdsf sdfsd.
                            FDSFDF fdsh dhfds g.
                            Sdf dsf ds fds fddd d dfdsfs.
                        </Card.Text>
                        <Button variant="warning">Добавить в корзину</Button>
                    </Card.Body>
                </Card>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://static.tildacdn.com/tild3434-3936-4730-b030-336438646661/photo.png"
                    />
                    <Card.Body>
                        <Card.Title>Вегатарианская</Card.Title>
                        <Card.Text>
                            Afjbdsfbsdkf bdfsdb kbdf hbhdfbdfbh h f. 
                            Fsd fsdfds fdsfds fdsf sdfsd.
                        </Card.Text>
                        <Button variant="warning">Добавить в корзину</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
            </Container>

            <Container>
            <h1 className='text-center m-4'>Хит сезона</h1>
            <CardGroup>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://xn----7sbbajk8bthccgnljq.xn--p1ai/wp-content/uploads/2021/04/%D1%81%D1%8B%D1%80%D0%BD%D0%B0%D1%8F.png"
                    />
                    <Card.Body>
                        <Card.Title>Четыре сыра</Card.Title>
                        <Card.Text>
                            Afjbdsfbsdkf bdfsdb kbdf hbhdfbdfbh h f. 
                            Fsd fsdfds fdsfds fdsf sdfsd.
                        </Card.Text>
                        <Button variant="warning">Добавить в корзину</Button>
                    </Card.Body>
                </Card>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://batutto.com/pi/2/3/90c493cfee05a23f2118949fe945e4_920.jpg"
                    />
                    <Card.Body>
                        <Card.Title>Овощная</Card.Title>
                        <Card.Text>
                            Afjbdsfbsdkf bdfsdb kbdf hbhdfbdfbh h f. 
                            Fsd fsdfds fdsfds fdsf sdfsd.
                        </Card.Text>
                        <Button variant="warning">Добавить в корзину</Button>
                    </Card.Body>
                </Card>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://im0-tub-ru.yandex.net/i?id=ac4c07045f51af36dbadcd1f4460a7f4&n=13"
                    />
                    <Card.Body>
                        <Card.Title>Каприччиоза</Card.Title>
                        <Card.Text>
                            Afjbdsfbsdkf bdfsdb kbdf hbhdfbdfbh h f. 
                            Fsd fsdfds fdsfds fdsf sdfsd.
                            FDSFDF fdsh dhfds g.
                            Sdf dsf ds fds fddd d dfdsfs.
                        </Card.Text>
                        <Button variant="warning">Добавить в корзину</Button>
                    </Card.Body>
                </Card>
                <Card className='m-3'>
                    <Card.Img
                     variant="top"
                     src="https://im0-tub-ru.yandex.net/i?id=05e3865063015b6fcfafc7621fee9df7&n=13"
                    />
                    <Card.Body>
                        <Card.Title>Морская</Card.Title>
                        <Card.Text>
                            Afjbdsfbsdkf bdfsdb kbdf hbhdfbdfbh h f. 
                            Fsd fsdfds fdsfds fdsf sdfsd.
                        </Card.Text>
                        <Button variant="warning">Добавить в корзину</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
            </Container>
            <Footer/>
        </>
        )
    }
}

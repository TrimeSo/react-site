import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Footer from '../Components/Footer';


export default function gMap() {
  
  return (
    <>
    <Container>
      <h1 className='text-center'>Наши кафе</h1>
    <YMaps>
    <div className='mapSet'>
      <Row lg={2} sm={2} md={2} xs={1}>
        <Col className='mapMarg'>
      <h2>Москва</h2>
      <Map defaultState={{ center: [55.770846, 37.597001], zoom: 13 }}>
        <Placemark geometry={[55.770846, 37.597001]}/>
      </Map>
      </Col>
      <Col className='mapMarg'>
      <h2>Омск</h2>
      <Map defaultState={{ center: [54.965202, 73.395620], zoom: 13 }}>
        <Placemark geometry={[54.965202, 73.395620]}/>
      </Map>
      </Col>
        <Col>
        <h2>Владивосток</h2>
      <Map defaultState={{ center: [43.122123, 131.904448], zoom: 13 }}>
        <Placemark geometry={[43.122123, 131.904448]}/>
      </Map>
      </Col>
      <Col>
      <h2>Хабаровск</h2>
      <Map defaultState={{ center: [48.489354, 135.061703], zoom: 13 }}>
        <Placemark geometry={[48.489354, 135.061703]}/>
      </Map>
      </Col>
      </Row>
    </div>
  </YMaps>
  </Container>
  <Footer />
  </>
  )
}

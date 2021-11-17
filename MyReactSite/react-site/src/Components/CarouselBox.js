import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import pizza1 from '../assets/pexels-brett-jordan-825661.jpg'
import pizza2 from '../assets/pexels-edward-eyer-1049626.jpg'
export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
          <Carousel.Item>
              <img
                className="d-block w-100"
                src={ pizza1 }
                alt="p1"
                height="550px"
              />
             <Carousel.Caption>
                  <h3>Pizza</h3>
                  <p>Пицца - традиционное итальянское блюдо в виде круглой дрожжевой лепёшки, выпекаемой с уложенной сверху начинкой из томатного соуса, сыра и часто других ингредиентов, таких как мясо, овощи, грибы и других продуктов.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img
                className="d-block w-100"
                src={ pizza2 }
                alt="p2"
                height="550px"
              />
             <Carousel.Caption>
                  <h3>More Pizza</h3>
                  <p>Слово «пицца» впервые появилось в латинском тексте из центрального итальянского города Гаэта, тогда ещё входившего в состав Византийской империи, в 997 г. н. э.; в тексте говорится, что арендатор определённого имущества должен давать епископу Гэты duodecim pizze каждое Рождество, а ещё двенадцать — каждое Пасхальное воскресенье </p>
              </Carousel.Caption>
          </Carousel.Item>
        
      </Carousel> 
        )
    }
}

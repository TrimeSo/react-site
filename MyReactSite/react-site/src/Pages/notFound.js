import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import Footer from '../Components/Footer';


export default function notFound() {

        return (
            <>
                <h1 className='text-center'>404</h1>
                <br></br>
                <h1 className='text-center'>PAGE IS NOT FOUND!</h1>
                <div className='erroeImg'>
                <Image src='https://img.freepik.com/free-vector/cute-sad-and-crying-slice-of-pizza-character_464314-795.jpg'></Image>
                </div>
            <Footer />
            </>
        )
    }


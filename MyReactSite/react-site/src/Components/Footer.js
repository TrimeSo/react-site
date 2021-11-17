import React, { Component } from 'react'
import './Header.css';

export default class Footer extends Component {
    render() {
        return (
        <div className="main-footer foot">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-3 col-sm-6 hFoot">
                        <h4 className="text-white">Pizza Place</h4>
                        <ul className="list-unstyled text-white">
                            <li>dsss dsdsd</li>
                            <li>dsss dsdsd</li>
                            <li>dsss dsdsd</li>
                            <li>dsss dsdsd</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 hFoot">
                        <h4 className="text-white">Покупателям</h4>
                        <ul className="list-unstyled text-white">
                            <li>dsss dsdsd</li>
                            <li>dsss dsdsd</li>
                            <li>dsss dsdsd</li>
                            <li>dsss dsdsd</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 hFoot">
                        <h4 className="text-white ">Партнерам</h4>
                        <ul className="list-unstyled text-white">
                            <li>dsss dsdsd</li>
                            <li>dsss dsdsd</li>
                            <li>dsss dsdsd</li>
                            <li>dsss dsdsd</li>
                        </ul>
                    </div>
                  </div>
                <div className="footer-bottom pading">
                    <p className="text-center text-white">
                        &copy;{new Date().getFullYear()} PIZZA PLACE ALL RIGHTS RESERVED
                    </p>
                </div>
            </div>
        </div>
        )
    }
}

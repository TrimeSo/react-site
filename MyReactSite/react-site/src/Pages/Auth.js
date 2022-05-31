import React, { Component, useEffect, useState } from 'react';
import { Container, Form, Button} from 'react-bootstrap';

export default function Auth() {

    const PAGE_REGISTR = 'REGISTR';
    const PAGE_LOGIN = 'LOGIN';
    
    const [page, setPage] = useState(PAGE_LOGIN)

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    };

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email не может быть пустым!')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым!')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError || passwordError){
            setFormValid(false)
        }
        else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const validateEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          
          if (!validateEmail.test(String(e.target.value).toLowerCase())){
              setEmailError('Некорректный email!')
          }
          else {
              setEmailError('')
          }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
          if (e.target.value.length < 6 || e.target.value.length > 20){
            setPasswordError('Пароль должен быть не менее 6 и не более 20 символов!')
          }
         else if (!e.target.value) {
            setPasswordError('Пароль не должен быть пустым!')
          }
          else {
            setPasswordError('')
        }
    }


    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }


    const registr = () => (
        <>
        <Container className='authBox'>
        <Form>
                <h1 className='text-center authText'>Регистрация</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='authText'>Почта</Form.Label>
                        {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
                        <Form.Control onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type="email" placeholder="Введите вашу почту..." />
                        <Form.Text className="text-muted">
                        Мы никому не скажем вашу почту.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='authText'>Пароль</Form.Label>
                        {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
                        <Form.Control onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type="password" placeholder="Придумайте пароль..." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className='authText' type="checkbox" label="Запомнить меня" />
                    </Form.Group>
                    <Button disabled={!formValid} variant="warning" className='authButton' type="submit" href='/'>
                        Зарегистрироваться
                    </Button>
                    <Button variant="warning" className='authButton2' type="submit" onClick={() => navigateTo(PAGE_LOGIN)}>
                        Войти
                    </Button>
            </Form>
        </Container>
    </>
    );

    const login = () => (
        <>
        <Container className='authBox'>
            <Form>
                <h1 className='text-center authText'>Авторизация</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='authText'>Почта</Form.Label>
                        {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
                        <Form.Control onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type="email" placeholder="Введите вашу почту..." />
                        <Form.Text className="text-muted">
                        Мы никому не скажем вашу почту.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='authText'>Пароль</Form.Label>
                        {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
                        <Form.Control onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type="password" placeholder="Пароль..." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className='authText' type="checkbox" label="Запомнить меня" />
                    </Form.Group>
                    <Button disabled={!formValid} variant="warning" href='/' className='authButton' type="submit">
                        Войти
                    </Button>
                    <Button variant="warning" className='authButton2' type="submit" onClick={() => navigateTo(PAGE_REGISTR)}>
                        Регистрация
                    </Button>
            </Form>
        </Container>
    </>

    );

    return (
        <div>
        {page === PAGE_REGISTR && registr()}
        {page === PAGE_LOGIN && login()}
        </div>

    
    )
    

}
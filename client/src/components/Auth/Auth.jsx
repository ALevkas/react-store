import React, { useState } from 'react';

import {
    AuthContainer,
    Card,
    FormGroup,
    Title,
    InputGroup,
    Input,
    IconClear,
    BtnGroup,
    Button,
    BtnLink,
} from './Auth.elements';

import { useLocation } from 'react-router-dom';

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const clearInput = (nameInput) => {
        switch (nameInput) {
            case 'email':
                setEmail('');
                break;
            case 'password':
                setPassword('');
                break;
            default:
                setEmail('');
                setPassword('');
        }
    };

    return (
        <>
            <AuthContainer>
                <Card>
                    <Title>{isLogin ? 'Авторизация' : 'Регистрация'}</Title>

                    <FormGroup>
                        <InputGroup>
                            <Input
                                placeholder='E-mail'
                                type='email'
                                onChange={handleEmail}
                                value={email}
                            />
                            <IconClear onClick={() => clearInput('email')} />
                        </InputGroup>
                        <InputGroup>
                            <Input
                                placeholder='Password'
                                type='password'
                                onChange={handlePassword}
                                value={password}
                            />
                            <IconClear onClick={() => clearInput('password')} />
                        </InputGroup>

                        <BtnGroup>
                            {isLogin ? (
                                <BtnLink to={REGISTRATION_ROUTE}>
                                    Впервые? Регистрация
                                </BtnLink>
                            ) : (
                                <BtnLink to={LOGIN_ROUTE}>
                                    Есть аккаунт? Войти
                                </BtnLink>
                            )}

                            <Button>Отправить</Button>
                        </BtnGroup>
                    </FormGroup>
                </Card>
            </AuthContainer>
        </>
    );
};

export default Auth;

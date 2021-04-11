import React, { useContext } from 'react';
import { Context } from '../index';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {
    const { user } = useContext(Context);
    return (
        <header className='header grid'>
            <nav className='nav grid'>
                <div className='nav__brand'>
                    <a href='https://github.com/ALevkas' className='link'>
                        React App Store
                    </a>
                </div>

                <div className='nav__list grid'>
                    {user.isAuth ? (
                        <>
                            <Link to='/shop' className='nav__item link'>
                                Каталог
                            </Link>
                            <Link to='/admin' className='nav__item link'>
                                Админка
                            </Link>
                            <Link to='/login' className='nav__item link'>
                                Выйти
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to='/shop' className='nav__item link'>
                                Каталог
                            </Link>
                            <Link to='/login' className='nav__item link'>
                                Войти
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;

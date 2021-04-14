import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import { Context } from '../../index';

import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
} from './Navbar.elements';

const Navbar = observer(() => {
    const [click, setClick] = useState(false);

    const { user } = useContext(Context);

    const handleClick = () => setClick(!click);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/'>
                            <NavIcon />
                            Ract App Store
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        {user.isAuth ? (
                            <NavMenu onClick={handleClick} click={click}>
                                <NavItem>
                                    <NavLinks to='/shop'>Home</NavLinks>
                                </NavItem>

                                <NavItem>
                                    <NavLinks to='/admin'>Dashboard</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks
                                        to='/login'
                                        onClick={() => user.setIsAuth(false)}
                                    >
                                        Log Out
                                    </NavLinks>
                                </NavItem>
                            </NavMenu>
                        ) : (
                            <NavMenu onClick={handleClick} click={click}>
                                <NavItem>
                                    <NavLinks to='/'>Home</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks
                                        to='/login'
                                        onClick={() => user.setIsAuth(true)}
                                    >
                                        Log In
                                    </NavLinks>
                                </NavItem>
                            </NavMenu>
                        )}
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
});

export default Navbar;

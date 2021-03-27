import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import {AiOutlineConsoleSql, AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai'

const Nav = () => {
    const [menu, setMenu] = useState(true)

    const menuAction = () => {
        if(menu === true) {
            setMenu(false)
            return
        }  
        setMenu(true)
        return
    }
    
        return (
            <div className={menu ? 'nav-div-close' : 'nav-div-open'} >
                {menu ?  <AiOutlineClose className='menu-icon-close menu-icon' onClick={() => {menuAction()}} /> : <AiOutlineMenu className='menu-icon-open menu-icon' onClick={() => {menuAction()}} />}

                {menu && <Container className='nav-container' >
                    <Row>
                        <a href="#" ><h2>Home</h2></a>
                    </Row>
                    <Row>
                        <a href="#" ><h2>About</h2></a>
                    </Row>
                    <Row>
                        <a href="#" ><h2>Projects</h2></a>
                    </Row>
                    <Row>
                        <a href="#" ><h2>Contact</h2></a>
                    </Row>
                </Container>}
            </div>
        );
}

export default Nav;
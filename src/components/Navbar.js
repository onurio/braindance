import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
// import logo from '../images/logo.svg'; 

export const Navbar =props=>{
    const [menuState,setMenuState] = useState('');


    const onClick=()=>{
        if(menuState===''){
            setMenuState('open');

        }else{
            setMenuState('');
        }
    }

    return(
            <div className="navbar">
                <div className={menuState} onClick={e=>onClick()} id="nav-icon3">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <Link to='/' ><img className="logo"  alt="logo"/></Link>                
                <div className="navbar_spacer" />
                <ul  onClick={onClick} className={`navbar_itemlist ${menuState}`} >
                    <Link to='/' >
                        <li className="navbar_item btn-one" >
                            <span>INICIO</span>
                        </li>
                    </Link>
                    <Link to='/contact' >
                        <li className="navbar_item btn-one" >
                            <span>NOSOTROS</span>
                        </li>
                    </Link>
                    <Link to='/contact' >
                        <li className="navbar_item btn-one" >
                            <span>BLOG</span>
                        </li>
                    </Link>
                    <Link to='/contact' >
                        <li className="navbar_item btn-one" >
                            <span>CONTACTO</span>
                        </li>
                    </Link>
                </ul>
            </div>
    )
}
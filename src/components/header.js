import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
    <div>
        <link href="https://fonts.googleapis.com/css2?family=Parisienne&display=swap" rel="stylesheet" />

        <div id="logoName" >
               <h1> Mila's Nail Salon</h1>
            </div>
            <div >
                <nav class="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/gallery"> Gallery </Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/product"> Product</Link></li>
                    <li><Link to="/about_us">About us </Link> </li>
                    <li><Link to="/salon_etiquette">Salon Etiquette</Link></li>
                  </ul>
                </nav>
            </div>
    </div>);
}

export default Header;
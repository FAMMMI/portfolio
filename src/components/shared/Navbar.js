import React from 'react';
import { Link, useHref, useNavigate } from 'react-router-dom';
import { saveAs } from "file-saver";
import pdf from '../../assets/pdf/Resume of Naimur Rahaman Imthiaz - Google Docs2.pdf'

import image from '../../assets/images/dp-removebg-preview.png'

const Navbar = () => {
    const navigate = useNavigate();

    const saveFile = () => {
        saveAs(
            "https://drive.google.com/file/d/13dvhMushqwxy64hSCEjFyUmCrE09PWsd/view?usp=sharing",
            "resume.pdf"
        );
    };

    const contact = () => {
        // navigate('https://form.jotform.com/221586579772472');

    }

    const menuItem = <>

        <li className='text-white'> <button onClick={saveFile}>download</button></li>
        <li className='text-white'><Link to="/about"> About me</Link></li>
        <li className='text-white'><a href="https://form.jotform.com/221586579772472"><button>Contact me</button></a> </li>

    </>

    return (
        <div>
            <div class="navbar bg-rose-600">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl text-white">My Portfolio</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
                <div class="navbar-end">
                    <a class="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
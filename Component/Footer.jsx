import React from "react";
import "./Footer.css";
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa';
import {AiFillLinkedin } from 'react-icons/ai';
    const Footer = () => {
        return (
        <>
         <footer className="footer_bg  w-100 p-3 mb-2  text-light d-block ">
            <div className="container text-left">
            <br/>
                <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-6 text-left">
                        <h4 className="">Example</h4>
                        <p className="">Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Reiciendis provident
                        rerum ipsa vero sapiente dolore, qui voluptatibus.</p>
                        <hr/>

                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <ul className=" list list-unstyled mx-auto">
                        <li className="d-block">
                        <a  hr="#services" 
                            className="card-link ">
                            <h4>Services</h4>
                        </a>
                        </li>
                        <li className="d-block">
                        <a  hr="#" className="card-link ">Web Development</a>
                        </li>
                        <li className="d-block">
                        <a  hr="#" className="card-link ">
                        Data Analytics</a>
                        </li>
                        <li className="d-block">
                        <a  hr="#" className="card-link ">
                        Software Development</a>
                        </li>
                        <li className="d-block">
                        <a  hr="#" className="card-link ">
                        App Development</a>
                        </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <ul className="list-unstyled mx-auto">
                        <li className="d-block">
                        <a  hr="#About" className="card-link ">
                        <h4>About</h4>
                        </a>
                        </li>
                        <li className="d-block">
                        <a  hr="#" className="card-link ">Who are we ?</a>
                        </li>
                        <li className="d-block">
                        <a  hr="#" className="card-link ">Why us ?</a>
                        </li>
                        <li className="d-block">
                        <a  hr="#" className="card-link ">
                        Wordpress Development</a>
                        </li>
                       
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <ul className="list-unstyled mx-auto">
                        <li className="d-block">
                        <a  hr="#AboutSection" className="card-link ">
                        <h4>Terms</h4>
                        </a>
                        </li>
                        <li className="d-block">
                        <a  hr="#" className="card-link ">
                        Terms and condition</a>
                        </li>
                        <li className="d-block">
                        <a  hr="#" className="card-link ">Privacy Policy</a>
                        </li>
                        <li className="d-block">
                        <a  hr="#" className="card-link ">
                        Team</a>
                        </li>
                        <li className="d-block">
                        <a  hr="#" className="card-link ">
                        Contact us</a>
                        </li>
                        </ul>
                    </div>
                    <div className=" col-lg-3 col-md-12 col-sm-6">
                        <h4 className="">Subscribtion </h4>
                        <p className="">Get news letters and updates</p>
                        <form className="input-group-append">
                        <input type="email" className="input-group-text
                        bg-white text-left  rounded-0 w-75"
                        placeholder="Enter E-mail"/>
                         <button type="button" className="btn btn-outline-light my-2">Submit</button>
                        </form>
                        <p className=" social  d-inline-block  ">Follow us : </p>
                        <a  hr="#" className="my-3 mx-1 d-inline-block">
                         <FaFacebookSquare className="fs-2"/>
                        </a>
                        <a  hr="#" className="my-3 mx-1 d-inline-block">
                        <FaTwitter className="fs-2"/>
                        </a>
                        <a  hr="#" className="my-3 mx-1 d-inline-block">
                        <AiFillLinkedin className="fs-2"/>
                        </a>
                    </div>
                </div>
            <div className="text-center">
                    <p className=" d-inline-block mx-2">
                    Copyright @Example 2021-2030</p> 
            </div>
        </div>
    </footer>
                </>);
    };
export default Footer;    
import React from 'react';
import "./css/Even_Content.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    offset:350,
    duration:1100
  });
const Even_Content = (props) =>{
    return(
        <>
         <div id="Even_Content">
          <div className="container">
              <div className="row  Even_content">
                 <div className="col-md-5 order-1 my-3">
                   <img className="img-fluid" data-aos="fade-right" src={props.image} alt="image"/>
                  </div>
                  <div className="col-md-7 order-2 px-3" data-aos="fade-up">
                   <h1>
                     {props.Symbol} {props.title}
                   </h1>
                    <br/>
                   <p>
                    {props.detail}
                   </p>
                   <ul>
                       <li>
                       {props.Symbol1} {props.list[0]}
                       </li>
                       <li>
                       {props.Symbol1} {props.list[1]}
                       </li>
                       <li>
                       {props.Symbol1} {props.list[2]}
                       </li>
                       <li>
                       {props.Symbol1} {props.list[3]}
                       </li>
                       <li>
                        {props.list[4]}
                       </li>
                   </ul>
                  </div>
              </div>
          </div>
         </div>
        </>
    );
};
export default Even_Content;

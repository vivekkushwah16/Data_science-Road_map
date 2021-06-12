import React from 'react';
import "./css/Odd_Content.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    offset:350,
    duration:1100,
    easing:"ease-out"
    
  });
const Odd_Content = (props) =>{
    return(
        <>
         <section id="Odd_Content"  >
          <div className="container  my-5">
              <div className="row Odd_content ">
                  <div className="col-md-7 px-3 " data-aos="fade-up">
                    <h1>
                    {props.title}
                    </h1>
                    <br/>
                   <p>
                   {props.detail}
                   </p>
                   <ul>
                       <li>
                       {props.Symbol1}  {props.list[0]}
                       </li>
                       <li>
                       {props.Symbol1}  {props.list[1]}
                       </li>
                       <li>
                       {props.Symbol1} {props.list[2]}
                       </li>
                       <li>
                       {props.Symbol1} {props.list[3]}
                       </li>
                       <li>
                       {props.Symbol1} {props.list[4]}
                       </li>
                       <li>
                        {props.list[5]}
                       </li>
                   </ul>
                  </div>
                  <div className="col-md-5 order-1 justify-content-center" >
                  <img className="img-fluid " data-aos="fade-right" src={props.image} alt="image"/>
                  </div>
              </div>
          </div>
         </section>
        </>
    );
};
export default Odd_Content;

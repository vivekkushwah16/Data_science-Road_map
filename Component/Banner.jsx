import React from 'react';
import './Banner.css';

const Banner = () => {
    return(
        <>
         <div className="container-fuild mt-5 d-flex align-items-center  justify-content-center">
            <div className="row  d-flex  align-items-center  justify-content-center  py-5  " >
                <div className="col-10  d-bolck " >
                    <img className="swing-in-left-bck"  src="https://samuelsum.com/wp-content/uploads/2020/08/Data_Science_Team-clipart-028-660x577.png"
                     width="95%" alt="image" />
                    <h1 className=" text-center text-capitalize scale-in-hor-right
                      mt-0">Get ready to become master in <br/>
                    <strong >Data Science</strong></h1>
                </div>
            </div>
         </div>
        </>
    );
};
export default Banner; 
import React from 'react';
import '../index.css';
import Navbar3 from "./NavBar/Navbar3";
import Banner from "./Banner";
import Footer from "./Footer"
import Odd_Content from './Web_content/Odd_Content';
import Even_Content from "./Web_content/Even_Content";
import Odd_Data from "./Web_content/Data/Odd_Data";
import Even_Data from "./Web_content/Data/Even_Data";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <>
      <Navbar3/>
      <Banner/>
      <section id="introduction">
      <Even_Content
        image={Even_Data[0].image}
        Symbol={Even_Data[0].Symbols}
        Symbol1={Even_Data[0].Symbols2}
        title={Even_Data[0].title}
        detail={Even_Data[0].detail}
        list={Even_Data[0].list}
      />
      </section>
      <section id="Roadmap">
      <Odd_Content
        Symbol1={Odd_Data[0].Symbols2}
        main={Odd_Data[0].Main_heading}
        image={Odd_Data[0].image}
        Symbol={Odd_Data[0].Symbols}
        title={Odd_Data[0].title}
        detail={Odd_Data[0].detail}
        list={Odd_Data[0].list}
      />
      </section>
      <section id="language">
      <Even_Content
        image={Even_Data[1].image}
        Symbol={Even_Data[1].Symbols}
        Symbol1={Even_Data[0].Symbols2}
        title={Even_Data[1].title}
        detail={Even_Data[1].detail}
        list={Even_Data[1].list}
      />
      </section>
      <section id="data">
      <Odd_Content
        image={Odd_Data[1].image}
        Symbol1={Odd_Data[0].Symbols2}
        title={Odd_Data[1].title}
        detail={Odd_Data[1].detail}
        list={Odd_Data[1].list}
      />
      </section>
      <section id="machine">
      <Even_Content
        image={Even_Data[2].image}
        Symbol={Even_Data[2].Symbols}
        Symbol1={Even_Data[0].Symbols2}
        title={Even_Data[2].title}
        detail={Even_Data[2].detail}
        list={Even_Data[2].list}
      />
      </section>
      <section id="linux">
      <Odd_Content
        image={Odd_Data[2].image}
        Symbol1={Odd_Data[0].Symbols2}
        title={Odd_Data[2].title}
        detail={Odd_Data[2].detail}
        list={Odd_Data[2].list}
      />
      </section>
      <Footer/>
    </>
  );
}

export default App;

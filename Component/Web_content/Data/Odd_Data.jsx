import React from 'react';
import img3 from "../images/maths1.png";
import img5 from "../images/data.png";
import img7 from "../images/linux.jpg";
import { AiTwotoneStar } from "react-icons/ai";
const Even_Data = [
  { 
    Main_heading:"Roadmap",
    Symbols2: <AiTwotoneStar/>,
    image:img3,
    title:"Step: 1 Mathematics & Statistics.",
    detail:"   Why not Programming? - Because understanding maths takes practice and you have tobe good with numbers and logic to be able to code something",
    list: ["Learn about basic statistics from a book like hines.",
          "Learn what dy/dx actually means!",
          "Learn about Optimization and gradient descent. This is a good playlist to learn about basics of gradient descent",
          "Learn to plot simple functions in excel itself! You don't need a hammer to kill mosquitoes.",
          " Learn about basic probability distributions with a bit more emphasis on normal distribution. Hines is a good book for learning these basics.",
          " Mathematics for Machine Learning."
        ],
        
  },
  {
    image:img5,
    Symbols2: <AiTwotoneStar/>,
    title:"Step:3 Big Data and External Data Visualization Tools (Optional)",
    detail:" Data visualization and big data can be handled in python but some of the external tools are made just for the task in hand.Once you have started to use python to solve few of the data science problems, you need to look into these tools to understand what they  have to offer on the table. These tools include:",
    list: ["Tableau  ",
          " Excel (& VBA)",
          "Hadoop",
          "AWS Offerings",
          " Note that learning these tools at the expert level might take some time!  ",
        ],
  },
  {
    image:img7,
    Symbols2: <AiTwotoneStar/>,
    title:"Step:5 Linux & Version Control ",
    detail:". Linux & Version Control  Apart from learning Python and Mathematics, you need to know how to manage and collaborate with others on the software you are creating",
    list: ["Learn Linux basics ",
          " Learn Git ",
          " Read Data Science news",
          "Learn to scrape data",
          " Keep your eye on this https://paperswithcode.com/ code website",
        ],
  },
  
];
export default Even_Data;
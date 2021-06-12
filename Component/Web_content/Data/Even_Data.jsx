import React from 'react';
import img2 from "../images/intro.png";
import img4 from "../images/program.png";
import img6 from "../images/machine.png";
import { AiOutlineSend } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";
const Odd_Data = [
  { 
    image:img2,
    Symbols: <AiOutlineSend/>,
    Symbols2: <AiTwotoneStar/>,
    title:"about data Science",
    detail:"  As a data scientist you will collect, analyze, process, and model data to gain valuable insights Why become a data scientist in India.",
    list: ["The average data scientist salary is 956K/Yr (Source: Glassdoor)",
          "62% expected increase in demand (Source: TOI)",
          "Internet = Users = Data = DS Opportunity = Data Science Jobs in India",
          "Google Microsoft Flipkart and Amazon on constant search for talented Data Scientists"
        ],
        
  },
  {
    image:img4,
    Symbols2: <AiTwotoneStar/>,
    title:"Step: 2 Programming",
    detail:"Can be any programming language but I recommend python due to its popularity. Most of the companies ask this as a necessary requirement",
    list: [" Learn about Python Basics.",
          "Learn about Numpy",
          "Learn about Pandas",
          "Learn about Matplotlib/Seaborn",
          " Learn about what time complexity of algorithms is (just the understanding)!",
          "Learn about storing data to the Database"
        ],
  },
  {
    image:img6,
    title:"Step: 4 Machine learning and Deep Learning",
    detail:"Once you have mastered data wrangling with python, you need to work on your Machine learning concepts. Start with this Google’s free course which is made just for people  getting started with machine learning. The best thing about this course is that it is free and it has just the topics you need to know to work in the industry!",
    list: ["  Learn Sklearn.",
          "Learn to build a neural network in tensorflow",
          "Learn to use tensorflow_hub",
          "Learn about Matplotlib/Seaborn",
          " Learn how to use the tensorboard ",
        ], 
  },
];
export default Odd_Data;
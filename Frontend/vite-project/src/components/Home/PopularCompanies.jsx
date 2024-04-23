import React from 'react'
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiTesla } from "react-icons/si";
import { GiWheat } from 'react-icons/gi';
import { MdLocalFlorist } from 'react-icons/md';
import { IoIosBasket } from 'react-icons/io';

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Monsanto",
      location: "St. Louis, Missouri, USA",
      openPositions: 100,
      icon: <GiWheat />,
    },
    {
      id: 2,
      title: "John Deere",
      location: "Moline, Illinois, USA",
      openPositions: 50,
      icon: <MdLocalFlorist />,
    },
    {
      id: 3,
      title: "Bayer Crop Science",
      location: "Leverkusen, Germany",
      openPositions: 80,
      icon: <IoIosBasket />,
    },

  ];

  return (
    <div className='companies'>
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {
            companies.map(element=>{
              return(
                <div className="card" key={element.id}>
                  <div className="content">
                    <div className="icon">{element.icon}</div>
                    <div className="text">
                      <p>{element.title}</p>
                      <p>{element.location}</p>
                    </div>
                  </div>
                  <button>Open Positions{element.openPositions}</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default PopularCompanies

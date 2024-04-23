import React from 'react'
import {FaSuitcase,FaBuilding,FaUsers,FaUserPlus} from  "react-icons/fa"

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "10,000 Acres",
      subTitle: "Total Farmland",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "500 Varieties",
      subTitle: "Crop Types",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "20,000 Workers",
      subTitle: "Farm Laborers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "200 Farmers",
      subTitle: "Individual Farmers",
      icon: <FaUserPlus />,
    },
  ];

  return (
    <div className='heroSection'>
      <div className="container">
        <div className="title">
          <h1>Find a Crop That You Need!</h1>
          <h1>and Best Suit Your Budget and Family</h1>
          <p>Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Esse amet expedita illum debitis autem odit 
            ipsa dolorum ipsum sed. Iure veritatis adipisci cumque alias libero ratione 
            architecto recusandae ducimus dolores?</p>
        </div>
        <div className="image">
          <img src="/tractor_storm.jpg" alt="hero"/>
        </div>
      </div> 
      <div className="details">
         {
          details.map(element=>{
            return(
              <div className="card" key={element.id}>
                <div className="icon">{element.icon}</div>
                <div className="content">
                  <p>{element.title}</p>
                  <p>{element.subTitle}</p>
                </div>
              </div>
            )
          })
         }
      </div>
    </div>
  )
}

export default HeroSection

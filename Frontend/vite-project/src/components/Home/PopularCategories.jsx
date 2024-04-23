import React from 'react'
import {MdOutlineDesignServices,MdOutlineWebhook,MdAccountBalance, MdOutlineAnimation,} from "react-icons/md";
import { GiWheat, GiCow, GiTomato, GiFruitTree, GiFishCooked, GiChicken, GiBee, GiFarmer } from 'react-icons/gi';

import { TbAppsFilled } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Wheat Farming",
      subTitle: "305 Acres Cultivated",
      icon: <GiWheat />,
    },
    {
      id: 2,
      title: "Livestock Farming",
      subTitle: "500 Head of Cattle",
      icon: <GiCow />,
    },
    {
      id: 3,
      title: "Vegetable Cultivation",
      subTitle: "200 Acres Under Production",
      icon: <GiTomato />,
    },
    {
      id: 4,
      title: "Fruit Orchards",
      subTitle: "1000+ Trees Planted",
      icon: <GiFruitTree />,
    },
    {
      id: 5,
      title: "Aquaculture",
      subTitle: "150 Ponds Operational",
      icon: <GiFishCooked />,
    },
    {
      id: 6,
      title: "Poultry Farming",
      subTitle: "867 Chicken Coops",
      icon: <GiChicken />,
    },
    {
      id: 7,
      title: "Beekeeping",
      subTitle: "50 Hives Managed",
      icon: <GiBee />,
    },
    {
      id: 8,
      title: "Organic Farming",
      subTitle: "80 Acres Certified Organic",
      icon: <GiFarmer />,
    },
  ];

  return (
    <div className='categories'>
      <h3>POPULAR CATEGORIES</h3>
      <div className="banner">
        {
          categories.map(element=>{
            return(
              <div className="card" key={element.id}>
                <div className="icon">{element.icon}</div>
                <div className="text">
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

export default PopularCategories

//for categories section, let's make an array of different objects/categories.

import { MdFastfood } from 'react-icons/md';           //  all..
import { GiFriedEggs } from 'react-icons/gi';          // Breakfast
import { GiBowlOfRice } from 'react-icons/gi';         //soups
import { GiNoodles } from 'react-icons/gi';            // Pasta
import { GiMeal } from 'react-icons/gi';               // Main Course
import { FaPizzaSlice } from 'react-icons/fa';         // Pizza
import { FaHamburger } from 'react-icons/fa';          // Burger

const categories = [
  {
    id: 1,
    name: "All",  // changed to lowercase
    image: <MdFastfood />
  },
  {
    id: 2,
    name: "breakfast",  // changed to lowercase
    image: <GiFriedEggs />
  },
  {
    id: 3,
    name: "soups",  // changed to lowercase
    image: <GiBowlOfRice />
  },
  {
    id: 4,
    name: "pasta",  // changed to lowercase
    image: <GiNoodles />
  },
  {
    id: 5,
    name: "main_course",  // changed to lowercase
    image: <GiMeal />
  },
  {
    id: 6,
    name: "pizza",  // changed to lowercase
    image: <FaPizzaSlice />
  },
  {
    id: 7,
    name: "burger",  // changed to lowercase
    image: <FaHamburger />
  },
]

export default categories

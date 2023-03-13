import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Providing convenient access to fresh, organic produce and products, while supporting sustainable and ethical farming practices, for a healthier and happier community.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'To be the leading provider of organic food delivery, inspiring healthier and more sustainable living, while building strong relationships with our customers, farmers, and the environment',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Founded with a passion for healthy living and a desire to support local farmers, we started delivering organic produce door-to-door, and have grown to serve thousands of customers across the country',
  },
]

export const products_url ='http://localhost:4000/products'
//https://course-api.com/react-store-products'

//https://api.spoonacular.com/recipes/716429/information?apiKey=8d6185f5e3314316b62e306737604e5d&includeNutrition=true'

//'https://course-api.com/react-store-products'

export const single_product_url = 'http://localhost:4000/products?id='
//'https://api.spoonacular.com/recipes/716429/information?apiKey=8d6185f5e3314316b62e306737604e5d&includeNutrition=true?id='
//'https://course-api.com/react-store-single-product?id='


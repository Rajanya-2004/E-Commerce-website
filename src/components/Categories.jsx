import React from 'react'

import product8 from '../assets/img9.jpg'
import product9 from '../assets/img12.jpg'
import product10 from '../assets/img14.jpeg'
import product11 from '../assets/img11.jpeg'
import product12 from '../assets/img15.jpg'
import product13 from '../assets/img16.jpg'


const categories = [
    {img: product8, alt:"Men's Perfumes", title: "Men's Collection", description: "Bold and charismatic scents designed to match confidence and strength."},
    {img: product9, alt:"Women's Perfumes", title: "Women's Perfumes", description: "Elegant, floral, and graceful fragrances that highlight femininity."},
    {img: product10, alt:"Luxury Perfumes", title: "Luxury Perfumes", description: "Premium, long-lasting perfumes crafted with rare and exotic notes."},
    {img: product11, alt:"Unisex Perfumes", title: "Unisex Perfumes", description: "Versatile blends made to suit every personality, anytime."},
    {img: product12, alt:"Arabic oud Perfumes", title: "Arabic oud", description: "Rich, woody, and oriental aromas inspired by timeless Arabian traditions."},
    {img: product13, alt:"Gift Sets", title: "Gift Sets", description: "Curated perfume packs, perfect for celebrating special moments."}
    
]
const Categories = () => {
  return (
   <section id='categories' className='py-16 scroll-mt-20 bg-white'>
    <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-amber-950 mb-3'>
                Explore Our Fragrance Collections
            </h2>
            <p className='text-lg text-gray-800 max-w-2xl mx-auto'>
                🌟 Shop curated perfume collections designed for every style and occasion.
            </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {categories.map((category, index)=>(
                <div key={index} className='relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
                    <div className='h-64 overflow-hidden'>
                        <img
                        src={category.img}
                        alt={category.alt}
                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'/>  
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'>  
                        <div className='absolute bottom-0 left-0 p-6'>
                                <h3 className='text-xl font-semibold text-white'>{category.title}</h3>
                                <p className='text-gray-200 mt-1'>{category.description}</p>
                        </div>
                    </div> 
                </div>


            ))}
        </div>
    </div>
   </section>
  )
}

export default Categories
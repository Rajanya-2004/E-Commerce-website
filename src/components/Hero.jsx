import React from 'react'
import hero from  '../assets/hero.png'

const Hero = () => {
  return (
    <section id='home' className='bg-amber-50 scroll-mt-20 py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-10'>
            <div className='w-full lg:w-1/2 text-center lg:text-left'>
                <h1 className='text-4xl sm:text-5xl font-bold text-amber-950 leading-tight mb-4'>
                    Discover The Best Deals on Top Products
                </h1>
                <p className='text-gray-700 text-base sm:text-lg mb-6'>
                    Indulge in timeless fragrances crafted for elegance. From floral blossoms to bold, exotic notes, we’ve got it all. Elevate your presence with scents that last forever. Find your signature scent and wear it with confidence.
                </p>
                <div className='flex justify-center lg:justify-start gap-4'>
                    <a
                    href="/products"
                    className='px-6 py-3 bg-pink-900 text-white text-sm font-semibold rounded-lg shadow hover:bg-pink-600 transition'>
                        Shop Now
                    </a>
                    <a href="/offers"
                    className='px-6 py-3 border border-pink-500 text-pink-600 text-sm font-semibold rounded-lg hover:bg-pink-200 transition'>
                        View Offers
                    </a>
                </div>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center'>
            <img src={hero}
            alt="Hero Image"
            className='w-full max-w-2xl rounded-xl shadow-lg lg:scale-110 lg:translate-x-4 transition-transform duration-300' />
            </div>
        </div>
    </section>
  )
}

export default Hero

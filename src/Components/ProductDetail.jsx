import React from 'react';
import Carusal from './Carusal';
import './details.css'
import { FaDropbox, FaRegHeart, FaRegStar } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import { BsTruck } from "react-icons/bs";
import { LuBadgeCheck } from "react-icons/lu";
import { CiCreditCard1 } from "react-icons/ci";

const ProductDetail = () => {
    const size = [32, 34, 36, 38, 40, 42, 44, '+']
    return (
        <section className='grid lg:grid-cols-2 gap-8 lg:px-0 px-5 lg:w-[75%] mx-auto my-10 font'>
            <Carusal />
            <div className=''>
                <div>
                    <div className='flex justify-between'>
                        <h1 className='text-3xl text-[#733D00] font-semibold'>Kurti</h1>
                        <FaRegHeart className='text-2xl text-[#733D00]' />
                    </div>

                    <div className='mt-9'>
                        <p className='font-bold text-[#733D00]'>chikenkari</p>
                        <div className='text-zinc-600'>
                            <p className='mt-1 text-justify text-sm font-semibold'>emarkably renwned for its extraorninary rustic charm madhubani painting is widly practiced throughout bihar mithila region woman from variantion...</p>
                            <button className='underline mt-3 font-semibold'>Read more</button>

                            <div className='flex justify-start items-center gap-1 mt-2 text-sm font-semibold'>
                                <div className='flex items-center gap-1 bg-[#fad8b1] p-1 rounded-md'> <FaRegStar /> <span>5/5</span></div>
                                <p>124 ratings</p>
                            </div>
                        </div>

                    </div>
                    <hr className='mt-3' />
                </div>



                <div className='mt-4'>
                    <div className='flex items-end gap-1 font-semibold'>
                        <h1 className='text-2xl'>₹ 6000*</h1>
                        <h1><del className>₹9000</del> <span className='text-xs text-green-500 font-bold'>25% off</span></h1>
                    </div>
                    <p className='text-lg text-zinc-500'>inclusive of all taxes</p>
                    <hr className='mt-3' />
                </div>



                <div className='mt-2 font-semibold text-zinc-700'>
                    <div>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-lg'>Select color</h1>
                            <button className='underline mt-3'>view similer</button>
                        </div>

                        <div className='flex gap-3'>
                            <div className='bg-green-600 w-8 h-8 rounded-full'></div>
                            <div className='bg-purple-600 w-8 h-8 rounded-full'></div>
                            <div className='bg-teal-400 w-8 h-8 rounded-full'></div>
                            <div className='bg-amber-500 w-8 h-8 rounded-full'></div>
                            <div className='bg-red-500 w-8 h-8 rounded-full'></div>
                        </div>
                    </div>

                    <div className='mt-2'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-lg'>Select size</h1>
                            <button className='underline mt-3 flex items-center gap-1'><TbRulerMeasure /> select guide</button>
                        </div>
                        <div className='space-x-3 mt-4'>
                            {
                                size.map(v => <span className='border p-2' key={Math.random()}>{v}</span>)
                            }
                        </div>
                    </div>
                    <div className='flex gap-8 mt-6'>
                        <button className='border-2 p-1.5 w-full border-[#733D00] flex justify-center items-center gap-4 font-bold text-center mx-auto text-[#733D00] rounded-md'>Add to Cart<FiShoppingCart /></button>
                        <button className='border p-1.5 w-full rounded-md bg-[#733D00] text-white'>Buy Now</button>
                    </div>
                    <hr className='mt-5' />
                </div>

                <div className='flex justify-between gap-10 font-semibold text-zinc-600 mt-3'>
                    <div className='text-center space-y-2'>
                        <BsTruck className='block mx-auto text-xl' />
                        <p>Free Shipping in india</p>
                    </div>
                    <div className='text-center space-y-2'>
                        <LuBadgeCheck className='block mx-auto text-xl' />
                        <p>Assured quality</p>
                    </div>
                    <div className='text-center space-y-2'>
                        <FaDropbox className='block mx-auto text-xl' />
                        <p>Easy Return</p>
                    </div>
                    <div className='text-center space-y-1'>
                        <CiCreditCard1 className='block mx-auto text-2xl' />
                        <p>safe payment option</p>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default ProductDetail;
import React from 'react'
import '../index.css';
import RenderLineChart from './chartSales';
import RenderAreaChart from './lifetime';


const Body = () => {
  return (
    <div className='bg-[#060409] flex flex-col lg:h-full h-screen w-screen'>
        <div className='flex justify-between px-5 my-10 mx-5'>
            <p className='font-semibold lg:text-3xl text-xl title'>Paytron Ecommerce</p>
            <select className='bg-[#434242] rounded-md text-white lg:w-fit w-20'>
                <option>May 1 - May 30</option>
                <option>June 1 - June 30</option>
            </select>
        </div>
        <div className='flex lg:flex-row flex-col justify-around px-4 py-6 text-white'>
          <div className=' lg:w-[45%] bg-gradient-to-r from-[#22f4fa]/60 to-[#060409] flex justify-between h-fit'>
            <div className='flex flex-col lg:px-4 px-2 '>
              <p className='font-medium my-3'>Total sales</p>
              <div className='font-semibold text-2xl'>300.58TRX</div>
            </div>
            <RenderLineChart/>
          </div>
          <div className='lg:w-[45%] bg-gradient-to-r from-[#22f4fa]/60 to-[#060409] flex flex-col'>
            <p className='px-4 font-medium my-3'>Summary</p>
            <div className='flex justify-between px-4 my-3'>
              <div className='flex flex-col'>
                <div className='font-semibold text-2xl'>300.58TRX</div>
                <p className='font-medium text-sm'>Revenue</p>
              </div>
              <div className='flex flex-col'>
                <div className='font-semibold text-2xl'>6</div>
                <p className='font-medium text-sm'>Orders</p>
              </div>
              <div className='flex flex-col'>
                <div className='font-semibold text-2xl'>50.09TRX</div>
                <p className='font-medium text-sm'>Avg order value</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col py-5 text-white bg-[#434242] lg:mx-12 mx-5 px-5 justify-center'>
          <p className='px-4 font-medium my-3'>Sales Funnel</p>
          <div className='flex justify-between px-4  py-3'>
            <div className='flex flex-col'>
              <p className='font-medium text-sm'>Visitors</p>
              <div className='font-semibold text-2xl'>13</div>
            </div>
            <div className='flex flex-col'>
              <p className='font-medium text-sm'>Product views</p>
              <div className='font-semibold text-2xl'>22</div>
            </div>
            <div className='flex flex-col'>
              <p className='font-medium text-sm'>Add to cart</p>
              <div className='font-semibold text-2xl'>10</div>
            </div>
            <div className='flex flex-col'>
              <p className='font-medium text-sm'>check out</p>
              <div className='font-semibold text-2xl'>6</div>
            </div>
          </div>
        </div>
        <div className=' px-5 py-6 bg-[#434242] my-6 mx-12 '>
          <div className='lg:flex flex-col w-[50%] h-fit hidden'>
            <p className='px-4 font-medium my-3 text-white'>Average lifetime revenue</p>
            <RenderAreaChart/>
          </div>
        </div>

    </div>
  )
}

export default Body
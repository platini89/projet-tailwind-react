import React from 'react'
import logo2 from "../../images/logo2.png"
import facebbok from "../../images/facebbok.jpg"
import linkedin from "../../images/linkedin.jpg"
import tiktok from "../../images/tiktok.jpg"



export default function Footer() {
  return (
    <footer className='bg-black py-20 '>
      <div className=' container mx-auto mt-10  lg:mt-0 px-4 lg:px-0 py-10 text-white'>
        {/*div 1 */} 
        <div >
             {/*div 1 box */}
             <div className='flex -mx-4 mb-5 '>
                 {/*div 11 */}
                 <div className=' w-full lg:w-4/2 px-6 '>
                    <a  className='mb-6 inline-flex' href="#"><img className ='w-8' src={logo2} alt="" /></a>
                    <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iure provident ducimus saepe, iste quo.</p>
                    <div className='flex '>
                    <a className='px-2 py-4' href="#"> <img className ='w-6' src={facebbok} alt="" /></a>
                    <a className='px-2 py-4' href="#"> <img className ='w-6' src={linkedin} alt="" /></a>
                    <a className='px-2 py-4' href="#"> <img className ='w-6'  src={tiktok} alt="" /></a>
                    </div>

                 </div>

                 {/*div 12 */}
                 <div className=' w-full lg:w-3/2 px-20  '>
                    <h2 className='text-2xl font-bold py-3 '>Get Started</h2>
                    <ul>
                        <li className='mb-4'> Tutorial</li>
                        <li  className='mb-4'>Resources</li>
                        <li  className='mb-4'> Guide</li>
                    </ul>
                 </div>

                 {/*div 13 */}
                 <div className=' w-full lg:w-3/2  px-20'>
                 <h2  className='text-2xl font-bold py-3'>Get Started</h2>
                    <ul>
                        <li  className='mb-4'> Tutorial</li>
                        <li className='mb-4'>Resources</li>
                        <li className='mb-4'> Guide</li>
                    </ul>
                 </div>

                 {/*div 14 */}
                 <div className=' w-full lg:w-2/3 px-20 '>
                 <h2  className='text-2xl font-bold py-3'>Get Started</h2>
                    <ul>
                        <li className='mb-4'> Tutorial</li>
                        <li className='mb-4'>Resources</li>
                        <li className='mb-4'> Guide</li>
                    </ul>  
                 </div>
             </div>
        </div>

        {/*div 2 */}
        <div className='py-8 flex flex-col md:flex-row justify-between -mx-4 items-center'>
          <span>@copie by michel platini</span>  
          <span>Right 06/12/2024 </span>
        </div>


      </div>
    </footer>
  )
}

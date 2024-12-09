import React from 'react'
import asset from "../../images/asset.png"

export default function Sectiond() {
  return (
    <>
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-8 lg:px-0'>
            <h3 className='text-center font-bold text-black text-3xl mb-6'>Lorem, consectur adipisicing.</h3>
            <p className=' w-full lg:w-1/2 mx-auto text-center mb-7'>Lorem ipsum dolorjuiyyhgu  lorem gloturin bkfijjfnf nlotriem lore sit amet consectetur adipisicing elit. Nisi nulla excepturi ducimus quod, 
                dolor ipsa.
            </p>

            <div className='flex items-center flex-wrap'>
                {/*div1 */}

                    <div className='px-10 w-1/2 lg:w-1/3 flex justify-center'>
                        <ul>
                            <li className='text-2xl mb-2'>
                            <i class="las la-check-circle  text-blue-600"></i>
                                <span>Web site billf</span>
                            
                            </li>

                            <li className='text-xl lg:text-2xl mb-1'>
                            <i class="lar la-check-circle  text-blue-600"></i>
                            <span>Web flod gjkrlkf</span>
                            </li>

                            <li className='text-2xl mb-2'>
                            <i class="lar la-check-circle text-blue-600"></i>
                            <span>24/7 flod gjkrlkf</span>
                            </li>
                        </ul>
                    </div>
            
                {/*div2 */}


                <div className='px-10  w-1/2 lg:w-1/3 flex justify-center '>
                        <ul>
                            <li  className='text-xl lg:text-2xl mb-1'>
                            <i class="las la-check-circle  text-blue-600"></i>
                                <span>SDD  site billf</span>
                            
                            </li>

                            <li  className='text-xl lg:text-2xl mb-1'>
                            <i class="lar la-check-circle  text-blue-600"></i>
                            <span>Ful  flod gjkrlkf</span>
                            </li>

                            <li  className='text-xl lg:text-2xl mb-1'>
                            <i class="lar la-check-circle  text-blue-600 "></i>
                            <span>29/7 flod gjkrlkf</span>
                            </li>
                        </ul>
                    </div>
            
                {/*div3 */}

                <div className='px-10 w-1/3  justify-center hidden lg:flex'>
                    <img className='w-[200px] rounded-bl-xl rounded-tr-2xl' src={asset} alt="" />
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

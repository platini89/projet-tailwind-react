import React from 'react'
import  plati2 from "../../images/plati2.jpg"
import plati1 from "../../images/plati1.png"

export default function Section() {
  return (
    <>
      {/*section */}

      <section className='bg-blue-100 py-20' >
        <div className=' container mx-auto px-6 lg:px-0'>

            {/*h2 */}
            <h2 className='text-center font-bold text-2xl lg:text-3xl mb-10'>  Ut quam, + 3456 blanditiis? repellat!</h2>

            {/*cardre*/}
            <div className='flex  flex-wrap -mx-4'>
                {/*cardre 1 */}
                <div className=' w-full lg:w-1/3 py-2 px-2'>
                    <div className='bg-white py-20 rounded-lg flex flex-col items-center px-10'>
                        <img className=' w-12  h-12 rounded-full mb-6' src={plati2} alt="" />
                        <span className ='text-primary font-bold text-lg'>Lohn noe</span>
                        <span className='text-gray-500'> Customer</span>
                        <p className='text-center pt-3 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate dignissimos
                             porro suscipit pariatur? Sunt minima debitis distinctio facilis excepturi dolore, 
                            itaque autem voluptatum possimus eveniet minus ea impedit molestias numquam.</p>
                    </div>
                 </div>

                {/*cadre 2 */}

                <div className='w-full lg:w-1/3 py-2 px-2'>
                    <div className='bg-white py-20 rounded-lg flex flex-col items-center px-10'>
                        <img  className=' w-12  h-12 rounded-full mb-6' src={plati2} alt="" />
                        <span className=' text-primary font-bold'>John noe</span>
                        <span className='text-gray-500'> Customer</span>
                        <p className=' pt-3 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate dignissimos
                             porro suscipit pariatur? Sunt minima debitis distinctio facilis excepturi dolore, 
                            itaque autem voluptatum possimus eveniet minus ea impedit molestias numquam.</p>
                    </div>
                 </div>

                 {/* cadre3  */}

                 <div className='w-full lg:w-1/3  py-2 px-2'>
                    <div className='bg-white py-20 rounded-lg flex flex-col items-center px-10'>
                        <img className=' w-12  h-12 rounded-full mb-6' src={plati2} alt="" />
                        <span className=' text-primary font-bold'>John noe</span>
                        <span className='text-gray-500 '> Customer</span>
                        <p className=' pt-3 text-center '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate dignissimos
                             porro suscipit pariatur? Sunt minima debitis distinctio facilis excepturi dolore, 
                            itaque autem voluptatum possimus eveniet minus ea impedit molestias numquam.</p>
                    </div>
                 </div>
            </div>


            {/*petit cadre */}

            <div className='flex flex-wrap -mx-4'>

                 {/* cadre div 1 */}
                <div className='w-1/2 lg:w-1/6 py-2 px-3'>
                    <div className='bg-white  py-3 px-2 rounded-lg flex flex-col items-center'>
                        <img  className = "w-20  " src={plati1} alt="" />
                        <span className='py-2'>lorinf jkildd</span>
                    </div>
                </div>

                
                 {/* cadre div 2 */}
                 <div className='w-1/2 lg:w-1/6 py-2 px-3'>
                    <div  className='bg-white  py-3 px-2 rounded-lg flex flex-col items-center'>
                        <img  className = "w-20  " src={plati1} alt="" />
                        <span className='py-2'>lorinf jkildd</span>
                    </div>
                </div>

                
                 {/* cadre div 3 */}
                 <div className='w-1/2 lg:w-1/6 py-2 px-3' >
                    <div  className='bg-white  py-3 px-2 rounded-lg flex flex-col items-center'>
                        <img className = "w-20  "  src={plati1} alt="" />
                        <span className='py-2'>lorinf jkildd</span>
                    </div>
                </div>

                
                 {/* cadre div 4 */}
                 <div className='w-1/2 lg:w-1/6 py-2 px-3'>
                    <div  className='bg-white  py-3 px-2 rounded-lg flex flex-col items-center'>
                        <img className = "w-20  "  src={plati1} alt="" />
                        <span className='py-2'>lorinf jkildd</span>
                    </div>
                </div >

                
                 {/* cadre div  5*/}
                 <div className='w-1/2 lg:w-1/6 py-2 px-3'>
                    <div  className='bg-white  py-3 px-2 rounded-lg flex flex-col items-center shadow-black'>
                        <img className = "w-20  "    src={plati1} alt="" />
                        <span className='py-2'>lorinf jkildd</span>
                    </div>
                </div>

                
                 {/* cadre div 5*/}
                 <div className='w-1/2 lg:w-1/6 py-2 px-3'>
                    <div  className='bg-white  py-3 px-2 rounded-lg flex flex-col items-center'>
                        <img className = "w-20  " src={plati1} alt="" />
                        <span className='py-2'>lorinf jkildd</span>
                    </div>
                </div>

                

            </div>

        </div>
      </section>
    </>
  )
}

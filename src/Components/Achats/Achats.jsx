import React from 'react'

export default function Achats() {
  return (
    <>
    <section className='py-20 bg-gradient-to-r from-blue-900 to-blue-950  text-white'>
        <div className='container mx-auto px-8 lg:px-0'>
            <h3 className='text-center text-3xl font-bold mb-8'>Lorem ipsumr sit amet loroem buffer djhfu.</h3>

            <div className='flex flex-wrap -mx-4 items-center'>
                 {/* div1 */}
                <div className=' w-full lg:w-1/3 bg-white mb-5  rounded-lg lg:rounded-tr-lg lg:rounded-br-lg text-blue-900 pricing-card
                                 flex  flex-col items-center justify-around py-10'>
                        <div className='items-center flex flex-col'>
                            <span className='text-2xl font-semibold'>spacker packages</span>
                            <p>Lorem ipsum dolor</p>
                        </div>
                        <span className='text-4xl font-bold'> $3/month</span>
                        <a href="#" className='btn'> Buy now</a>
                </div>

                  {/* div2 */}
                  
                        {/* div1 */}
                <div className='w-full lg:w-1/3 bg-pink-700  mb-5   pricing-card-main flex  flex-col items-center justify-around py-3'>
                        <div className='items-center flex flex-col'>
                            <span className='text-2xl font-semibold'>spacker packages</span>
                            <p>Lorem ipsum dolor</p>
                        </div>
                        <span className='text-4xl font-bold'> $3/month</span>
                        <a href="#" className='btn2'> Buy now</a>
                </div>
                   {/* div3 */}

                    {/* div1 */}
                <div className='w-full lg:w-1/3 bg-white  mb-5  rounded-lg lg:rounded-tr-lg lg:rounded-br-lg text-blue-900 pricing-card
                                 flex  flex-col items-center justify-around py-10'>
                        <div className='items-center flex flex-col'>
                            <span className='text-2xl font-semibold'>spacker packages</span>
                            <p>Lorem ipsum dolor</p>
                        </div>
                        <span className='text-4xl font-bold'> $3/month</span>
                        <a href="#" className='btn'> Buy now</a>
                </div>


            </div>
       


        </div>
    </section>
    </>
  )
}

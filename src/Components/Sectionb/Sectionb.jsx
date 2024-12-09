import React from 'react'

export default function Sectionb() {
  return (
    <>
      <section className='bg-blue-300 py-20'>
        <div className='container  mx-auto px-6 lg:px-0'>
            <h2 className='text-center font-bold ? text-3xl text-white'>lorem abahfr grdenfd sfkfirfn fh</h2>
            <p className='text-center py-5'>Lorem ipsum dolor sit amet consectetur adipisicipline</p>

            {/*section div */}

            <div className='flex flex-wrap -mx-4' >
                {/*div1 */}
                <div className ='w-full lg:w-1/3  py-2 px-2'>
                <div className='bg-white rounded-lg text-center  flex flex-col text-blue-300 py-8 px-4 '>
                    <span className='text-yellow-600 text-7xl '><i  class="las la-tachometer-alt"></i></span>
                    <span className='text-black font-semibold pb-4'>lorem kiem</span>
                    <p className='py-2 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis corporis aut, non perspiciatis quod dolore repellat iste similique, 
                        culpa molestiae minima omnis? Et odio natus, debitis culpa ea voluptates. Deserunt!</p>
                </div>
                </div>



                 {/*div1 */}
                 <div className ='w-full lg:w-1/3 py-2 px-2'>
                <div className='bg-white rounded-lg text-center  flex flex-col text-blue-300 py-8 px-4 '>
                    <span className='text-yellow-600 text-7xl '><i class="las la-deaf"></i></span>
                    <span className='text-black font-semibold pb-4'>deaf</span>
                    <p className='py-2 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis corporis aut, non perspiciatis quod dolore repellat iste similique, 
                        culpa molestiae minima omnis? Et odio natus, debitis culpa ea voluptates. Deserunt!</p>
                </div>
                </div>


                 {/*div1 */}
                 <div className ='w-full lg:w-1/3 py-2 px-2'>
                <div className='bg-white rounded-lg text-center  flex flex-col text-blue-300 py-8 px-4 '>
                    <span className='text-yellow-600 text-7xl '><i class="lab la-digital-ocean"></i></span>
                    <span className='text-black font-semibold pb-4'>Digital Ocean </span>
                    <p className='py-2 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis corporis aut, non perspiciatis quod dolore repellat iste similique, 
                        culpa molestiae minima omnis? Et odio natus, debitis culpa ea voluptates. Deserunt!</p>
                </div>
                </div>


            </div>
        </div>
      </section>
    </>
  )
}

import React from 'react'
import logo from "../../images/logo.png"
import  hero1 from "../../images/hero1.jpg"

export default function () {
  return (
    <>
{/*header */}
     <header className ='pt-10 pb-20  bg-gradient-to-r from-blue-900 to-blue-300'>
         <div className='container mx-auto px-5 lg:px-0'>
        {/* section nav */}
  

              <nav className='flex  justify-between '>
                  <img  className=" w-8" src={logo} alt="" />

                  <input type="checkbox" id='menu-toggler' className='lg:hidden'/>
                  <span className='text-white text-2xl lg:hidden' id='menu-bars'>
                    <i class="las la-bars barss"></i>
                    <i class="las la-times close hidden"></i>
                  </span>
                  <div className='hidden lg:flex menu'>
                      <a href="#" className=' mb-8 lg:mb-0 ml-3 text-3xl lg:text-base text-white '> Acceui</a>
                      <a href="#" className=' mb-8 lg:mb-0 ml-3 text-3xl lg:text-base text-white'> Contact</a>
                      <a href="#" className=' mb-8 lg:mb-0 ml-3 text-3xl lg:text-base text-white'> Services</a>
                       <a href="#" className=' mb-8 lg:mb-0 ml-3 text-3xl lg:text-base text-white'> Autres</a>
        

                  </div>
              </nav>

         {/* section  img nav */}

         `    <div className='flex py-6 mt-22 items-center '>
                  <div className='w-full lg:w-1/2'>

                     <h1 className=' text-3xl font-bold text-white lg:text-4xl'>Lorem ipsum, placeat ipsam?
                       <span className='font-poppins'>Tempora.</span></h1>
                     <p className='py-7 text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum nisi cupiditate veritatis similique, eaque aut architecto harum. Voluptatum, ex earum necessitatibus quod
                        asperiores sit natus aut praesentium reprehenderit incidunt obcaecati.</p>

                     <button className='btn-primary my-5' > Envoyer</button>
                  </div>
                  <div className=' hidden  lg:flex w-1/2  justify-center'>
                    <img className='  w-80 rounded-l-lg hidden lg:flex  ' src={hero1} alt="" />
                  </div>



              </div>
         </div>
     </header> 
    </>
  )
}

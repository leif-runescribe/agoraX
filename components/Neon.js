
import React from 'react'
import neon from './neon.module.css';

const Neon = () => {
  return (
    <div  className={`font-extrabold  ${neon['Ncont']}  `}>
        <div  className={neon.home}>
        <div className={` max-w-full flex ${neon['top']}`}>
        
        
        <h1 className="text-5xl text-white p-20">Gain Control,<span className='text-red-400 text-6xl'>  Build Trust</span></h1>
         <div className={neon.light} >         
        <a href = "#"><h1 className='animate-bounce'> Blockchain Services for Modern Enterprises</h1></a>       
         </div>

         <div className='flex flex-row lg:flex-row sm:flex-col xs:flex-col'>
        <div className=' flex flex-row lg:flex-row sm:flex-col xs:flex-col fixed top-60 left-0 right-90 -translate-y-10 scroll-smooth animate-scale-105'>
         <img className='mx-auto max-w-full ' src="/2.png" style={{ height: '200px', objectFit: 'cover' }}/>
         {/* <img className='mx-auto max-w-full mt-10 ml-96' src="/3.png" style={{ height: '300px', objectFit: 'cover' }}/> */}
         
        </div>
        </div>


        <div>
        <h1 className="text-5xl text-white "></h1>
        </div>
        </div>

        <div className='p-10'>

        </div>
        

        
    </div>
   
    
    </div>
  )
}

export default Neon
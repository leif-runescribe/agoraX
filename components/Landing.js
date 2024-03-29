'use client'
import React from 'react'
import Glow from './Glow'
import Base from './Base'
import Image from 'next/image';
import { RevealWrapper } from 'next-reveal';

const Landing = () => {
  
  
  return (
    
    <Base>
    <div className="rev pt-20  min-h-screen md:pr-40 md:pl-40 pb-40 max-w-full">
      <div className=''>
      <h1 className=' font-mono text-center text-7xl md:text-9xl text-violet-400 mx-w-full p'>agoraX </h1>
      <br/>
      <h2 className='text-white px-10 font-extralight text-5xl  text-violet-400'>automate your supply chain</h2>
      </div>
      <div>
      {/*box*/}

      
      <div className='flex flex-col mx-w-full'>   
      <div className="flex flex-col xs:flex-col lg:flex-row p-12">
        <RevealWrapper>
      <Image
        className=' mx-auto max-w-full transition-transform hover:-translate-x-2 hover:translate-y-2 '
        src="/1.png"
        alt="Image description" 
        layout="responsive" 
        width={10} 
        height={300} 
        objectFit="cover" 
        quality={80}     
/></RevealWrapper>
<RevealWrapper>
          <h1 className="font-bold text-3xl text-white ">Leading Supply Chain Management Solutions <span className='text-red-300'>for</span> small to big businesses and enterprises
          <br/> <br/>We enable YOU, to seemlessly track the entire life cycle of your products <br/><br/>      
          <h1 className='text-3xl text-slate-400'>Utilizing the power of blockchain technology, we offer <span className='text-red-200'>security & transparency</span>, <br/><br/>every step of your supply chain becomes traceable and accountable.<br/></h1></h1></RevealWrapper>
        
        </div>
         
      <div className="flex flex-col lg:flex-row-reverse mx-w-full p-20 xs:flex-col sm:flex-col ">
      <RevealWrapper>
      <Image
      className='mx-auto max-w-full transition-transform hover:translate-x-2 hover:translate-y-2'
      src="/5.png"
      alt="Image description"
      width={400} 
      height={40} 
      objectFit="cover"
      quality={80} 
/></RevealWrapper>
          <RevealWrapper>
        <h1 className="hide font-bold text-3xl text-white ">
          <br/>Discover the next frontier in supply chain management with <span className='font-mono text-6xl text-violet-400'>agoraX</span><br/><br/> Tailored blockchain solutions providing unparalleled transparency, efficiency, and security for businesses of all sizes. <br/><br/>From procurement to delivery, we are committed to empowering organizations to thrive in an ever-evolving marketplace</h1>
              </RevealWrapper>
        </div>
        
      </div>
      
      <div className='items-center text-center 0 md:pr-0'><span className='text-4xl md:text-6xl  font-extrabold text-white'><br/> <RevealWrapper reset={true} viewOffset={{top:  5,  right:0,  bottom:  10,  left:5}}>your valuable assets are protected from </RevealWrapper><br/><br/> <span className='text-red-400'><RevealWrapper  reset={true} viewOffset={{top:  5,  right:0,  bottom:  10,  left:5}}>fraud, counterfeiting, and unauthorized access</RevealWrapper></span> <br/><br/><span className='text-2xl'><RevealWrapper  reset={true} viewOffset={{top:  5,  right:0,  bottom:  10,  left:5}}>giving you peace of mind </RevealWrapper></span></span></div>
      
      </div>
      

    </div>
    </Base>
    

  )
}

export default Landing
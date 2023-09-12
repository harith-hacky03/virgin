import React, { useEffect, useState,useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
const Contact = () => {
    const infor=["NAME* :","MOBILE NUMBER* :","EMAIL* :","CITY* :","MESSAGE* :"]
    const head=useRef(null)

    function isMobile() {
        return window.innerWidth < 768;
      }

    useEffect(()=>{
        const h=head.current
        
        if(!isMobile()){
        gsap.fromTo(h,{
            opacity:0,
            x:1000
           
        },{
            x:0,
            opacity:1,
            scrollTrigger:{
                trigger:h,
                toggleActions:"restart reverse none none",
                scrub:true
            }
        })}
    })
  return (
    <div id='Contacts' className=' overflow-x-hidden md:mx-10'>
        <div ref={head} className='title w-[70%] text-center md:w-[40%] mx-auto text-5xl md:mb-8  py-12 md:text-[130px]'>Contacts</div>
        <div className='md:grid grid-cols-2 bg-[#E0DEDE] py-5 rounded-lg'>
    
            <div className='conth md:p-10 p-7  '>
            <div className='text-left text-2xl   md:text-3xl'>Send Instant Mail To Us</div>
            <form className='md:mx-20' action="https://formsubmit.co/virginshelters@gmail.com" method="POST">
                <div className='mt-10  '>
                    <label className='mr-28'>Name* :</label>
                    <input className='md:px-6  rounded-lg py-1' type="text" name="name" required/>
                    </div>
                    <div className='mt-10'>
                    <label className='mr-28'>Email* :</label>
                    <input className='md:px-6 rounded-lg py-1' type="email" name="email" required/>
                    </div>
                    <div className='mt-10'>
                    <label className='mr-8'>Mobile Number* :</label>
                    <input className='md:px-6 rounded-lg py-1' type='number' name="mobile number" required/>
                    </div>
                    <div className='mt-10'>
                        <label className='mr-32'>City :</label>
                        <input className='md:px-6 rounded-lg py-1' type='text' name='city' />
                    </div>
                    <div className='mt-10 items-center'>
                    <label className='md:mr-[89px] md:absolute '>Message* :</label>
                    <textarea className='md:px-8 h-32 md:h-20 md:absolute left-[50px]  border-black md:left-[330px] rounded-lg ' type='text' name='message' required />
                    </div>
                    <button className='md:mt-24 mt-8 ml-[70%] text-white bg-black px-5 py-1' type="submit">Send</button>
            </form>
            </div>
            <div className='items-center flex'>
            <iframe className='md:w-[600px] w-[330px] h-[300px] mx-auto md:h-[400px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d324504.1900294226!2d76.8561061040183!3d10.866784853437872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f83d8860452d%3A0xe96d88b4228f4c1a!2sVirgin%20Paper%20Agency!5e0!3m2!1sen!2sin!4v1694443679971!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Contact
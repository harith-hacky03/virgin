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
        <div ref={head} className='title w-[70%] text-center md:w-[40%] mx-auto text-5xl md:mb-8  py-8 md:text-[130px]'>Contacts</div>
        <div className='md:grid grid-cols-2 bg-[#E0DEDE] py-5 rounded-lg'>
    
            <div className='conth md:p-10 p-7  '>
            <div className='text-left text-2xl underline decoration-green-700 underline-offset-8  md:text-3xl'>Send Instant Mail To Us</div>
            <form className='md:mx-10' action="https://formsubmit.co/virginshelters@gmail.com" method="POST">
                <div className='md:flex'>
                <div className='mt-10  '>
                    
                    <input className='md:px-7 md:w-[100%]  pl-3 w-[97%] mr-9 py-2' placeholder='Name*' type="text" name="name" required/>
                    </div>
                    <div className='mt-10'>
                   
                    <input className='md:px-7 md:w-[100%] md:pr-40 md:ml-3  pl-3 w-[97%] py-2' type="email" placeholder='Email*' name="email" required/>
                    </div>
                    </div>
                    <div className='md:flex'>
                    <div className='mt-10'>
                  
                    <input className='md:px-7 pl-3 w-[97%]  py-2 mr-9' placeholder='Mobile Number*' type='number' name="mobile number" required/>
                    </div>
                    <div className='mt-10'>
                     
                        <input className='md:px-7 md:w-[100%] md:ml-2 md:pr-40  w-[97%] pl-3  py-2' placeholder='City*' type='text' name='city' />
                    </div>
                    </div>
                    <div className='mt-10 items-center'>
                  
                    <textarea className='md:w-[37%] w-[97%] pl-3  md:h-20 md:absolute pt-1 px-14   border-black  ' placeholder='Message*' type='text' name='message' required />
                    </div>
                    <button className='md:mt-24 mt-8 md:ml-[77%] rounded-none text-white  bg-green-900 px-9 py-1' type="submit">Submit</button>
            </form>
            </div>
            <div className='items-center flex'>
            <iframe className='md:w-[600px] w-[330px] h-[300px] mx-auto md:h-[400px]' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3915.7332118715008!2d77.00299467472895!3d11.058617789107831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%23195%2F1%2C%20Balaji%20Nagar%2C%20Vilankurichi%20Road%2C%20%20Coimbatore-641%20035.!5e0!3m2!1sen!2sin!4v1696355842152!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
                </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Contact
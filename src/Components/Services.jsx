import React, { useEffect, useState,useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import lp from '../Assests/lp.png'
import service2 from '../Assests/service2.jpg'
import service3 from '../Assests/service3.png'
gsap.registerPlugin(ScrollTrigger)
const Services = () => {
    const head=useRef(null)
    const img1=useRef(null)
    const img2=useRef(null)
    const img3=useRef(null)

    function isMobile() {
        return window.innerWidth < 768;
      }

    
    useEffect(()=>{
        const h=head.current
        if (!isMobile()) {
        gsap.fromTo(h,{
            opacity:0,
            x:-1000
        },{
            x:0,
            opacity:1,
            scrollTrigger:{
                trigger:h,
                toggleActions:"restart reverse none none",
                scrub:true
            }
        })

       
          

        
        const im1=img1.current
        gsap.fromTo(im1,{
            opacity:0,
            scale:-0.5
        },{
            opacity:1,
            scale:1,
            duration:2,
            scrollTrigger:{
                trigger:h,
                scrub:true
            }
        })

        const im2=img2.current
        gsap.fromTo(im2,{
            opacity:0,
            scale:-0.5
        },{
            opacity:1,
            scale:1,
            duration:2,
            scrollTrigger:{
                trigger:im1,
                scrub:true
            }
        })

          const im3=img3.current
        gsap.fromTo(im3,{
            opacity:0,
            scale:-0.5
        },{
            opacity:1,
            scale:1,
            duration:2,
            scrollTrigger:{
                trigger:im2,
                scrub:true
            }
        })}
    
    },[])
  return (
    <div id='Services' className='min-h-screen pt-10  md:mx-10 md:mb-20'>
        <div ref={head} className='title w-[50%]  md:py-12 text-center text-5xl mb-8 mx-auto md:text-[130px]'>Services</div>
        <div className='md:grid grid-rows-3 '>
            <div className='md:flex items-center mx-5'>
                <img className='rounded-lg md:w-[500px]'  ref={img1} width={380} src={lp} alt=''/>
                <div className='md:ml-20 mt-4'>
                    <div className='subh font-extrabold text-[22px] md:text-[30px] underline'>Land Promotions </div>
                    <div className='int  mt-6 md:leading-8 text-[16px] md:text-[20px]'>At Virgin Shelters, we are your trusted partner in land promotion services. Our team of experts excels in creating innovative, sustainable development plans that maximize the value of your property. With a keen understanding of regulatory processes, we efficiently navigate permits and approvals. Environmental sustainability is at the heart of our approach, ensuring minimal impact on the surroundings. Through thorough market research and strategic marketing, we connect you with the right buyers and investors, making your project economically viable. With years of experience, ethical practices, and a proven track record of success, Virgin Shelters is your key to unlocking the full potential of your land.</div>
                </div>
               
            </div>
            <div className='md:flex py-10 md:py-0 md:bg-white   bg-[#E0DEDE] items-center mt-10'>
            <img className='md:ml-20 mx-auto  md:hidden flex rounded-lg md:h-[300px] w-[300px] md:w-[650px]' ref={img2} width={250} src={service2} alt=''/>
                <div className='mt-4 mx-5'> 
                    <div className='subh font-extrabold text-[22px] md:text-[30px] underline'>Constructions </div>
                    <div className='int  mt-6 md:leading-8 text-[16px] md:text-[20px]'>
Virgin Shelters Construction Services is your reliable partner in turning visions into reality. With a skilled team of builders, engineers, and project managers, we bring craftsmanship and innovation to every project, whether it's residential, commercial, industrial, or infrastructure development. Our commitment to quality, sustainability, and attention to detail ensures that each structure we build not only meets but exceeds your expectations. From green building practices to historic restoration, we transform spaces into enduring works of art, enhancing the communities we serve. Choose Virgin Shelters Construction Services to bring your construction projects to life with excellence.</div>
                </div>
                <img className='ml-20 hidden md:flex rounded-lg h-[300px]  md:w-[850px]' ref={img2} width={250} src={service2} alt=''/>
            </div>
            <div className='md:flex mt-10 mx-5'>
            <img className='mr-20 rounded-lg md:w-[550px] w-[600px]' ref={img3} width={500} src={service3} alt=''/>
                <div className='mt-4'>
                    <div className='subh font-extrabold text-[22px] md:text-[30px] underline'>Property Development </div>
                    <div className='int mt-6 text-[16px] md:leading-8 md:text-[20px]'>
                    Virgin Shelters Property Development Services is your partner in creating exceptional real estate developments. Our seasoned team of developers, architects, and urban planners is dedicated to crafting visionary and sustainable projects. From residential communities and commercial centers to mixed-use complexes, our expertise transforms ideas into thriving, vibrant spaces. With a focus on quality, innovation, and community integration, we redefine real estate development. Choose Virgin Shelters for excellence in property development, where every project becomes a testament to our commitment to excellence.</div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Services
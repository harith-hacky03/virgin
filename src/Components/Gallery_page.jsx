import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Gate from '../Assests/Gate.jpg'
import Design from '../Assests/Design.jpg'
import Home from '../Assests/Home.png'
import Land1 from '../Assests/Land1.jpg'
import Land2 from '../Assests/Land2.jpg'
import pic1 from '../Assests/pic1.jpg'
import pic2 from '../Assests/pic2.jpg'
import pic3 from '../Assests/pic3.jpg'
gsap.registerPlugin(ScrollTrigger)


const Gallery_page = () => {
    const sub=["Exceptional Customer Service","Personalized Guidance","Effortless Transactions"]
    const sub2=["Your Needs, Your Schedule","Responsive and Reliable","Transparency and Integrity"]
    const gu=useRef(null)
    function isMobile() {
        return window.innerWidth < 768;
      }

    useEffect(()=>{
        const g=gu.current

        if(!isMobile()){
        gsap.fromTo(g,{
            x:500,
            opacity:0
        },{
            x:0,
            opacity:1,
            scrollTrigger:{
                trigger:g,
                toggleActions:"restart reverse none none",
                scrub:true
            }
        })}
    },[])
  return (

    <div id='About' className='min-h-screen overflow-hidden md:pt-0 pt-10 bg-[#E0DEDE]'>
        <div ref={gu} className='w-[70%] md:py-14  text-center md:text-left mx-auto md:w-[100%] md:ml-[16%] text-black tit text-3xl  md:text-[130px]'>
            Why Choose Us
        </div>
        <div className='md:flex'>
            <div className='hidden md:block'>
            {sub.map((s)=>{
                return(
                    <div className='w-[70%] bg-white rounded-lg p-3 text-2xl mt-14 text-center subh font-bold ml-10'>{s}</div>
                )
            })}
           </div>
        <Carousel showIndicators={false} useKeyboardArrows interval={5000} autoPlay  infiniteLoop showArrows stopOnHover={false} className='mt-12 w-[500px] md:w-[900px] mx-auto'>
                <div className='w-[330px]  md:w-[700px] md:h-[500px] md:ml-[100px]  mx-5'>
                    <img  className='border-2  border-black' src={Gate} alt=''/>
                </div>
                <div className='md:w-[700px] w-[350px] md:h-14 md:ml-[100px] mx-2'>
                    <img src={pic1} alt=''/>

                </div>
                <div className='md:w-[700px] w-[350px] md:h-14 md:ml-[100px] mx-2'>
                    <img src={pic3} alt=''/>

                </div>
                
                
                <div className='md:w-[700px] w-[350px] md:h-14 md:ml-[100px] mx-2'>
                    <img src={Land1} alt=''/>

                </div>
                <div className='md:w-[700px] w-[350px] md:h-14 md:ml-[100px] mx-2'>
                    <img src={Land2} alt=''/>

                </div>
                <div className='md:w-[700px] w-[350px] md:h-14 md:ml-[100px] mx-2'>
                    <img src={pic2} alt=''/>

                </div>
               

            </Carousel>
            <div className='pb-5'>
            {sub2.map((s)=>{
                return(
                    <div className='md:w-[60%] md:text-2xl w-[70%] mt-2 text-center bg-white rounded-lg p-3 mx-auto md:mt-14 subh font-bold md:ml-10'>{s}</div>
                    
                )
            })}
            {sub.map((s)=>{
                return(
                    <div className='md:w-[60%] md:hidden md:text-2xl w-[70%] mt-3  bg-white rounded-lg py-2  text-center mx-auto md:mt-14 subh font-bold md:ml-10'>{s}</div>
                )
            })

            }
            </div>
            </div>
            <div>
          
            </div>
    </div>
  )
}

export default Gallery_page
import React, { useState } from 'react'
import './Landing_page.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Flip from 'gsap/Flip'
import land_background from '../Assests/land_background.png'
import { useEffect,useRef } from 'react'
import menu2 from '../Assests/menu2.png'
import close from '../Assests/close.png'
import vp1 from '../Assests/vp1.png'
import loc from '../Assests/loc.png'
import vif from '../Assests/vif.mp4'
import Brochure from '../Assests/Brochure.pdf'
import log1 from '../Assests/log1.png'
import gre from '../Assests/gre.png'
gsap.registerPlugin(Flip)
const Landing_page = () => {
    const head=useRef(null)
    const sh=useRef(null)
    const [menu,setMenu]=useState(true)
    const imgref=useRef(null)
    useEffect(()=>{
        const hea=head.current
        gsap.fromTo(hea,{
            x:-100,
            opacity:0
        },{
            x:0,
            opacity:1,
            duration:1,
            
        })
        const s=sh.current
        gsap.fromTo(s,{
            x:100,
            opacity:0
            
        },{
            x:0,
            opacity:1,
            duration:1
        })
        const im=imgref.current
        gsap.fromTo(im,{
            opacity:0,
            scale:-0.2
        },{
            opacity:1,
            duration:2,
            scale:1,
       })
    },[])


    const leftnav=["About","Services","Contacts"]
    
  return (
    <div id='Logo' className='md:min-h-screen overflow-hidden mb-10 md:mb-0'>
        <div className='md:flex ml-10 justify-between w-[95%] hidden '>
        <a href='#Logo' onClick={()=>{setMenu(true)}}><img  className='w-[60px] md:mt-3 mt-20 mx-auto' src={log1}/></a>
        {leftnav.map((lt)=>{
            return(    
                <a href={`#${lt}`} className='mt-5 call font-bold cursor-pointer'>{lt}</a>

            )
        })}
        
        <a href={Brochure} className='z-10 flex' download=""><button className='ml-16 py-2 mr-8 flex px-3 call text-white  z-10 mt-5 cursor-pointer'><img src={gre} className='w-[25px] mr-2'/>Download Brochure</button></a>
        
        </div>
        <div className='hidden square relative w-[0px] h-[0px]  md:absolute md:right-[500px] md:top-[138px] md:w-[21%] md:h-[34%]'></div>
        <div className='absolute top-0  right-0 square w-[0px] md:w-[500px] md:h-[100vh]'></div>
        <div className='md:hidden w-[100%] mx-auto text-center mt-5'>
        <div className='flex'>
        <img onClick={()=>{setMenu(false)}} className='w-[30px] ml-5' src={menu2}  alt=''/>
        <div className='title ml-8 text-3xl'>Virgin Shelters</div>
        </div>
        <div className={`overflow-y-hidden delay-100 absolute top-[-5px] overflow-hidden h-[100vh]  rounded-lg bg-[#0f273c] text-white  call w-[100%] z-30 ${menu&&'hidden'}`}>
            <img onClick={()=>{setMenu(true)}}  className='bg-white w-[30px] absolute top-5 right-5' src={close} />
            <a href='#Logo' onClick={()=>{setMenu(true)}}><img  className='w-[60px] mt-20 mx-auto' src={vp1}/></a>
            {leftnav.map((l)=>{
                return(
                    <a href={`#${l}`} onClick={()=>{setMenu(true)}} className=' ease-in-out duration-500 transition-all block mt-16 call font-bold cursor-pointer'>{l}</a>
                )
            })}
            <a href={Brochure} className='z-10 flex mt-8' download=""><button className='ml-16 py-2 mr-8 flex px-3 call text-white  z-10 mt-5 cursor-pointer'><img src={gre} className='w-[25px] mr-2'/>Download Brochure</button></a>
        
        </div>
        </div>
        <video ref={imgref} className='z-[-10] md:z-10 md:absolute right-16 top-[147px] w-[90%] border-[4px] border-green-700 md:rounded-lg rounded-lg mx-auto mt-5 md:mt-0 md:w-[52.5%] img1 ' controls autoPlay width={900} src={vif} alt=''/>
        <div ref={head} className='title md:mt-[5%] ml-10 hidden md:flex text-[600%]'>Virgin</div>
        <div ref={sh} className='title ml-10 hidden md:flex  top-[150px] text-[600%]'>Shelters</div>
        <div className='call font-semibold md:w-[37%] md:mt-0 mt-10 mx-5 md:text-[16px] text-[13px] md:ml-10'>Virgin Shelters is more than a company; it's a commitment to quality, sustainability, and customer satisfaction. With years of experience and a team of dedicated experts, we have established ourselves as a reputable force in the real estate industry. Our journey began with a singular goal - to create spaces where people can live, work, and flourish. Today, we continue to exceed expectations and set new benchmarks in the sector.</div>
    </div>
  )
}

export default Landing_page
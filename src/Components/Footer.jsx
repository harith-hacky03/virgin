import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black mt-10 pb-10 md:text-left text-center md:grid grid-cols-2'>
        <div className='pt-10'>
            <div className='text-white md:mx-10 conth'>
                <div className='conth md:text-3xl text-2xl text-green-400'>Virgin Shelters</div>
                <div className='mt-5 md:text-[16px] text-[12px]'>
Virgin Paper Agency<br/>
SF No- 42/2,<br/> Site No- 42, 43, Co-Operative Colony,<br/> Kalapatti Main Rd, Thriveni West,<br/> Villankurichi, Coimbatore,<br/> Tamil Nadu 641035</div>
            </div>
        </div>
        <div className='text-white conth pb-10'>
            <div className='pt-10 md:text-[16px] text-[12px]'>Mobile : +91 94433 67850<br/><span className='md:ml-16 ml-12 '>+91 99524 26785</span> </div>
        
            <div className='mt-5 md:text-[16px] text-[12px]'>Email  : virginshelters@gmail.com </div>
            <div className='conth md:text-2xl mt-5 text-green-400'>“Landlords grow rich in their sleep.” </div>
            <div className='conth md:ml-60 mt-4 md:text-xl text-green-400'>-John Stuart Mill</div>
        </div>
    </div>
  )
}

export default Footer
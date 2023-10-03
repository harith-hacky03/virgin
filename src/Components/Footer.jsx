import React from 'react'
import ph2 from '../Assests/ph2.png'
import am from '../Assests/am.png'
const Footer = () => {
  return (
    <div className='bg-[#0f273c] mt-10 pb-10 md:text-left text-center md:grid grid-cols-2'>
        <div className='pt-10'>
            <div className='text-white md:mx-10 conth'>
                <div className='conth md:text-3xl text-2xl text-green-400'>Virgin Shelters India Private Limited</div>
                <div className='mt-5 md:text-[16px] text-[12px]'>
<span className='text-2xl '>Promoted by</span><br/>
Virgin Shelters India Private Limited<br/> #195/1, Balaji Nagar,<br/> Vilankurichi Road, <br/>
Coimbatore-641 035,<br/>Tamil Nadu.</div>
            </div>
        </div>
        <div className='text-white conth pb-10'>
            <div className='pt-10 md:text-[16px] text-[12px] md:w-[100%] w-[70%] mx-auto flex mr-4'><img className='md:mr-12 mr-3 md:w-[40px] w-[31px]  ' src={ph2} width={50}/><div className=''>+91 94433 67850<br/><span className=''>+91 98422 57138</span></div> </div>
        
            <div className='mt-5 md:text-[16px] text-[12px] md:w-[100%] w-[60%] mx-auto'><div className='flex items-center'><img width={50} className='md:mr-12 md:w-[40px] mr-3 w-[30px]' src={am}/>virginshelters@gmail.com</div> </div>
            <div className='conth md:text-2xl mt-5 text-green-400'>“Landlords grow rich in their sleep.” </div>
            <div className='conth md:ml-60 mt-4 md:text-xl text-green-400'>-John Stuart Mill</div>
        </div>
    </div>
  )
}

export default Footer
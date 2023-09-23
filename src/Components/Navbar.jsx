import React from 'react'

const Navbar = () => {
   const navit=["Home","About","Services","Contact","Download"]
  return (
    <div>
        {navit.map((nav)=>{
            return(
                <div>{nav}</div>
            )
            
        })}
    </div>
  )
}

export default Navbar
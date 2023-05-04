import React from 'react'
import './Menu.css'
import {NavLink} from 'react-router-dom'
const Menu = ({active,setActive}) => {
  return (
    <div className={active ? "modal open" : "modal"} onClick={()=> setActive(false)}>
       <div className="modal_con" onClick={e => e.stopPropagation()}>
        <button onClick={()=>setActive(false)}>x</button>


        <div className='nav'>
        <NavLink to='/'> Home</NavLink>
        <NavLink to='/About'>About </NavLink>
        <NavLink to='/Service'> Service</NavLink>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid possimus, quaerat impedit quos dolore optio porro aliquam ratione, minus nam esse sunt ullam suscipit vel. Reiciendis autem aliquam dolorem dolor?
        </div>
       </div>
    </div>
  )
}

export default Menu
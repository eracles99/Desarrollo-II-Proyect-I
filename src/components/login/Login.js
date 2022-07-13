import React from 'react'
import {  NavLink } from 'react-router-dom'
export const Login = () => {
  return (
    <div style={{
      backgroundImage: "url(" + "https://wallpapers.com/images/high/breaking-bad-rv-in-field-84c9nlwpdd0mda21.jpg" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat' }}>
        <img src="https://i.pinimg.com/originals/37/4a/0f/374a0f8e2d77ba6850be6b14ab1864fc.jpg" style={{ width: 724,height:657}}/>
       {/* style={{position:"relative",rigth:50}} */}
       <h1 style={{position:"absolute",top:100,right:40,color:"white",fontFamily:"Copperplate Gothic Light",fontSize:30}}>Proyecto Ingenieria de software II</h1>
       <h1 style={{position:"absolute",top:600,right:40,color:"white",fontSize:15}}>Michael Antonni - Angel Placido</h1>
      <li className="btn btn-dark mt-2 card-body justify-content-between align-items-center " style={{position:"absolute",right:60,top:300,width:510,height:30}} >
        <NavLink 
            className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
            to='/' 
            >
            Ingresar
        </NavLink>
    </li>

      
      

    </div>
  )
}

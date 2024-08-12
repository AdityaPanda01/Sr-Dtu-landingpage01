import { useState } from "react";
import './Navbar.css'

function Navbar(){
 const [menu,setMenu]=useState("")

    return(
        <>
          <div className='navbar'>
      
        <ul>
            <li onMouseEnter={()=>setMenu("home")} onMouseLeave={()=>setMenu("")} className={menu==="home"?"active":""}>Home</li>
            <li onMouseEnter={()=>setMenu("event")} onMouseLeave={()=>setMenu("")} className={menu==="event"?"active":""}>Events</li>
            </ul>
            <div className="nav-logo-text">
             <img src="https://srdtu-revamp.vercel.app/_next/image?url=%2Fbg%2FSR.png&w=96&q=75" alt="" />
            <p>Society of Robotics</p>
            </div>
            <ul>
            <li onMouseEnter={()=>setMenu("council")} onMouseLeave={()=>setMenu("")} className={menu==="council"?"active":""}>Council</li>
            <li onMouseEnter={()=>setMenu("contact us")} onMouseLeave={()=>setMenu("")} className={menu==="contact us"?"active":""}>Contact Us</li>
        </ul>
        <hr></hr>
    </div>
   
        </>
    )
}
export default Navbar ;

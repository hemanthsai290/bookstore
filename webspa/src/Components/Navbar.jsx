import React from 'react'
import { FaBell } from 'react-icons/fa'
import { FcSearch } from "react-icons/fc"
import ar from "../assets/ar.svg"
import gb from "../assets/gb.svg"

const Navbar = () => {
 

  return (
      <>
      <nav class="navbar navbar-expand-sm bg-light navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">BOOK CODE</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="1"><FaBell/></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="1"><FcSearch/></a>
        </li>
        
              <li class="nav-item">
              
              <img src={ar} alt="Arabic" style={{ width: "3.2rem", height: "3.2rem" }} class="nav-link">
                  
                  </img>
                
                            </li>
              <li class="nav-item">
              
              <img src={gb} alt="English" style={{width:"3rem" ,height:"3rem"}} class="nav-link"></img>
              </li>
              <li class="nav-item">
          <a class="nav-link" href="1" >Welcome,Admin</a>
              </li>

      </ul>
    </div>
  </div>
</nav>
      
      </>
  )
}

export default Navbar


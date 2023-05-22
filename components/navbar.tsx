/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from 'react'
import { HiOutlineViewList } from "react-icons/hi";
import style from "../styles/navbar.module.scss"
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";





const navbar=()=> {
  const [active,setActive]=useState<number>(1);
 
  function activeClass(num:number){
setActive(num)
  }
  
  return (
    <>
    <section className={style.navbar_container}>
    <IconContext.Provider value={{ className: style.iconList }}>
        <div className={style.navbar_listIcon} >
            <HiOutlineViewList/>
        </div>
        </IconContext.Provider>
        <ul className={style.navbar_list}>
        <li className={`${active== 1?style.active:null}`} onClick={()=>activeClass(1)}>Home</li>
        <li className={`${active== 2?style.active:null}`} onClick={()=>activeClass(2)}>My Work</li>
        <li className={`${active== 3?style.active:null}`} onClick={()=>activeClass(3)} >About Me</li>
        <li className={`${active== 4?style.active:null}`} onClick={()=>activeClass(4)}>Skills</li>
        </ul>
        <div className={style.navber_button}>
            <button>Git Hub <FaGithub/> </button>
            <button>Instagram <FaInstagram/></button>
        </div>

    </section>
    </>
  )
}

export default navbar
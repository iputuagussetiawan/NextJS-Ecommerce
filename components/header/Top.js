import styles from "./styles.module.scss"
import {MdSecurity,MdMiscellaneousServices} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'
import {FiHelpCircle} from 'react-icons/fi'
import {RiAccountCircleLine, RiArrowDropDownFill} from 'react-icons/ri'
import Link from "next/link"
import { useState } from "react"
import UserMenu from "./UserMenu"

const Top = () => {
    const [loggedIn,setLoggedIn]=useState(true);
    const [visible,setVisible]=useState(false);
  return (
    <div className={styles.top}>
          <div className={styles.top__container}>
            <div>
            </div>
            <ul className={styles.top__list}>
                <li>
                    <Link href="profile/wishlist"> <span>Indonesia</span></Link>
                </li>
                <li>
                    <MdSecurity/>
                    <Link href="profile/wishlist"> <span>Buyer Protection</span></Link>
                </li>
                <li>
                    <MdMiscellaneousServices/>
                    <Link href="profile/wishlist"> <span>Customer Service</span></Link>
                </li>
                <li>
                    <FiHelpCircle/>
                    <Link href="profile/wishlist"> <span>Help</span></Link>
                </li>
                <li>
                    <AiOutlineHeart/>
                    <Link href="./profile/wishlist"> <span>Wishlist</span></Link>
                </li>
                <li 
                onMouseOver={()=>setVisible(true)} 
                onMouseLeave={()=>setVisible(false)}>
                {loggedIn?(
             
                <div className={styles.flex}>
                    <img src={"/images/usuario.png"}></img>
                    <span>Agus S</span>
                    <RiArrowDropDownFill/>
                </div>
          
                ):(
               
                    <div className={styles.flex}>
                        <RiAccountCircleLine/>
                        <span>Account</span>
                        <RiArrowDropDownFill/>
                    </div>
              
                )}

                {
                    visible &&  <UserMenu loggedIn={loggedIn}></UserMenu>
                }
               
                </li>
               
            </ul>
          </div>
    </div>
  )
}

export default Top

import React, { useRef } from 'react'
import  next_icon from '../assets/next-icon.png'
import back_icon from '../assets/back-icon.png'
import user_1 from '../assets/Atlas.png'
import user_2 from '../assets/60minutes.png'
import user_3 from '../assets/under_paris.png'
import user_4 from '../assets/user_damaged.png'
const Films=()=> {
    const slider=useRef();
    let tx=0;
const slideForward=()=>{
  if (tx>-50){
    tx-=25;
  }
  slider.current.style.transform =`translateX(${tx}%)`;
}
const slideBackward=()=>{
    if (tx < 0){
        tx +=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
    return (
        <div className="testimonials">
           <h1>My Best Films</h1> 
           <img src= {next_icon} alt=""  className='nax-btn' onClick={slideForward}/>
        <img src= {back_icon} alt=""  className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                      <div className='user-info'>
                        <img src={user_1} alt="" />
                        <div> 
                         <h3>Atlas</h3>
                         <span>Action Sci-fi</span>
                        </div>
                      </div>
                        <p>Atlas is a 2024 American science fiction action film starring Jennifer Lopez as a highly skilled counterterrorism analyst, who harbors a profound skepticism towards artificial intelligence, comes to realize that it may be her sole recourse following the failure of a mission aimed at apprehending a rogue robot. </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                      <div className='user-info'>
                        <img src={user_2} alt="" />
                        <div> 
                         <h3>60 Minutes</h3>
                         <span>Action , Sport</span>
                        </div>
                      </div>
                        <p>Desperate not to lose custody, a mixed martial arts fighter makes dangerous enemies when he ditches a matchup to race to his daughter's birthday party. </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                      <div className='user-info'>
                        <img src={user_3} alt="" />
                        <div> 
                         <h3>Under Paris</h3>
                         <span>Horror,Action</span>
                        </div>
                      </div>
                        <p>To save Paris from a bloodbath, a grieving scientist is forced to face her tragic past when a giant shark appears in the Seine.
                        . </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                      <div className='user-info'>
                        <img src={user_4} alt="" />
                        <div> 
                         <h3>Damaged</h3>
                         <span>Action ,Thriller</span>
                        </div>
                      </div>
                        <p>Damaged is a 2024 crime drama film directed by Terry McDonough and starring Samuel L. Jackson, Vincent Cassel and Gianni Capaldi. [2] It follows Chicago-based detective Dan Lawson (Jackson) who investigates a series of serial killings in Scotland. </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    )
}
export default Films
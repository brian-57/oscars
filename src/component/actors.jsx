import React, { useRef } from 'react'
import  next_icon from '../assets/next-icon.png'
import back_icon from '../assets/back-icon.png'
import user_1 from '../assets/Daniel.png'
import user_2 from '../assets/Denzel_Washighton.png'
import user_3 from '../assets/Jeff.png'
import user_4 from '../assets/Robert_niro.png'
const Actors =(props)=> {
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
    <div className = "actors">
        <div className = "container">
        <h1> Actors Page</h1>
            <p >The Academy Award for Best Actor is an award presented annually by the Academy of Motion Picture Arts and Sciences (AMPAS). It has been awarded since the 1st Academy Awards to an actor who has delivered an outstanding performance in a leading role in a film released that year. The award is traditionally presented by the previous year's Best Actress winner.</p>
        </div>
        <div className="testimonials">
        <h2 className='h2'>Prominent Oscar Actors</h2>
           <img src= {next_icon} alt=""  className='nax-btn' onClick={slideForward}/>
        <img src= {back_icon} alt=""  className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                      <div className='user-info'>
                        <img src={user_1} alt="" />
                        <div> 
                         <h3>Daniel</h3>
                         <span>Retired Actor</span>
                        </div>
                      </div>
                        <p className='p'>Sir Daniel Michael Blake Day-Lewis is an English retired actor. Often described as one of the greatest actors in the history of cinema, he received numerous accolades throughout his career. </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                      <div className='user-info'>
                        <img src={user_2} alt="" />
                        <div> 
                         <h3>Denzel Washighton</h3>
                         <span>American Actor</span>
                        </div>
                      </div>
                        <p className='p'>Denzel Hayes Washington Jr. is an American actor, producer, and director. Known for his versatile work spanning over four decades of screen and stage, Washington has been regarded as one of the best actors of his generation, with The New York Times naming him the greatest actor of the 21st century in 2020. </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                      <div className='user-info'>
                        <img src={user_3} alt="" />
                        <div> 
                         <h3>Jeff</h3>
                         <span>Actor and Musician</span>
                        </div>
                      </div>
                        <p className='p'>Jeffrey Leon Bridges is an American actor and musician. He is known for his leading man roles in film and television.
                        . </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                      <div className='user-info'>
                        <img src={user_4} alt="" />
                        <div> 
                         <h3>Robert Niro</h3>
                         <span>Actor and Producer</span>
                        </div>
                      </div>
                        <p className='p'>Robert Anthony De Niro is an American actor and film producer. Known for his collaborations with Martin Scorsese, he is considered to be one of the greatest and most influential actors of his generation. </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    </div>
)
};
export  default Actors;
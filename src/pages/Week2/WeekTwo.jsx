import React from 'react'
import './WeekTwo.css'
import day from './images/day.png'
import night from './images/night.png'
import time from './images/time.png'
import place from './images/place.png'


function WeekTwo() {
  return (
    <div>
        <p className='definition'>
            Can you figure out the definition of setting from the following examples?
        </p>
        <p className='think'>(take a minute to think about this)</p>
        <div className='scenarios'>
            <div className='scenario'>
                <div className='day-night'>
                    <div className='img'>
                      <img src={day} height='100%' width='100%' alt='day'/>
                    </div>
                </div>
                <p>Sunny day at a beach</p>
            </div>
            <div className='scenario'>
                <div className='day-night'>
                    <div className='img'>
                      <img src={night} height='100%' width='100%' alt='day'/>
                    </div>
                </div>
                <p>A cold rainy night in a haunted house in October</p>
            </div>
        </div>
        <p className='setting'>
            So, what do you think the definition of setting is?
        </p>
        <div className='guesses'>
            <div className='query'>
                <p>Any guesses?</p>
            </div>
            <div className='guess'>
                <input type='text'/>
            </div>
            <div className='hint'>
                <p>Hint:</p>
                <div className='hint-img'>
                    <img src={time} alt='time'/>
                </div>
                <div className='hint-img'>
                    <img src={place} alt='place'/>
                </div>
            </div>
        </div>
        <div className='explanation'>
            <p>
                Setting is the time <img className='hints' src={time}  width='34' height='34' alt='time'/> and place <img className='hints' src={place}  width='34' height='34' alt='time'/>     of a story. It often answers the questions: when? and where?
            </p>
        </div>
        <p className='time-story'>
            The time of the story could be in the past, future, day, night, summer or winter.
            A story may take place in a school, a mall, a desert, an airplane or in a variety of other places.
        </p>
    </div>
  )
}

export default WeekTwo
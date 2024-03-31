import React from 'react'
import './WeekOne.css'
import student from './images/student.png'
import setting from './images/setting.png'
import characters from './images/characters.png'
import plot from './images/plot.png'
import problem from './images/problem.png'
import resolution from './images/resolution.png'


function WeekOne() {
  return (
    <div>
        <div className='heading-img'>
            <p>Elements of Story Writing</p>
        </div>
        <p className='welcome'>
            Welcome to term 2 of Writers Club. Are you excited for this amazing journey?
            Over the next week, we will be practicing the different elements of story writing.
            Our aim is to make stories more interesting and exciting.
        </p>
        <div className='intro'>
            <p>
                There are elements which make the foundation for story writing. An element is an essential part of something and every fiction story has the same key elements:
            </p>
            <div className='img'>
                <img src={student} height='100%' width='100%' alt='student' />
            </div>
        </div>
        <div className='elements'>
            <div className='element'>
                <img src={setting} alt='setting'/>
            </div>
            <div className='element'>
                <img src={characters} alt='setting'/>
            </div>
            <div className='element'>
                <img src={plot} alt='setting'/>
            </div>
            <div className='element'>
                <img src={problem} alt='setting'/>
            </div>
            <div className='element'>
                <img src={resolution} alt='setting'/>
            </div>
        </div>
        <p className='familiar'>
            You must be familiar with some of these. If not, do not worry! we will cover all these elements as we go along.
        </p>
        <div className='practice'>
            <p>For today’s lesson, we will try to understand and practice writing the setting for our stories.
            </p>
            <p>
                The setting is an important element of every fiction story.
            </p>
        </div>
    </div>
  )
}

export default WeekOne
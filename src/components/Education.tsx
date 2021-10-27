import React from 'react'
// import monk from '../icons/footer/favicon.png'
import Schooling from '../css/education.module.scss'

export function Education() {
  return (
    <section className={Schooling.schools}>
      <h2 className={Schooling.title}>Education</h2>
      <div className={Schooling['schools-container']}>
        <a href="https://suncoast.io/academy/curriculum">
          <p className={Schooling['school-title']}>Junior Software Engineer</p>
        </a>
        <a href="https://suncoast.io/">
          <p className={Schooling['school-name']}>Suncoast Developers Guild</p>
        </a>
        <p className={Schooling['school-dates']}>2021</p>
      </div>
      <ul className={Schooling['school-details']}>
        <li className={Schooling['school-detail']}>
          Full-Stack Software Development Bootcamp.
        </li>
      </ul>
      <div className={Schooling['schools-container']}>
        <a href="https://www.thebalancecareers.com/information-systems-technician-3355034">
          <p className={Schooling['school-title']}>
            IT &quot;C&quot; School Information Technology
          </p>
        </a>
        <a href="https://www.navy.mil/">
          <p className={Schooling['school-name']}>US Navy</p>
        </a>
        <p className={Schooling['school-dates']}>2019 – 2020</p>
      </div>
      <ul className={Schooling['school-details']}>
        <li className={Schooling['school-detail']}>
          Navy IT Advanced Training School, Advanced Comms, and Networks
        </li>
      </ul>
      <div className={Schooling['schools-container']}>
        <a href="https://www.operationmilitarykids.org/navy-information-systems-technician/#:~:text=Information%20Systems%20Technician%20%E2%80%9CA%E2%80%9D%20school%20is%20approximately%2024%20weeks%20long,Microsoft%2C%20Cisco%2C%20and%20Oracle.">
          <p className={Schooling['school-title']}>
            IT &quot;A&quot; School Information Technology
          </p>
        </a>
        <a href="https://www.navy.mil/">
          <p className={Schooling['school-name']}>US Navy</p>
        </a>
        <p className={Schooling['school-dates']}>2019</p>
      </div>
      <ul className={Schooling['school-details']}>
        <li className={Schooling['school-detail']}>
          Navy IT School, A+, and Comms.
        </li>
      </ul>
    </section>
  )
}

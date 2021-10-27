import React from 'react'
// import monk from '../icons/footer/favicon.png'
import Work from '../css/experience.module.scss'

export function Experience() {
  return (
    <section className={Work.experience}>
      <h2 className={Work.title}>Experience</h2>
      <div className={Work['job-container']}>
        <a href="https://www.navy.com/careers/information-systems-technician">
          <p className={Work['job-title']}>Information Systems Technician</p>
        </a>
        <a href="https://www.navy.com/careers/information-systems-technician">
          <p className={Work['job-acronym']}>IT</p>
        </a>
        <a href="https://www.navy.mil/">
          <p className={Work['job-company']}>US Navy</p>
        </a>
        <p className={Work['job-dates']}>September 2019 to May 2021</p>
      </div>
      <ul className={Work['job-details']}>
        <li className={Work['job-detail']}>
          Mentored students and helped them grow on their journey from boot camp
          graduates into fully-fledged naval IT sailors.
        </li>
        <li className={Work['job-detail']}>
          Taught basic and high-level SATCOM antenna specs.
        </li>
        <li className={Work['job-detail']}>
          Performed preventative maintenance for SAT-COM antennas.
        </li>
        <li className={Work['job-detail']}>
          Responsible for over 50 Secret and Top-Secret Cryptologic keys and
          devices.
        </li>
      </ul>
    </section>
  )
}

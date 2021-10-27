import React from 'react'
// import monk from '../icons/footer/favicon.png'
import HonorsAndAwards from '../css/honorsAndAwards.module.scss'

export function HonorsNAwards() {
  return (
    <section className={HonorsAndAwards.awards}>
      <h2 className={HonorsAndAwards.title}>Honors &#38; Awards</h2>
      <div className={HonorsAndAwards['awards-container']}>
        <a href="https://www.medalsofamerica.com/blog/national-defense-service-medal-blog-post/">
          <p className={HonorsAndAwards['award-title']}>
            National Defense Service Ribbon
          </p>
        </a>
        <a href="https://www.navy.mil/">
          <p className={HonorsAndAwards['award-company']}>US Navy</p>
        </a>
        <p className={HonorsAndAwards['award-dates']}>October 2019</p>
      </div>
      <ul className={HonorsAndAwards['award-details']}>
        <li className={HonorsAndAwards['award-detail']}>
          Obtained by serving in the military during a period of national
          emergency and designated by the Secretary of Defense.
        </li>
      </ul>
      <div className={HonorsAndAwards['awards-container']}>
        <a href="https://www.usamm.com/products/basic-mil-training-hg-ribbon-usn">
          <p className={HonorsAndAwards['award-title']}>
            Honor Graduate Ribbon
          </p>
        </a>
        <a href="https://www.navy.mil/">
          <p className={HonorsAndAwards['award-company']}>US Navy</p>
        </a>
        <p className={HonorsAndAwards['award-dates']}>October 2019</p>
      </div>
      <ul className={HonorsAndAwards['award-details']}>
        <li className={HonorsAndAwards['award-detail']}>
          Obtained by graduating in the top 5% of Navy boot camp.
        </li>
      </ul>
      <div className={HonorsAndAwards['awards-container']}>
        <a href="https://en.wikipedia.org/wiki/Marksmanship_Device">
          <p className={HonorsAndAwards['award-title']}>
            Expert Marksmanship Ribbon
          </p>
        </a>
        <a href="https://www.navy.mil/">
          <p className={HonorsAndAwards['award-company']}>US Navy</p>
        </a>
        <p className={HonorsAndAwards['award-dates']}>September 2019</p>
      </div>
      <ul className={HonorsAndAwards['award-details']}>
        <li className={HonorsAndAwards['award-detail']}>
          Obtained by having expert-level handgun skills in the Navy.
        </li>
      </ul>
    </section>
  )
}

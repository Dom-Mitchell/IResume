import React from 'react'
// import monk from '../icons/footer/favicon.png'
import Heading from '../css/header.module.scss'

export function Header() {
  return (
    <header className={Heading.header}>
      {/* <img src={monk} alt="Monk" /> */}
      <h1 className={Heading.name}>Domenick Mitchell</h1>
      <div className={Heading['personal-info']}>
        <a href="https://www.google.com/maps/place/Odessa,+FL+33556/@28.1605091,-82.6633704,12z/data=!3m1!4b1!4m5!3m4!1s0x88c294fd6a719283:0xec0054fecf7e905c!8m2!3d28.1222486!4d-82.5834947">
          <address className={Heading.address}>Tampa, FL. 33556</address>
        </a>
        <a href="tel:971-407-8808">
          <p className={Heading.phone}>(971) 407-8808</p>
        </a>
        <a href="mailto:domenickmitchell00@gmail.com">
          <p className={Heading.email}>domenickmitchell00@gmail.com</p>
        </a>
        <a href="https://github.com/Dom-Mitchell">
          <p className={Heading.github}>https://github.com/Dom-Mitchell</p>
        </a>
        <br />
        <br />
        <a href="https://www.linkedin.com/in/domenick-mitchell/">
          <p className={Heading.linkedIn}>
            https://www.linkedin.com/in/domenick-mitchell/
          </p>
        </a>
      </div>
      {/* <hr /> */}
    </header>
  )
}

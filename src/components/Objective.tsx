import React from 'react'
// import monk from '../icons/footer/favicon.png'
import Object from '../css/objective.module.scss'

export function Objective() {
  return (
    <section className={Object.objective}>
      <h2 className={Object.title}>Objective</h2>
      <p className={Object.content}>
        Obtain experience to achieve my career goals to be able to demonstrate
        my creativity and potential in a fast-paced environment with a
        successful and leading company.
      </p>
    </section>
  )
}

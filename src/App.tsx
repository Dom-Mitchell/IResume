import React from 'react'
import { Header } from './components/Header'
import { Objective } from './components/Objective'
import { SkillsNAbilities } from './components/SkillsNAbilities'
import { LicensesNCertifications } from './components/LicensesNCertifications'
import { Experience } from './components/Experience'
import { HonorsNAwards } from './components/HonorsNAwards'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
// import monk from './icons/footer/favicon.png'

export function App() {
  return (
    <>
      <Header />
      <Objective />
      <SkillsNAbilities />
      <LicensesNCertifications />
      <Experience />
      <HonorsNAwards />
      <Education />
      <Footer />
    </>
  )
}

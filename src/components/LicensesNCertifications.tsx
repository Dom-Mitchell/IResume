import React from 'react'
// import monk from '../icons/footer/favicon.png'
import LicensesAndCertifications from '../css/licensesAndCertifications.module.scss'

export function LicensesNCertifications() {
  return (
    <section
      className={LicensesAndCertifications['licenses-And-Certifications']}
    >
      <h2 className={LicensesAndCertifications.title}>
        Licenses &#38; Certifications
      </h2>
      <ul className={LicensesAndCertifications.bullets}>
        <li
          className={`${LicensesAndCertifications.bullet} ${LicensesAndCertifications.navy}`}
        >
          <a
            className={LicensesAndCertifications['link-title']}
            href="https://www.indeed.com/career-advice/starting-new-job/ts-sci"
          >
            TS/SCI Clearance (<em>with Counterintelligence Polygraph</em>)
          </a>
          <a
            className={LicensesAndCertifications.links}
            href="https://www.navy.mil/"
          >
            <em>US Navy</em>
          </a>

          <ul className={LicensesAndCertifications['bullets-nested']}>
            <li
              className={`${LicensesAndCertifications['bullet-nested']} ${LicensesAndCertifications['navy-expire']}`}
            >
              Issued: September 2019 – Expires: September 2029
            </li>
          </ul>
        </li>
        <li
          className={`${LicensesAndCertifications.bullet} ${LicensesAndCertifications.nuCamp}`}
        >
          <a
            className={LicensesAndCertifications['link-title']}
            href="https://www.nucamp.co/bootcamp-overview/web-development-fundamentals"
          >
            Web Development Fundamentals Bootcamp
          </a>
          <a
            className={LicensesAndCertifications.links}
            href="https://learn.nucamp.co/mod/simplecertificate/view.php?id=63&tab=0&page=0&perpage=30&orderby=username&action=get"
          >
            <em>Nucamp Coding Bootcamp</em>
          </a>
        </li>
        <li
          className={`${LicensesAndCertifications.bullet} ${LicensesAndCertifications.coursera}`}
        >
          <a
            className={LicensesAndCertifications['link-title']}
            href="https://www.coursera.org/learn/python-crash-course"
          >
            Crash Course on Python
          </a>
          <a
            className={LicensesAndCertifications.links}
            href="https://www.coursera.org/account/accomplishments/certificate/BS4X7L5TYPTM"
          >
            <em>Coursera BS4X7L5TYPTM</em>
          </a>
        </li>
        <li
          className={`${LicensesAndCertifications.bullet} ${LicensesAndCertifications.coursera}`}
        >
          <a
            className={LicensesAndCertifications['link-title']}
            href="https://www.coursera.org/learn/technical-support-fundamentals"
          >
            Technical Support Fundamentals
          </a>
          <a
            className={LicensesAndCertifications.links}
            href="https://www.coursera.org/account/accomplishments/certificate/DWZXUJZPRCRW"
          >
            <em>Coursera DWZXUZPRCRW</em>
          </a>
        </li>
      </ul>
    </section>
  )
}

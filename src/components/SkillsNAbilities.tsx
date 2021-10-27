import React from 'react'
// import monk from '../icons/footer/favicon.png'
import SkillsAndAbilities from '../css/skillsAndAbilities.module.scss'

export function SkillsNAbilities() {
  return (
    <section className={SkillsAndAbilities['skills-And-Abilities']}>
      <h2 className={SkillsAndAbilities.title}>Skills &#38; Abilities</h2>
      <ul className={SkillsAndAbilities.bullets}>
        <li
          className={`${SkillsAndAbilities.bullet} ${SkillsAndAbilities.typeScript} ${SkillsAndAbilities.oneYear}`}
        >
          <a href="https://www.typescriptlang.org/">TypeScript</a> &#8722;
        </li>

        <li
          className={`${SkillsAndAbilities.bullet} ${SkillsAndAbilities.html} ${SkillsAndAbilities.twoYears}`}
        >
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>{' '}
          &#8722;
        </li>
        <li
          className={`${SkillsAndAbilities.bullet} ${SkillsAndAbilities.javaScript} ${SkillsAndAbilities.twoYears}`}
        >
          <a href="https://www.javascript.com/">JavaScript</a> &#8722;
        </li>
        <li
          className={`${SkillsAndAbilities.bullet} ${SkillsAndAbilities.cssLang} ${SkillsAndAbilities.twoYears}`}
        >
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a>{' '}
          &#8722;
        </li>
        <li
          className={`${SkillsAndAbilities.bullet} ${SkillsAndAbilities.scssLang} ${SkillsAndAbilities.twoYears}`}
        >
          <a href="https://sass-lang.com/">SCSS/SASS</a> &#8722;
        </li>
        <li
          className={`${SkillsAndAbilities.bullet} ${SkillsAndAbilities.postgreSQL} ${SkillsAndAbilities.oneYear}`}
        >
          <a href="https://www.postgresql.org/">PostgreSQL</a> &#8722;
        </li>
        <li
          className={`${SkillsAndAbilities.bullet} ${SkillsAndAbilities.dotNet} ${SkillsAndAbilities.oneYear}`}
        >
          <a href="https://dotnet.microsoft.com/learn/dotnet/what-is-dotnet-framework">
            .NET
          </a>{' '}
          &#8722;
        </li>
        <li
          className={`${SkillsAndAbilities.bullet} ${SkillsAndAbilities.cSharp} ${SkillsAndAbilities.oneYear}`}
        >
          <a href="https://docs.microsoft.com/en-us/dotnet/csharp/">C#</a>{' '}
          &#8722;
        </li>
        <li
          className={`${SkillsAndAbilities.bullet} ${SkillsAndAbilities.markdown} ${SkillsAndAbilities.oneYear}`}
        >
          <a href="https://www.markdownguide.org/">Markdown</a> &#8722;
        </li>
        <li
          className={`${SkillsAndAbilities.bullet} ${SkillsAndAbilities.git} ${SkillsAndAbilities.oneYear}`}
        >
          <a href="https://git-scm.com/">Git</a> &#8722;
        </li>
        <li
          className={`${SkillsAndAbilities.bullet} ${SkillsAndAbilities.gitHub} ${SkillsAndAbilities.oneYear}`}
        >
          <a href="https://github.com/">GitHub</a> &#8722;
        </li>
        <li
          className={`${SkillsAndAbilities.bullet} ${SkillsAndAbilities.vsCode} ${SkillsAndAbilities.threePlusYears}`}
        >
          <a href="https://code.visualstudio.com/">VS Code</a> &#8722;
        </li>
        <li
          className={`${SkillsAndAbilities.bullet} ${SkillsAndAbilities.computerNetwork} ${SkillsAndAbilities.twoYears}`}
        >
          <a href="https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-computer-networking.html">
            Computer Networking
          </a>{' '}
          &#8722;
        </li>
        <li
          className={`${SkillsAndAbilities.bullet} ${SkillsAndAbilities.blueJ} ${SkillsAndAbilities.oneYear}`}
        >
          <a href="https://www.bluej.org/">BlueJ</a> &#8722;
        </li>
        <li
          className={`${SkillsAndAbilities.bullet} ${SkillsAndAbilities.javaLang} ${SkillsAndAbilities.oneYear}`}
        >
          <a href="https://www.java.com/en/">Java</a> &#8722;
        </li>
        <li
          className={`${SkillsAndAbilities.bullet} ${SkillsAndAbilities.pythonLang} ${SkillsAndAbilities.oneYear}`}
        >
          <a href="https://www.python.org/">Python</a> &#8722;
        </li>
      </ul>
    </section>
  )
}

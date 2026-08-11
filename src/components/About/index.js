import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import './index.scss'
import Python from '../../assets/images/python.svg'
import R from '../../assets/images/rstudio.svg'
import SQL from '../../assets/images/mysql.svg'
import PostgreSQL from '../../assets/images/postgresql.svg'
import d3 from '../../assets/images/d3-js.svg'
import Git from '../../assets/images/git.svg'
import Loader from 'react-loaders'
import { disciplines } from '../../data/profile'

const About = () => {
  const [letterClass] = useState('text-animate')

  return (
    <>
      <div className="container about-page">
        <div className="about-top">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={[...'About me']}
                idx={15}
              />
            </h1>

            <p>
              I am a research data engineer and analyst working where data
              infrastructure meets investigative research. My work is mostly
              unglamorous and load-bearing: getting scattered, inconsistent
              source data into warehouses where it can be queried honestly, then
              analysing it until it says something useful.
            </p>
            <p>
              I have been involved in building end-to-end data platforms:
              ingestion from source systems, dimensional models on PostgreSQL,
              SQL Server, Databricks and Snowflake, transformation layers in
              dbt, orchestration through Apache Airflow, and the reporting and
              GenAI surfaces that sit on top — deployed across AWS, Google Cloud
              and Azure.
            </p>
            <p>
              A BSc Honours in Actuarial Science gave me the statistical
              grounding for that side of the work — enough to know the
              difference between a pattern and an artefact of how the data was
              collected.
            </p>
            <p>
              The research half of the job is open-source intelligence: tracing
              companies, ownership and networks through public registries,
              corporate filings and leaked datasets using OCCRP Aleph,
              OpenCorporates, Open Ownership and Orbis, then mapping the
              relationships in Gephi and Maltego so the structure becomes
              visible.
            </p>
            <p>
              I am naturally curious, deliberate about doing one thing well at a
              time, and growth oriented. Outside of work I am a family person,
              and I climb mountains.
            </p>
          </div>

          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <img width="100px" src={d3} alt="D3.js" />
              </div>
              <div className="face2">
                <img width="100px" src={SQL} alt="MySQL" />
              </div>
              <div className="face3">
                <img width="100px" src={R} alt="R" />
              </div>
              <div className="face4">
                <img width="100px" src={Git} alt="Git" />
              </div>
              <div className="face5">
                <img width="100px" src={PostgreSQL} alt="PostgreSQL" />
              </div>
              <div className="face6">
                <img width="100px" src={Python} alt="Python" />
              </div>
            </div>
          </div>
        </div>

        <section className="section toolbox">
          <span className="eyebrow">Toolbox</span>
          <h2>What I work with</h2>
          <p>
            Grouped by the part of the job each one serves rather than by
            vendor.
          </p>

          <div className="toolbox-grid">
            {disciplines.map((discipline) => (
              <div className="toolbox-group" key={discipline.title}>
                <h3>{discipline.title}</h3>
                <p>{discipline.blurb}</p>
                <ul>
                  {discipline.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About

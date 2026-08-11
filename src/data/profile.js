// Single source of truth for site content, mirrored from github.com/gmusebe.

export const profile = {
  name: 'Ivan Musebe',
  role: 'Research Data Engineer & Analyst',
  tagline:
    'I build data infrastructure, uncover patterns in complex datasets, and turn open-source intelligence into actionable insights.',
  email: 'musebeivan@gmail.com',
  city: 'Nairobi, Kenya',
  coords: [-1.2982870552468233, 36.79306714209674],
  links: {
    github: 'https://github.com/gmusebe',
    linkedin: 'https://www.linkedin.com/in/musebe-ivan/',
    twitter: 'https://twitter.com/ivan_musebe',
  },
}

export const disciplines = [
  {
    title: 'Data Engineering',
    blurb:
      'End-to-end data platforms — ingestion, modelling, transformation and orchestration — built so messy source data stays queryable as it grows.',
    tools: [
      'Python',
      'SQL',
      'dbt',
      'Apache Airflow',
      'Databricks',
      'Snowflake',
      'PostgreSQL',
      'SQL Server',
      'MySQL',
      'R',
      'AWS',
      'Google Cloud',
      'Azure',
      'GenAI',
    ],
  },
  {
    title: 'Data Analysis',
    blurb:
      'Turning modelled data into findings people act on — exploratory analysis, reporting and visual explanation.',
    tools: ['Tableau', 'Power BI', 'Datawrapper', 'Flourish', 'D3.js', 'Excel'],
  },
  {
    title: 'Research & OSINT',
    blurb:
      'Tracing companies, ownership and networks through public records, then mapping the relationships that matter.',
    tools: [
      'OCCRP Aleph',
      'Maltego',
      'OpenRefine',
      'Gephi',
      'OpenCorporates',
      'connectedAFRICA',
      'Orbis',
      'Open Ownership',
    ],
  },
]

// ---------------------------------------------------------------------------
// Talks & advisory
// ---------------------------------------------------------------------------

export const speaking = {
  intro:
    'Alongside building data platforms, I speak and advise on what to do with them — how data gets modelled, how AI fits on top of it, how investigations use it as evidence, and how organizations turn all of that into decisions.',
  topics: [
    {
      key: 'data',
      title: 'Data',
      blurb:
        'What a data platform is actually for, and how to build one that survives contact with real source data.',
      points: [
        'End-to-end platform design: ingestion to reporting layer',
        'Dimensional modelling and why the warehouse shape matters',
        'Transformation and orchestration with dbt and Apache Airflow',
        'Data quality as an engineering problem, not a cleanup task',
      ],
    },
    {
      key: 'ai',
      title: 'AI & GenAI',
      blurb:
        'A practitioner’s read on where generative AI earns its place in a data stack — and where it does not.',
      points: [
        'What GenAI changes about working with unstructured data',
        'Grounding models in your own warehouse rather than guesswork',
        'Evaluating output you cannot take on trust',
        'Deciding when the boring pipeline beats the model',
      ],
    },
    {
      key: 'investigations',
      title: 'Investigations',
      blurb:
        'Open-source intelligence as method: how to trace entities, ownership and networks through public records.',
      points: [
        'Corporate registries, filings and beneficial ownership data',
        'Working with Aleph, OpenCorporates, Orbis and Open Ownership',
        'Network and graph analysis in Gephi and Maltego',
        'Verification: separating a pattern from an artefact of collection',
      ],
    },
    {
      key: 'organizations',
      title: 'Data in organizations',
      blurb:
        'The part that is not technical: getting a team to use the data it already has.',
      points: [
        'Choosing what is worth measuring in the first place',
        'Building data literacy across non-technical teams',
        'Governance and access that enable rather than obstruct',
        'Reporting that leads to a decision, not another meeting',
      ],
    },
  ],
  formats: [
    {
      title: 'Talks & panels',
      blurb:
        'Conference sessions, keynotes and panel contributions on data engineering, applied AI and investigative data work.',
    },
    {
      title: 'Workshops & training',
      blurb:
        'Hands-on sessions for technical and non-technical teams — SQL and modelling, OSINT method, or reading data critically.',
    },
    {
      title: 'Advisory',
      blurb:
        'Working directly with teams on platform architecture, tooling decisions and how to structure a data function.',
    },
  ],
  audiences: [
    'Newsrooms & investigative teams',
    'Civil society & research organizations',
    'Businesses & startups',
    'Universities & training programmes',
  ],
}

// Real talks and engagements — add entries as { title, event, year, url }
// and the page will render them automatically.
export const engagements = []

// Own work, ordered as it should read on the page.
export const projects = [
  {
    name: 'sales-data-warehouse',
    title: 'Sales Data Warehouse',
    description:
      'A modern data warehouse on SQL Server — medallion layers, ETL processes, dimensional modelling and the analytics built on top.',
    language: 'T-SQL',
    topics: ['data-engineering', 'etl-pipeline', 'datawarehouse', 'sql-server'],
    url: 'https://github.com/gmusebe/sales-data-warehouse',
    featured: true,
  },
  {
    name: 'ACLED-Spatial-Analysis-with-R-',
    title: 'ACLED Spatial Analysis',
    description:
      'Geospatial analysis of ACLED conflict event data in R — cleaning, joining and mapping incidents to reveal where and when violence clusters.',
    language: 'R',
    topics: ['geospatial-analysis', 'geospatial-data', 'r'],
    url: 'https://github.com/gmusebe/ACLED-Spatial-Analysis-with-R-',
    featured: true,
  },
  {
    name: 'Big-Data-Analysis',
    title: 'Big Data & Built Environment ETL',
    description:
      'Data engineering notebooks for large built-environment datasets: extraction into BigQuery, transformation in Python, and reporting through Tableau and D3.',
    language: 'Jupyter Notebook',
    topics: ['bigdata', 'bigquery', 'python3', 'tableau', 'd3-visualization'],
    url: 'https://github.com/gmusebe/Big-Data-Analysis',
  },
  {
    name: 'SQL',
    title: 'SQL for Data Engineering',
    description:
      'A working reference of the SQL an engineer actually reaches for — window functions, set logic, performance patterns and warehouse-shaped queries.',
    language: 'T-SQL',
    topics: ['sql', 'reference'],
    url: 'https://github.com/gmusebe/SQL',
  },
  {
    name: 'Date-Analysis-with-R',
    title: 'Data Analysis with R',
    description:
      'Applied statistics in R — wrangling with the tidyverse, exploratory analysis and the plots that carry the argument.',
    language: 'R',
    topics: ['r', 'statistics'],
    url: 'https://github.com/gmusebe/Date-Analysis-with-R',
  },
  {
    name: 'belinda-odhiambo',
    title: 'Portfolio Site — Belinda Odhiambo',
    description:
      'A commissioned personal website: design, build and deploy front to back.',
    language: 'JavaScript',
    topics: ['web', 'frontend'],
    url: 'https://github.com/gmusebe/belinda-odhiambo',
  },
]

// Forked repositories kept for study — listed compactly rather than as cards.
export const studyRepos = [
  {
    name: 'postgresql-for-data-analytics',
    url: 'https://github.com/gmusebe/postgresql-for-data-analytics',
  },
  {
    name: 'sql-masterclass',
    url: 'https://github.com/gmusebe/sql-masterclass',
  },
  {
    name: 'getting-started-app',
    url: 'https://github.com/gmusebe/getting-started-app',
  },
]

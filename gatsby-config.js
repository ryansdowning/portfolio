module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://ryansdowning.ddns.net/`,
    // Your Name
    name: 'Ryan Downing',
    // Main Site Title
    title: `Ryan Downing | Software Engineer Intern at Capital One`,
    // Description that goes under your name in main bio
    description: `Currently a Senior at the University of Maryland studying Finance and Computer Science with a specialization in machine learning. Interested in machine learning, quantitative research, innovative software solutions, and collaborative projects.`,
    // Optional: [resume_file_name].pdf in the src/images folder
    resume: `resume`,
    // Optional: Github account URL
    github: `https://github.com/ryansdowning`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/ryan-downing-074354170/`,
    // Content of the About Me section
    about: `Hi, my name is Ryan Downing and I am currently a Software Engineer Intern at Capital One as well as the Co-President / Portfolio Manager of the Smith Investment Fund at UMD. I am currently pursuing a dual-degree from the University of Maryland with a Bachelors of Science in Finance and Computer Science with a specialization in machine learning. I have a profound interest in all things data, and am particularly interested in financial markets. Recently, my research has been concentrated around systematic trading strategies that utilize novel quantitative finance techniques. I am also working on an NLP platform for performing sentiment analysis for stocks to be used as an alternative data source for trading research.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Advent of Code 2020 (Python)',
        description:
          'All challenges from advent of code 2020 completed in Python 3.',
        link: 'https://github.com/ryansdowning/aoc-2020',
      },
      {
        name: 'Stock Sentiment',
        description:
          'WIP (Alpha version live!): Website for displaying data and visualizations based on sentiment of US equities from various alternative text sources. The backend is a fully automated system which scrapes texts from reddit, twitter, and earnings reports. The data is then processed through an NLP pipeline and passed to the frontend for visualizations.',
        link: 'http://ryansdowning.ddns.net:8050/',
      },
      {
        name: 'Financial Data Modeling',
        description:
          'An exploratory data analysis of historical financial data including both financial statements and price volume. Applies basic machine learning methods for price prediction.',
        link: 'https://ryansdowning.github.io/financial-data-modeling/',
      },
      {
        name: 'Smith Investment Fund',
        description:
          'Manage a team of 22 other students at the University of Maryland in researching systematic trading strategies, developing supporting software, and educating undergraduates in topics including statistics, programming, finance, and career development.',
        link: 'https://www.smithinvestmentfund.com/quant-about',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Capital One Financial Corporation',
        description: 'DevOps Engineer Intern, June 2021 - August 2021',
        link: 'https://campus.capitalone.com/technology-program'
      },
      {
        name: 'Capital One Financial Corporation',
        description: 'Data Engineer Intern, June 2020 - June 2021',
        link: 'https://campus.capitalone.com/technology-program',
      },
      {
        name: 'NSF - Research for Undergraduates at UMD',
        description: 'Machine Learning Researcher, June 2021 - August 2021',
        link: 'https://www.cs.umd.edu/projects/reucaar/index.html'
      }
      {
        name: 'Smith Investment Fund at UMD',
        description: 'Co-President / Portfolio Manager, October 2018 - Present',
        link: 'https://www.smithinvestmentfund.com/',
      },
      {
        name: 'Lincoln Financial Heritage',
        description: 'Summer Intern, May 2019 - August 2019',
        link: 'https://www.heritageconsultants.com/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Advanced in Python, proficient in C, OCaml, Java, R, Ruby knowledgeable in Rust, Assembly, MATLAB',
      },
      {
        name: 'Python Packages',
        description:
          'NumPy, Pandas, Sklearn, PyTorch, Tensorflow, Transformers, SpaCy, Ray, Optuna, Seaborn, Dask, Multiprocessing, Hypothesis, PyTest, Poetry',
      },
      {
        name: 'Other',
        description: 'Docker, MySQL, PostgreSQL, Jira, LaTeX',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-187006415-1`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};

module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://lizozom.github.io/`,
    // Your Name
    name: 'Liza Katz',
    // Main Site Title
    title: `Liza Katz | Full-Stack Developer | AI & Observability Enthusiast`,
    // Description that goes under your name in main bio
    description: `Ex-Elastic Engineer | AI & Observability Consultant | Open Source Enthusiast`,
    // Optional: Twitter account handle
    author: null,
    stackoverflow: 'https://stackoverflow.com/users/372086/lizozom',
    // Optional: Github account URL
    github: `https://github.com/lizozom`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/lizak/`,
    // Content of the About Me section
    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis porro cumque ea error ab voluptatem. Temporibus adipisci exercitationem similique itaque quibusdam laudantium, qui molestiae quas, aut amet animi id.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Human or Not (AI21)',
        description:
          '<b>**<a href="https://winners.webbyawards.com/2024/ai-metaverse-virtual/ai-apps-and-experiences/media-entertainment/288120/human-or-not" target="_blank">Webby Award Winner!</a>**</b> A Social Turing Game. Chat with someone for two minutes, and try to figure out if it was a fellow human or an AI bot. Think you can tell the difference?',
        link: 'https://humanornot.ai/',
      },
      {
        name: 'Tube Uni',
        description:
          '<b>**<a href="https://devpost.com/software/tube-uni" target="_blank">Google AI Hackathon Winner!</a>**</b> An AI-powered application that generates custom podcasts on any topic, using Gemini 1.5 Pro.',
        link: 'https://tubeuni.app/',
      },
      {
        name: 'ncnn WebAssembly YoLov5',
        description:
          'Contibution to the OpenSource project that allows running YOLOV5 inference directly in the browser.',
        link: 'https://github.com/lizozom/ncnn-webassembly-yolov5',
      },
      {
        name: 'Outburn LTD Automation and OpenSource infrastructure',
        description:
          'Outburn LTD is a company that provides a FHIR based API for healthcare providers. I was helped Outburn ready their codebase for open source contributions including an automation pipeline using GitHub Actions, proper usage of TypeScript and linting and contribution documentation.',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Custom Kibana Theme Plugin',
        description:
          'Open Source implementation for a <a href="https://github.com/elastic/kibana/issues/17879" target="_blank">long requested</a> plugin for Kibana allowing customers to Customize Kibana\'s appearance (logos, icons, texts and more)',
        link: 'https://github.com/lizozom/custom-kibana-theme',
      },
      {
        name: 'Docker Elastic Observability',
        description:
          'Docker compose setup of an observability use case. Reporting metrics and traces from a nodejs app to Elasticsearch using APM Server using APM RUM and APM Node.js agents.',
        link: 'https://github.com/lizozom/docker-elastic-observability-with-apm',
      },
      {
        name: 'DjangoGirls Conference Organizer',
        description:
          'Organized 2 DjangoGirls conferences in the RedHat offices in Raanana',
        link: 'http://railsgirls.com/',
      }, 
      
      
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Independent Consultant & Developer',
        description: '',
        link: '',
      },
      {
        name: 'Elastic',
        description: '<b>Principal Full-Stack Developer, Performance Area Lead, January 2019 - December 2022</b><br/>Worked on the Kibana architecture & services team, focused on delivering common services and React components to platform and solution teams. My contributions to <a href="https://github.com/elastic/kibana/pulls?q=is%3Apr+author%3Alizozom" target="_blank">Kibana</a>, <a href="https://github.com/lizozom/kibana-load-testing" target="_blank">Kibana Load Testing</a>, <a href="https://github.com/lizozom/kibana-capacity-test" target="_blank">Kibana Capacity Test</a> and more were made in private repositories. I was also the <b>Performance Area Lead for Kibana</b>, responsible for the performance of the Kibana platform.',
        link: 'https://elastic.co',
      },
      {
        name: 'ironSource (Unity)',        
        description: '<b>Full-Stack Developer, Team Lead, May 2013 - April 2018</b><br/>Developed the MobileCore SDK, a cross-platform SDK for mobile developers to monetize their apps. I was responsible for the SDK\'s architecture, design, and implementation. I then led a team of developers and QA engineers, to develop a mobile video advertising solution, supporting cutting edge ad formats, advertising standards and targeting options. A lot of my work was focused on ad serving business logic, which led to optimizations, <b>cutting upto 70% of data and traffic costs</b>.',
        link: 'https://www.is.com/',
      },
      {
        name: 'Platonix Joint Ventures',
        description: '<b>Full-Stack Developer, 2008 - 2013</b><br/>Worked as a fulltime freelance developer for a private equity firm. I was involved in multiple projects of different scales and complexities, using a variety of programming languages and environments, per customer requirements. Worked directly with customers from multiple industries, including finance, healthcare, and entertainment.',
        link: 'https://www.crunchbase.com/organization/platonix-joint-ventures',
      },
      {
        name: 'AISeek',
        description: '<b>Embedded C \\ C++ Developer, 2006 - 2008</b><br/>AISeek developed an hardware that could accelerate the execution of A* algorithms on hardware, hence allowing to improve NPC AI in games. I was involved in the development of the hardware\'s firmware, and the software that interfaced with it. I also developed a custom C++ library for the hardware\'s API.',
        link: 'https://www.calcalist.co.il/internet/articles/0,7340,L-3252723,00.html',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), TypeScript, Node.js, Next.js, Express.js, Matter.js, Python, Django, Android',
      },
      {
        name: 'Databases',
        description: 'Elasticsearch, Redis, PostreSQL, BigQuery',
      },
      {
        name: 'Other',
        description:
          'Docker, GooGle Cloud Services (gcp), Vertex AI, Roboflow, Webpack, ESLINT, Vercel, CI / CD, API design, Agile / Scrum',
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
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: []
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
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

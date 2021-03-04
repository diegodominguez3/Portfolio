module.exports = {
  siteTitle: "Hi! I'm Diego! 👋 ",
  siteDescription: `Portafolio Website`,
  keyWords: ['gatsbyjs', 'react', 'portafolio', 'personal website'],
  authorName: 'Diego Dominguez',
  githubUsername: 'diegodominguez3',
  authorAvatar: '/images/avatar.png',
  authorDescription: `I am a software developer passionate about computer science and IT engineering, not afraid to learn new technologies, and always finding a way to improve my skills.
  <br/><br/>In my free time, I enjoy working on side projects or solving problems, no matter if it's something simple or just for fun. `,
  resume:
    'https://github.com/diegodominguez3/Portfolio/blob/master/static/files/Resume.pdf',
  skills: [
    {
      name: 'HTML',
      level: 95,
    },
    {
      name: 'CSS/LESS/Sass',
      level: 95,
    },
    {
      name: 'Javascript',
      level: 80,
    },
    {
      name: 'PHP',
      level: 70,
    },
    {
      name: 'React',
      level: 70,
    },
    {
      name: 'Git',
      level: 85,
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: 'PK Global',
      begin: {
        month: 'jan',
        year: '2019',
      },
      duration: null,
      occupation: 'Software Developer',
      description:
        'Current frontend lead developer and full-stack developer for eCommerce. Strong skills programming on LESS, HTML, KnockoutJS, PHP, SQL and XML.',
    },
    {
      company: 'TGC',
      begin: {
        month: 'Jan',
        year: '2019',
      },
      duration: '4 MOS',
      occupation: 'Software Test Engineer Intern',
      description:
        'Worked on a process automation platform based on java and developed an Optical Character Recognition solution to automate invoice transcripts.',
    },
    {
      company: 'CCI Global',
      begin: {
        month: 'aug',
        year: '2018',
      },
      duration: '4 MOS',
      occupation: 'Frontend Developer',
      description:
        'Developed assets and maintained a Wordpress site with WooCommerce. Worked with CSS, HTML, PHP and javascript to create new features and theme improvements.',
    },
  ],
  portifolio: [
    {
      image: '/images/pokedex.jpg',
      description: 'React Pokedex',
      url: 'https://github.com/diegodominguez3/React-Pokedex',
    },
    {
      image: '/images/game-of-life.jpg',
      description: "React Conway's game of life",
      url: 'https://github.com/diegodominguez3/conway-game-of-life',
    },
    {
      image: '/images/m2plugin.jpg',
      description: 'Magento 2 minicart plugin',
      url: 'https://github.com/diegodominguez3/Magento2-MinicartPlugin',
    },
    {
      image: '/images/learning.jpg',
      description: 'Learning Resources',
      url: 'https://learningresources.com',
    },
    {
      image: '/images/educational.jpg',
      description: 'Educational Insights',
      url: 'https://educationalinsights.com',
    },
    {
      image: '/images/dealgenius.jpg',
      description: 'Deal Genius',
      url: 'https://dealgenius.com',
    },
    /* more portifolio items here */
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/diego-dominguez333/',
    github: 'https://github.com/diegodominguez3',
    email: 'diegodominguez333@gmail.com',
  },
  siteUrl: 'https:/.diegodominguez3.github.io/Portfolio',
  pathPrefix: '/Portfolio', // Note: it must *not* have a trailing slash.
  siteCover: '/Portfolio/images/cover-tree.jpg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: '#000000cc',
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    },
  ],
}

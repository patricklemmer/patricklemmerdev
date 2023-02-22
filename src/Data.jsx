// *************************************
// *************************************
// Imports

// *************************************
// *************************************
// Projects
import Pokedex from '../src/assets/projects/pokedex.webp';
import PatrickLemmerDev from '../src/assets/projects/patricklemmerdev.webp';
import MeerkatDevelopment from '../src/assets/projects/meerkatdevelopment.webp';
import Meet from '../src/assets/projects/meet.webp';
import ChatApp from '../src/assets/projects/chatapp.webp';
import MyFlixReact from '../src/assets/projects/react.webp';
import MyFlixAngular from '../src/assets/projects/angular.webp';

// Blogs
import blog0 from './assets/blog/blog0.jpg';
import blog1 from './assets/blog/blog1.jpg';
import blog2 from './assets/blog/blog2.jpg';
import blog3 from './assets/blog/blog3.jpg';
import blog4 from './assets/blog/blog4.jpg';
import blog5 from './assets/blog/blog5.jpg';

// Chat With Pat
import service0 from './assets/services/chats-with-pat.webp';

// *************************************
// *************************************
// Nav Links, used in combination with element id's

export const navLinks = [
  {
    id: 1,
    text: 'Home',
    href: 'home',
  },
  {
    id: 2,
    text: 'Projects',
    href: 'projects',
  },
  {
    id: 3,
    text: 'About',
    href: 'about',
  },
  {
    id: 4,
    text: 'Blog',
    href: 'blog',
  },
  {
    id: 5,
    text: 'Chats With Pat',
    href: 'chatswithpat',
  },
  {
    id: 6,
    text: 'Contact',
    href: 'contact',
  },
];

// *************************************
// *************************************
// Service descriptions in service section (max 4 at a time)

export const services = [
  {
    id: 1,
    image: service0,
    alt: 'Chats with Pat Logo',
    title: '100% free',
    text: 'This is my way to give back what I have already received. Since the beginning of my software development career I have met multiple developers of different levels, giving me advice, offering ways to help and simply welcoming a very interested and motivated but clueless guy into the industry. In "Chats with Pat" it will be you, me and a nice chat about all things code, job search as a developer and life in general. Most importantly though, it will be a chance for you to indirectly profit from all the advice I have received, so far.',
    button: 'Schedule a chat',
    link: 'https://calendly.com/chatswithpat/chat-with-pat?month=2023-02',
  },
];

// // *************************************
// // *************************************
// // Uncomment or add if needed

// // Categories for "My projects"
export const buttons = [
  { id: 1, name: 'All', value: 'all' },
  { id: 2, name: 'Frontend', value: 'frontend' },
  { id: 3, name: 'Fullstack', value: 'fullstack' },
  { id: 4, name: 'Mobile Development', value: 'mobile development' },
  // { id: 5, name: 'Multimedia', value: 'multimedia' },
];

// *************************************
// *************************************
// Add new object if needed (max 8 projects at a time)

// Projects
export const projects = [
  {
    id: 1,
    image: PatrickLemmerDev,
    title: 'patricklemmer.dev',
    info: 'The source of this portfolio website.',
    value: 'frontend',
    demo: '#home',
    code: 'https://github.com/patricklemmer/patricklemmerdev',
    tools: [
      { id: 1, name: '#react' },
      { id: 2, name: '#javascript' },
      { id: 3, name: '#tailwindcss' },
      { id: 4, name: '#daisyui' },
      { id: 5, name: '#netlify' },
    ],
  },
  {
    id: 2,
    image: MeerkatDevelopment,
    title: 'Meerkat Development',
    info: 'My freelancing portfolio website. Coming soon!',
    value: 'frontend',
    // demo: '#',
    // code: '#',
    tools: [
      { id: 1, name: '#react' },
      { id: 2, name: '#javascript' },
      { id: 3, name: '#tailwindcss' },
      { id: 4, name: '#netlify' },
    ],
  },
  {
    id: 3,
    image: Pokedex,
    title: 'Pokedex',
    info: 'An API for Pokemon fans (and everyone else).',
    value: 'frontend',
    demo: 'https://patricklemmer.github.io/js_app/',
    code: 'https://github.com/patricklemmer/js_app',
    tools: [
      { id: 2, name: '#javascript' },
      { id: 3, name: '#vanillacss' },
      { id: 3, name: '#html' },
      { id: 3, name: '#bootstrap' },
      { id: 5, name: '#restapi' },
    ],
  },
  {
    id: 4,
    image: Meet,
    title: 'Meet',
    info: 'A serverless PWA React App, built with the TDD approach.',
    value: 'frontend',
    demo: 'https://patricklemmer.github.io/meet/',
    code: 'https://github.com/patricklemmer/meet',
    tools: [
      { id: 1, name: '#react' },
      { id: 2, name: '#javascript' },
      { id: 3, name: '#vanillacss' },
      { id: 4, name: '#amazonaws' },
      { id: 5, name: '#tdd' },
    ],
  },
  {
    id: 5,
    image: ChatApp,
    title: 'Chat App',
    info: 'A React Native Chat App.',
    value: 'mobile development',
    demo: 'https://github.com/patricklemmer/chat-app#how-to-run-this-project',
    code: 'https://github.com/patricklemmer/chat-app',
    tools: [
      { id: 1, name: '#reactnative' },
      { id: 2, name: '#javascript' },
      { id: 3, name: '#firebase' },
      { id: 4, name: '#expo' },
    ],
  },
  {
    id: 6,
    image: MyFlixReact,
    title: 'MyFlix (React)',
    info: 'A movie database API built with React and JavaScript.',
    value: 'fullstack',
    demo: 'https://github.com/patricklemmer/myFlix-client#how-to-run-this-project',
    code: 'https://github.com/patricklemmer/myFlix-client',
    casestudy:
      'https://drive.google.com/file/d/1OmpiS1AuVhlazyhiBUK1ejM7FTn1TBV4/view',
    tools: [
      { id: 1, name: '#react' },
      { id: 2, name: '#javascript' },
      { id: 3, name: '#bootstrap' },
      { id: 4, name: '#scss' },
      { id: 5, name: '#restapi' },
    ],
  },
  {
    id: 7,
    image: MyFlixAngular,
    title: 'MyFlix (Angular)',
    info: 'New UI, for an existing API. Built with Angular and TypeScript.',
    value: 'fullstack',
    demo: 'https://github.com/patricklemmer/myFlix-Angular-client#how-to-run-this-project',
    code: 'https://github.com/patricklemmer/myFlix-Angular-client',
    tools: [
      { id: 1, name: '#angular' },
      { id: 2, name: '#typescript' },
      { id: 3, name: '#scss' },
      { id: 4, name: '#angularmaterial' },
      { id: 5, name: '#restapi' },
    ],
  },
];

// *************************************
// *************************************
// Add if needed (max 6 at a time)

export const blogs = [
  {
    id: 1,
    image: blog5,
    title:
      'Why you should create a GitHub profile README (as a job seeking dev)',
    exerpt:
      'The GitHub profile README is a great way to sum up your GitHub profile and show viewers your most important stuff.',
    link: 'https://patricklemmerdev-blog.vercel.app/posts/why-you-should-create-a-github-profile-readme-as-a-job-seeking-dev',
  },
  {
    id: 2,
    image: blog0,
    title: '#buildinpublic: A fullstack MERN app (with TypeScript)',
    exerpt: 'An ongoing blog post about my #buildinpublic project, a MERN app.',
    link: 'https://patricklemmerdev-blog.vercel.app/posts/buildinpublic-a-fullstack-mern-application-with-typescript',
  },
  {
    id: 3,
    image: blog1,
    title: 'How to use a custom domain on GitHub pages',
    exerpt:
      'You just hosted a website on GitHub pages and now you are wondering how to add a custom domain to it to give your website that final touch? Here is how.',
    link: 'https://patricklemmerdev-blog.vercel.app/posts/how-to-use-a-custom-domain-on-github-pages',
  },
  {
    id: 4,
    image: blog2,
    title: 'Connect your contact form to an email account. HTML only',
    exerpt:
      'Your developer portfolio website, a small online shop, …., or a …. All of these websites would likely benefit from a contact form.',
    link: 'https://patricklemmerdev-blog.vercel.app/posts/connect-your-contact-form-to-an-email-account-with-html-only',
  },
  {
    id: 5,
    image: blog3,
    title: 'Attention new web developers, use "this"!',
    exerpt:
      'It is very simple and easy to use, BUT it can help you over-proportionally compared to how simple it actually is.',
    link: 'https://patricklemmerdev-blog.vercel.app/posts/use-this-from-the-beginning-of-your-developer-career',
  },
  {
    id: 6,
    image: blog4,
    title: 'Subscribe, if you would like to be informed about future posts',
    exerpt:
      'Sometimes I write abouth topics like software development, career change and my personal experiences transitioning into tech. Subscribe, if you would like to know about any future posts.',
    link: 'https://medium.com/@patricklemmer',
  },
];

// *************************************
// *************************************
// Tab feature in about section, add or change if needed

// About
export const tabs = [
  {
    id: 1,
    buttonText: 'Software Development',
  },
  {
    id: 2,
    buttonText: 'Wildlife Photography',
  },
  {
    id: 3,
    buttonText: 'Skills',
  },
  {
    id: 4,
    buttonText: 'Random Facts',
  },
  {
    id: 5,
    buttonText: 'What Im doing now',
  },
];

// About lists
export const aboutLists = [
  {
    id: 1,
    header: 'Software Development 💻',
    lists: [
      {
        id: 1,
        point: 'I wrote my first line of code  in 2014.',
      },
      {
        id: 2,
        point:
          'I really enjoy the design part of building web applications and websites.',
      },
      {
        id: 3,
        point:
          'One of my favourite parts about coding is the critical thinking when problem solving.',
      },
      {
        id: 4,
        point:
          'My preferred approach to learning something new, is to not care about perfection, looks or best practices, but rather about understanding the core idea first. Make it work, then make it look good.',
      },
    ],
  },
  {
    id: 2,
    header: 'Wildlife Photography 🐺',
    lists: [
      {
        id: 1,
        point:
          'My first camera was a wedding gift from my parents. That was the beginning of me as a wildlife photographer.',
      },
      {
        id: 2,
        point: 'I am currently planning my next photographic trip 🌍',
      },
      {
        id: 3,
        point:
          'I have seen the Big Five on my first ever safari trip in Kruger National Park, all in one day.',
      },
      {
        id: 4,
        point:
          'Over the years I have spent numerous hours photographing wildlife in South Africas National Parks, and even more in the forests of Brandenburg in Germany.',
      },
    ],
  },
  {
    id: 3,
    header: 'Skills 🔑',
    lists: [
      {
        id: 1,
        point: 'React.js',
      },
      {
        id: 2,
        point: 'JavaScript',
      },
      {
        id: 3,
        point: 'TailwindCSS, Vanilla CSS',
      },
      {
        id: 4,
        point: 'HTML',
      },
      {
        id: 5,
        point: 'Git/GitHub',
      },
      {
        id: 6,
        point: 'Netlify, Vercel, Heroku',
      },
      {
        id: 7,
        point: 'Figma, Adobe Photoshop, Adobe Lightroom',
      },
      {
        id: 8,
        point: 'TDD, Agile, Scrum',
      },
    ],
  },
  {
    id: 4,
    header: 'Random Facts 💭',
    lists: [
      {
        id: 1,
        point:
          'At the age of two I started playing soccer with my dad. At the age of four I joined my first club.',
      },
      {
        id: 2,
        point: 'My favourite time of year is autumn.',
      },
      {
        id: 3,
        point:
          'I love camping. My favourite type of holiday is going tenting in the African wilderness.',
      },
      {
        id: 4,
        point:
          'I am an early bird. I love the calm and peaceful atmosphere on an early morning.',
      },
    ],
  },
  {
    id: 5,
    header: 'What I am doing now 📅',
    date: 'Updated on January 30th, 2023',
    lists: [
      {
        id: 1,
        point:
          'I am actively looking for an entry level role as fullstack or frontend developer.',
      },
      {
        id: 2,
        point: 'I am building a pet adoption web application.',
      },
      {
        id: 3,
        point: 'I have started to learn TypeScript.',
      },
      {
        id: 4,
        point: 'I am currently planning my next photographic trip 🌍',
      },
    ],
  },
];

export const constants = {
  FIRSTNAME: import.meta.env.VITE_FIRSTNAME || 'John',
  LASTNAME: import.meta.env.VITE_LASTNAME || 'Smith',
  TITLE1: import.meta.env.VITE_TITLE1 || 'Full Stack',
  TITLE2: import.meta.env.VITE_TITLE2 || 'Web Developer',
  LOCATION: import.meta.env.VITE_LOCATION || 'San Francisco, CA',
  EMAIL: import.meta.env.VITE_EMAIL || 'hi@example.com',
  PHONE: import.meta.env.VITE_PHONE || '555-555-5555',
  LINKEDIN: import.meta.env.VITE_LINKEDIN || '/in/jsmith',
  LINKEDIN_URL: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/in/jsmith',
  URL: import.meta.env.VITE_URL || 'https://example.com',
  PROFILE: import.meta.env.VITE_PROFILE || 'This is an example profile.',
};

export const Headers = {
  PROFILE: import.meta.env.VITE_HEADER_PROFILE || 'PROFILE',
  SKILLS: import.meta.env.VITE_HEADER_SKILLS || 'SKILLS',
  EXPERIENCE: import.meta.env.VITE_HEADER_EXPERIENCE || 'EXPERIENCE',
  EDUCATION: import.meta.env.VITE_HEADER_EDUCATION || 'EDUCATION',
};

export const skills = [
  {
    header: 'LANGUAGES',
    items: (import.meta.env.VITE_SKILLS_LANGUAGES || 'Python,JavaScript,TypeScript,PHP,HTML,CSS,SQL').split(','),
  },
  {
    header: 'TECHNOLOGIES',
    items: (import.meta.env.VITE_SKILLS_TECHNOLOGIES || 'React,NodeJS,ExpressJS,Flask,Django,Angular,Bootstrap,Material-UI,Chart.js,Redux,RTK Query').split(','),
  },
  {
    header: 'OTHER',
    items: (import.meta.env.VITE_SKILLS_OTHER || 'AWS (EC2, Lambda, S3),Docker,CI/CD (CircleCI),Git,ChatGPT,REST API,WebSockets,Unit & Integration Testing').split(','),
  },
];

const dates = (import.meta.env.VITE_EXPERIENCE_DATES || 'MAR 2020 - PRESENT,DEC 2018 - MAR 2020,FEB 2016 - DEC 2018').split(',');
const companies = (import.meta.env.VITE_EXPERIENCE_COMPANIES || 'Meta/Facebook,Twitter,Google').split(',');
const titles = (import.meta.env.VITE_EXPERIENCE_TITLES || 'Senior Manager,Senior Web Developer,Junior Web Developer').split(',');
const descs = (import.meta.env.VITE_EXPERIENCE_DESCS || 'Facebook is a social media company that connects people with friends and others who work, study, and live around them. People use Facebook to keep up with friends, upload an unlimited number of photos, share links and videos, and learn more about the people they meet.|Twitter is a social media platform that allows users to post and interact with messages known as \'tweets\'.|Google is a multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.').split('|');
const bullets = (import.meta.env.VITE_EXPERIENCE_BULLETS || '["Managed a team of 10 developers, providing technical guidance and mentorship.","Developed new features and functionality on both the front-end (React, TypeScript) and back-end (NodeJS, ExpressJS).","Proposed and made suggestions of what new features are needed for the company/site.","Updated technical documentation as needed for new features."]|["Managed all important technical decisions, keeping them in-line with business goals and monthly or quarterly (as needed) budgets.","Proposed and made suggestions of what new features are needed for the company/site.","Many of them were sourced from customer development via requests and suggestions sent to the support staff."]|["Worked on the development and design of the web application search engine database tool using PHP with a MySQL backend.","Was sole contributor to the search engine database, writing the original application and all iterations.","Technologies: HTML, CSS, JavaScript"]').split('|').map(b => JSON.parse(b));

export const experience = companies.map((company, index) => ({
  date: dates[index] || '',
  company: company || '',
  title: titles[index] || '',
  companyDesc: descs[index] || '',
  bullets: bullets[index] || [],
}));

export const edu = (import.meta.env.VITE_EDU || 'BS, COMPUTER SCIENCE|STANFORD UNIVERSITY').split('|');

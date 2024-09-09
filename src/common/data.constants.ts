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
    items: (import.meta.env.VITE_SKILLS_LANGUAGES || '').split(','),
  },
  {
    header: 'TECHNOLOGIES',
    items: (import.meta.env.VITE_SKILLS_TECHNOLOGIES || '').split(','),
  },
  {
    header: 'OTHER',
    items: (import.meta.env.VITE_SKILLS_OTHER || '').split(','),
  },
];

const dates = (import.meta.env.VITE_EXPERIENCE_DATES || '').split(',');
const companies = (import.meta.env.VITE_EXPERIENCE_COMPANIES || '').split(',');
const titles = (import.meta.env.VITE_EXPERIENCE_TITLES || '').split(',');
const descs = (import.meta.env.VITE_EXPERIENCE_DESCS || '').split('|');
const bullets = (import.meta.env.VITE_EXPERIENCE_BULLETS || '').split('|').map(b => JSON.parse(b));

export const experience = companies.map((company, index) => ({
  date: dates[index] || '',
  company: company || '',
  title: titles[index] || '',
  companyDesc: descs[index] || '',
  bullets: bullets[index] || [],
}));

export const edu = (import.meta.env.VITE_EDU || '').split('|');

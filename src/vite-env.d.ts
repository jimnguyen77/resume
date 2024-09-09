/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FIRSTNAME: string;
  readonly VITE_LASTNAME: string;
  readonly VITE_TITLE1: string;
  readonly VITE_TITLE2: string;
  readonly VITE_LOCATION: string;
  readonly VITE_EMAIL: string;
  readonly VITE_PHONE: string;
  readonly VITE_LINKEDIN: string;
  readonly VITE_LINKEDIN_URL: string;
  readonly VITE_URL: string;
  readonly VITE_PROFILE: string;
  readonly VITE_HEADER_PROFILE: string;
  readonly VITE_HEADER_SKILLS: string;
  readonly VITE_HEADER_EXPERIENCE: string;
  readonly VITE_HEADER_EDUCATION: string;
  readonly VITE_SKILLS_LANGUAGES: string;
  readonly VITE_SKILLS_TECHNOLOGIES: string;
  readonly VITE_SKILLS_OTHER: string;
  readonly VITE_EDU: string;
  readonly VITE_EXPERIENCE_COMPANIES: string;
  readonly VITE_EXPERIENCE_DATES: string;
  readonly VITE_EXPERIENCE_TITLES: string;
  readonly VITE_EXPERIENCE_DESCS: string;
  readonly VITE_EXPERIENCE_BULLETS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Single source of truth for all portfolio content.
// Components stay presentational; update copy here, not in JSX.

export const profile = {
  name: 'Rukmini Bongu',
  shortName: 'Rukmini',
  role: 'Frontend Developer',
  focus: 'React.js · TypeScript',
  location: 'Hyderabad, India',
  email: 'bongurukmini1999@gmail.com',
  phone: '+91 63003 94866',
  phoneHref: 'tel:+916300394866',
  github: 'https://github.com/rukmini6300',
  experienceYears: '4+',
  summary:
    'Frontend developer with 4+ years of experience building scalable, high-performance web applications with React.js, TypeScript and modern JavaScript.',
}

export const navigation = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'work' },
]

export const heroStats = [
  { value: '4+', label: 'Years building production UIs' },
  { value: '2', label: 'Enterprise ERP products shipped' },
  { value: '6', label: 'Featured web projects' },
]

export const profileFacts = [
  { label: 'Current role', value: 'React Developer, Bitkemy Technologies' },
  { label: 'Experience', value: '4+ years in frontend engineering' },
  { label: 'Specialisation', value: 'Component architecture & performance' },
  { label: 'Education', value: 'MCA, Andhra University' },
  { label: 'Location', value: 'Hyderabad, India' },
  { label: 'Availability', value: 'Open to new opportunities' },
]

export const strengths = [
  {
    title: 'Scalable component systems',
    description:
      'Reusable, configurable React components that keep large products consistent and fast to extend.',
  },
  {
    title: 'Performance by default',
    description:
      'Code splitting, lazy loading and memoization to cut unnecessary re-renders and keep interfaces responsive.',
  },
  {
    title: 'Reliable team delivery',
    description:
      'Agile/Scrum delivery with design, product and backend teams, backed by code reviews and clear documentation.',
  },
]

export const experience = [
  {
    company: 'Bitkemy Technologies Pvt. Ltd.',
    role: 'React Developer (Frontend)',
    period: '2022 — Present',
    projects: [
      {
        name: 'Kagami Runtime',
        summary: 'UI engine for a no-code ERP platform',
        highlights: [
          'Built a scalable UI engine with React.js and TypeScript that lets users create dynamic business applications without writing code.',
          'Created reusable, configurable components that improved maintainability and accelerated delivery across modules.',
          'Implemented workflow-driven interfaces with dynamic rendering based on interconnected application data.',
          'Improved performance with memoization, code splitting and lazy loading, reducing unnecessary re-renders.',
          'Integrated RESTful APIs with real-time UI updates for responsive, reliable interactions.',
        ],
        stack: ['React', 'TypeScript', 'REST APIs', 'Performance'],
      },
      {
        name: 'Kagami Studio',
        summary: 'Web-based ERP application builder',
        highlights: [
          'Developed an ERP builder with intuitive navigation and responsive UI for non-technical users.',
          'Designed a consistent, scalable component system with React.js, Redux Toolkit and Ant Design.',
          'Built interfaces for hierarchical, relationship-driven data, improving usability and discoverability.',
          'Contributed to frontend architecture discussions, code reviews and sprint planning.',
        ],
        stack: ['React', 'Redux Toolkit', 'Ant Design', 'Agile'],
      },
      {
        name: 'AI-assisted development',
        summary: 'Across Kagami Runtime & Kagami Studio',
        highlights: [
          'Used Claude Code and OpenAI Codex to speed up scaffolding, refactoring, debugging and documentation.',
          'Applied AI-assisted reviews to catch bugs early, validating all generated code against team standards before merge.',
        ],
        stack: ['Claude Code', 'OpenAI Codex', 'Code review'],
      },
    ],
  },
]

export const education = [
  {
    title: 'Master of Computer Applications (MCA)',
    institution: 'Andhra University',
    period: '2019 — 2021',
  },
  {
    title: 'Web Development certification',
    institution: 'Udemy',
    period: 'Certification',
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frameworks & state',
    skills: ['React.js', 'React Hooks', 'Redux', 'Redux Toolkit', 'Context API'],
  },
  {
    title: 'UI & styling',
    skills: ['Material UI', 'Ant Design', 'Tailwind CSS', 'SASS/SCSS', 'Styled Components'],
  },
  {
    title: 'APIs & integration',
    skills: ['RESTful APIs', 'Axios', 'Fetch API', 'JSON', 'Node.js (basics)'],
  },
  {
    title: 'Performance',
    skills: ['Code splitting', 'Lazy loading', 'React.memo', 'useMemo / useCallback', 'Bundle optimisation'],
  },
  {
    title: 'Tooling & delivery',
    skills: ['Vite', 'Webpack', 'ESLint', 'Prettier', 'Git & GitHub', 'GitHub Actions', 'Vercel', 'Netlify'],
  },
]

export const services = [
  {
    title: 'Frontend architecture',
    description: 'Scalable React and TypeScript codebases structured around reusable, well-typed components.',
  },
  {
    title: 'Design system development',
    description: 'Consistent component libraries with Ant Design, Material UI or Tailwind that keep products cohesive.',
  },
  {
    title: 'Complex, data-driven UIs',
    description: 'Dashboards, workflows and builder tools that make relationship-heavy data easy to work with.',
  },
  {
    title: 'Performance optimisation',
    description: 'Profiling and fixing slow renders, splitting bundles and lazy-loading for faster experiences.',
  },
  {
    title: 'API integration',
    description: 'Clean, resilient integration with REST APIs, including loading, error and real-time states.',
  },
  {
    title: 'Responsive implementation',
    description: 'Pixel-accurate, accessible interfaces that work across browsers, devices and screen sizes.',
  },
]

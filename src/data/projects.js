import dunzoPreview from '../assets/project_1.webp'
import dashboardPreview from '../assets/project_2.webp'
import tablerPreview from '../assets/project_3.webp'
import flipkartPreview from '../assets/project_4.webp'
import mrjPreview from '../assets/project_5.webp'
import translatePreview from '../assets/project_6.webp'

const GITHUB_PAGES = 'https://rukmini6300.github.io'

const projects = [
  {
    id: 'dunzo',
    name: 'Dunzo',
    category: 'Delivery platform',
    description: 'Responsive marketing site for a hyperlocal delivery service.',
    image: dunzoPreview,
    url: `${GITHUB_PAGES}/Dunzo-website/`,
  },
  {
    id: 'dashboard',
    name: 'Admin Dashboard',
    category: 'Dashboard interface',
    description: 'Data-dense admin layout with cards, charts and navigation.',
    image: dashboardPreview,
    url: `${GITHUB_PAGES}/Dashboard-main/`,
  },
  {
    id: 'tabler',
    name: 'Tabler',
    category: 'Web interface',
    description: 'Clean UI kit implementation focused on reusable layout blocks.',
    image: tablerPreview,
    url: `${GITHUB_PAGES}/Tabler-website/`,
  },
  {
    id: 'flipkart',
    name: 'Flipkart',
    category: 'E-commerce interface',
    description: 'Product listing and storefront UI for a large e-commerce brand.',
    image: flipkartPreview,
    url: `${GITHUB_PAGES}/flipkart/`,
  },
  {
    id: 'mrj',
    name: 'MRJ',
    category: 'Business website',
    description: 'Professional company website with responsive sections.',
    image: mrjPreview,
    url: `${GITHUB_PAGES}/MRJ-website/`,
  },
  {
    id: 'translate',
    name: 'Translate',
    category: 'Translation tool',
    description: 'Interactive translation app built on a third-party API.',
    image: translatePreview,
    url: `${GITHUB_PAGES}/Translate_project/`,
  },
]

export default projects

# GDGoC UGM Frontend

GDGoC UGM Frontend Hacker Assigment
A responsive website for Google Developer Groups on Campus (GDGoC) UGM, built as a frontend hacker assignment. The project introduces the community, helps visitors explore learning opportunities, and provides a way to get in touch.

visit the live website : https://gdgoc-front-end-assignment-theta.vercel.app/overview

The interface is based on the supplied Figma design and integrates data from the GDGoC UGM API.
Tech stack

- React 19 and TypeScript — component-based UI with type safety
- Vite — development server and production build tooling
- Tailwind CSS v4 — responsive layouts and styling
- React Router — client-side page navigation
- TanStack React Query — fetching, caching, and managing API data
  Features
  An introduction to GDGoC UGM, using the shared site navigation and footer. Community information can be populated using the provided API.
  Overview page (/overview)
  An overview of ways to participate and learn, including:
- Learning tracks: Research & Discovery, Design & Creativity, and Development
- Learning outcomes: examples of what members can practice and create
- Program formats: study groups, hands-on workshops, project circles, and knowledge sharing
- Learning journey: Discover → Practice → Build → Share
- Starting point: an invitation for people who are new to tech
- Community invitation: links back to the top of the overview and to the Contact page
  In-page section navigation links to the corresponding sections.
  Contact page (/contact)
  Visitors can review inquiry guidance, choose an inquiry category, and fill out a contact form. The form prepares an email using a mailto: link; it does not automatically send messages or store submissions on a backend. Sending the email is completed in the visitor's email application.
  API integration
  Base URL: https://gdgoc-ugm-api.vercel.app/api

The frontend uses a reusable API helper (src/api.ts) to request data and handle unsuccessful responses. React Query manages request states such as loading and errors.
Endpoint Usage
GET /navigation Shared navigation and footer links
GET /stats Community statistics
GET /tracks Learning tracks and their identities
GET /inquiry-categories Contact inquiry categories
GET /formats Available program formats
GET /journey Learning journey steps and ordering

Hybrid API + Figma approach
Some text and visual details in the Figma design differ from the API content. To preserve the supplied design while still using live data:

- API records provide identifiers, names, ordering, and/or availability, depending on the section.
- Local presentation configuration supplies Figma-specific descriptions, colors, illustrations, icons, and labels.
- Records are matched by stable IDs where possible (for example, study-groups or discover).
  This separates API data from UI presentation without hardcoding entire API responses.
  Note: The website requires access to the external API for data-driven sections. If that service is unavailable, those sections may display loading or error states.

Getting started
Prerequisites

- Node.js and npm installed
- An internet connection to retrieve API data
  Installation

1. Clone the repository:
   git clone <your-repository-url>
   cd <your-repository-folder>
2. Install dependencies:
   npm install
3. Start the local development server:
   npm run dev
4. Open the local URL shown in the terminal (usually http://localhost:5173).
   Production build
   npm run build
   To preview the production build locally:
   npm run preview
   Project structure
   src/
   ├── assets/ # Images, icons, and fonts
   ├── components/
   │ ├── overview/
   │ │ ├── intro.tsx
   │ │ ├── sectionnav.tsx
   │ │ ├── learningtrack.tsx
   │ │ ├── learningoutcomes.tsx
   │ │ ├── programformat.tsx
   │ │ ├── learningjourney.tsx
   │ │ ├── startingpoint.tsx
   │ │ └── communityinvitation.tsx
   │ ├── header.tsx
   │ └── footer.tsx
   ├── pages/
   │ ├── Landing.tsx
   │ ├── Overview.tsx
   │ └── Contact.tsx
   ├── api.ts # API requests and response handling
   ├── types.ts # Shared TypeScript types
   └── App.tsx # Routing and application providers
   Additional Contact and Landing components may appear in the components/ directory.
   Design and responsiveness
   The website follows the provided Figma layout, using reusable components, responsive Tailwind utility classes, and a consistent visual palette. On smaller screens, multi-column sections adapt to narrower layouts. Certain sections use full-width background colors while their inner content remains aligned to a centered maximum-width container.
   Navigation behavior

- The header and footer provide navigation around the site.
- Overview section links scroll to specific page sections.
- Explore the overview in the community invitation returns to the top of the Overview page.
- Talk to the community and Ask about getting started navigate to the Contact page.
  Known considerations
- The Contact form relies on a visitor having an email application configured for mailto: links.
- UI descriptions intentionally follow Figma in some places rather than duplicating the API's descriptions word for word.
- API-powered content depends on the external service remaining accessible.
  Assignment notes
  This project was built to demonstrate React component organization, TypeScript usage, routing, responsive styling, API integration, and consistent implementation of a provided UI design.

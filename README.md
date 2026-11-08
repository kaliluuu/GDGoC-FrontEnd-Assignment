# GDGoC UGM Frontend

GDGoC UGM — Frontend Website
A responsive frontend website for Google Developer Groups on Campus (GDGoC) UGM, developed as a frontend technical assignment. The site introduces the community, presents ways to learn and participate, and helps visitors get in touch.

The interface is based on the provided Figma design and integrates data from the provided GDGoC UGM API.
Project links
Replace the placeholders below with your actual public links before submitting.

- Live website: https://gdgoc-front-end-assignment-napnxn5sj-kalila2.vercel.app
- Source code: https://github.com/kaliluuu/GDGoC-FrontEnd-Assignment
- Video presentation (3–5 minutes): Google Drive video

Tech stack
Technology Purpose
React 19 Building the UI with reusable components
TypeScript Type checking for components and API data
Vite Development server and production builds
Tailwind CSS v4 Styling and responsive layouts
React Router Navigation between pages and in-app routes
TanStack React Query Fetching, caching, and managing API requests
Vercel Hosting the deployed frontend

Main features

1. Overview page (/overview)

- Learning Tracks: Research & Discovery, Design & Creativity, and Development.
- Learning Outcomes: Examples of skills to practice and outcomes to create.
- Program Format: Study groups, hands-on workshops, project circles, and knowledge sharing.
- Learning Journey: Discover → Practice → Build → Share.
- Starting Point: Encouragement for visitors who are new to tech, with a link to Contact.
- Community Invitation: Links to the top of Overview and to the Contact page.
- Section navigation: In-page links to the relevant sections of Overview.

2. Contact page (/contact)

- Inquiry guidance and selectable inquiry categories.
- A contact form that uses the selected inquiry category.
- Supporting community/contact information.
- A mailto:-based email action that opens the visitor's email app with a prepared message.
  Important: The contact form does not send messages through a backend or save form submissions to a database. The visitor must review and send the email from their own email app.
  API integration
  API base URL: https://gdgoc-ugm-api.vercel.app/api

The src/api.ts module centralizes HTTP requests and handles unsuccessful API responses. Components use TanStack React Query to access remote data and represent loading and error states.
Endpoint Used for
GET /navigation Shared navigation links
GET /stats Community statistics
GET /tracks Learning track data
GET /inquiry-categories Contact inquiry categories
GET /formats Available learning formats
GET /journey Learning journey steps

Hybrid API + Figma implementation
Some descriptions and visual details in the supplied Figma design differ from the API response. The implementation deliberately combines both sources:

1. API data determines which records are present and provides fields such as IDs, names, and step numbers.
2. Local UI configuration controls Figma-specific descriptions, illustrations, colors, icons, and supporting labels.
3. Records are associated with their presentation settings using their API IDs (for example, study-groups or discover).
   This approach keeps the UI connected to API data while preserving the intended visual design. An unavailable API can affect API-driven content.
   React concepts demonstrated

- Reusable components: Page sections are implemented as separate React components.
- React state (useState): The Contact page tracks the selected inquiry category and shares it with relevant child components through props.
- Conditional rendering: Loading, error, and empty states are displayed when appropriate.
- List rendering: .map() renders track, format, and journey items from retrieved data.
- Client-side routing: React Router connects /, /overview, and /contact without full-page navigation between routes.
- Server-state management: React Query caches retrieved data and exposes request status.
  Getting started
  Prerequisites
- Node.js and npm installed
- An internet connection for API-powered content

1. Clone the repository
   git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   cd YOUR-REPOSITORY
2. Install dependencies
   npm install
3. Run the development server
   npm run dev
   Open the local address displayed in your terminal (typically http://localhost:5173).
4. Build for production
   npm run build
5. Preview the production build
   npm run preview
   The API base URL is configured in the frontend source. No additional environment variables are needed for the API setup described here. If you later switch to an environment-variable-based API URL, update these instructions accordingly.
   Project structure
   .
   ├── public/ # Static public assets
   ├── src/
   │ ├── assets/ # Images, illustrations, and fonts
   │ ├── components/
   │ │ ├── contact/ # Contact UI and shared header/footer
   │ │ │ ├── header.tsx
   │ │ │ ├── footer.tsx
   │ │ │ ├── contactintro.tsx
   │ │ │ ├── inquiryguidance.tsx
   │ │ │ ├── communityupdates.tsx
   │ │ │ ├── contactform.tsx
   │ │ │ └── beforeyoucontact.tsx
   │ │ └── overview/ # Overview page sections
   │ │ ├── intro.tsx
   │ │ ├── sectionnav.tsx
   │ │ ├── learningtrack.tsx
   │ │ ├── learningoutcomes.tsx
   │ │ ├── programformat.tsx
   │ │ ├── learningjourney.tsx
   │ │ ├── startingpoint.tsx
   │ │ └── communityinvitation.tsx
   │ ├── pages/
   │ │ ├── Landing.tsx
   │ │ ├── Overview.tsx
   │ │ └── Contact.tsx
   │ ├── api.ts # API helper and endpoint functions
   │ ├── types.ts # Shared TypeScript types
   │ ├── App.tsx # Routes, providers, and shared layout
   │ └── main.tsx # React application entry point
   ├── index.html
   ├── package.json
   ├── vite.config.ts
   ├── vercel.json # SPA routing rewrite (if configured)
   └── README.md
   The tree summarizes the structure used in this implementation. Check exact file names against your final repository, especially if you have moved components again.

Design and responsiveness

- Layout and content are adapted from the provided Figma reference.
- Tailwind CSS utility classes control typography, spacing, colors, and breakpoints.
- CSS Grid and Flexbox support the card layouts and multi-column sections.
- Content areas are centered within a maximum-width container, while selected sections use full-width background colors.
- Desktop multi-column layouts adapt to smaller screens.
  Deployment
  The frontend is intended to be deployed on Vercel through its connected GitHub repository.

Typical Vite deployment settings:
Setting Value
Framework preset Vite
Build command npm run build
Output directory dist
Install command npm install (or Vercel automatic detection)
Root directory Repository root, if package.json is there

React Router and direct-route refreshes
The app uses BrowserRouter. To prevent Vercel from returning a 404 when someone opens or refreshes /overview or /contact directly, include this file at the deployment root as vercel.json:
{
"rewrites": [
{
"source": "/(.*)",
"destination": "/index.html"
}
]
}
Commit and push vercel.json to the same branch that Vercel deploys, then verify a new Ready production deployment uses the updated configuration.
Testing checklist

Limitations and notes

- Some visible text is intentionally sourced from the Figma design rather than from the API.
- The Contact form prepares an email using mailto:; it is not a server-side submission system.
- The Learning Track links should be tested against the routes actually registered in the final App.tsx.

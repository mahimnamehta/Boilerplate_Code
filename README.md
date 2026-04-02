# React + TypeScript Boilerplate

A production-ready, scalable frontend boilerplate with clean architecture.

## Tech Stack

- **React 19** + **TypeScript** — UI framework with type safety
- **Redux Toolkit** — State management with async thunks
- **Axios** — HTTP client with interceptors
- **Bootstrap 5** + **SCSS** — Styling with custom theming
- **React Router v7** — Client-side routing with lazy loading
- **Jest** + **React Testing Library** — Unit testing
- **Docker** — Containerized deployment
- **Vercel** — CI/CD & hosting
- **Vite** — Lightning-fast build tool

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Preview production build
npm run preview
```

## Docker

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or build manually
docker build -t react-boilerplate .
docker run -p 3000:80 react-boilerplate
```

## Folder Structure

```
src/
├── app/                    # App setup (store, routes, App)
├── assets/scss/            # Global styles & Bootstrap overrides
├── components/             # Shared components
│   ├── ui/                 # Button, Skeleton
│   ├── layout/             # Navbar, Footer
│   └── ErrorBoundary/      # Error boundary
├── features/               # Feature modules (posts)
│   └── posts/
│       ├── api/            # API calls
│       ├── slices/         # Redux slices
│       └── components/     # Feature-specific components
├── hooks/                  # Custom hooks (useApi)
├── services/               # Axios client
├── types/                  # TypeScript types
├── utils/                  # Utility functions
└── pages/                  # Route-level pages
    ├── Home/
    ├── About/
    └── Dashboard/
```

## Scripts

| Command            | Description                |
| ------------------ | -------------------------- |
| `npm run dev`      | Start dev server           |
| `npm run build`    | Production build           |
| `npm run preview`  | Preview production build   |
| `npm test`         | Run tests                  |
| `npm run test:watch` | Run tests in watch mode  |
| `npm run test:coverage` | Run tests with coverage |
| `npm run lint`     | Run ESLint                 |

## Environment Variables

Copy `.env.example` to `.env` and configure:

```env
VITE_API_BASE_URL=https://jsonplaceholder.typicode.com
```

## License

MIT

# My Portfolio

A modern, responsive portfolio website built with Vue 3 and Vite. This project showcases personal work, creative projects, and provides contact information through an interactive dashboard interface.

**Goals:** quick local development, easy customization, and a clean responsive UI.

**Tech stack:** Vue 3 (Composition API), Vite, Vue Router 4, FontAwesome, plain CSS.

## Features

- **Authentication System**: Secure login page with localStorage-based authentication
- **Dashboard Layout**: Clean, organized interface for portfolio sections
- **Profile Section**: Personal information and bio
- **Showcase**: Display of projects and achievements
- **Creative Gallery**: Showcase of creative work
- **Contact Page**: Contact information and form
- **Responsive Design**: Mobile-friendly layout
- **FontAwesome Icons**: Professional iconography throughout

## Tech Stack

- **Frontend Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite
- **Routing**: Vue Router 4
- **Icons**: FontAwesome (SVG Core, Free Brands & Solid Icons)
- **Styling**: Custom CSS with responsive design

### Prerequisites

- Node.js (version ^20.19.0 || >=22.12.0)
- npm or yarn

**Key features**
- Login (localStorage-based guard)
- Dashboard layout with nested routes
- Profile, Showcase, Creative, and Contact views
- Responsive styles and accessible components

## Getting started (run locally)

Prerequisites:
- Node.js 18+ (or matching your environment)
- npm (or yarn)

1. Install dependencies

```bash
npm install
```

2. Start the dev server

```bash
npm run dev
```

3. Open the app

Visit http://localhost:5173 (or the URL shown in the terminal).

4. Build for production

```bash
npm run build
npm run preview
```

## Project structure (important files)

- `index.html` — the app HTML shell
- `src/main.js` — app bootstrap (Vue + router + FontAwesome)
- `src/App.vue` — top-level App component (renders `RouterView`)
- `src/router/index.js` — routes and navigation guard
- `src/views/*` — page components (Profile, Showcase, Creative, Contact, Login)
- `src/components/*` — shared UI components (Dashboard layout, etc.)
- `src/assets/main.css` — primary styles and variables

## Authentication and routing

This project uses a simple localStorage flag (`isLoggedIn`) to simulate authentication. The router has a navigation guard that redirects unauthenticated users to `/login` when they try to access `/myPortfolio/*` routes.

To sign in during development, set the `isLoggedIn` flag in the browser devtools console:

```js
localStorage.setItem('isLoggedIn', 'true')
```

To sign out:

```js
localStorage.removeItem('isLoggedIn')
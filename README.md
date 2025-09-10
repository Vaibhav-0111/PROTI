# 🚀 Hyperdrive Portfolio

> **A visually stunning, interactive 3D portfolio website.**  
> Showcasing projects, skills, and achievements with modern UI, smooth animations, and immersive 3D scenes.

---

<p align="center">
  <a href="https://github.com/Vaibhav-0111/hyperdrive-portfolio-main" target="_blank">
    <img src="https://img.shields.io/badge/View%20on-GitHub-181717?style=for-the-badge&logo=github" alt="GitHub" />
  </a>
  <a href="public/vaibhav-tripathi-cv.html" target="_blank">
    <img src="https://img.shields.io/badge/Download-Resume-blue?style=for-the-badge&logo=read-the-docs" alt="Download Resume" />
  </a>
  <a href="https://github.com/Vaibhav-0111" target="_blank">
    <img src="https://img.shields.io/badge/More%20Projects-Portfolio-6f42c1?style=for-the-badge&logo=react" alt="Portfolio" />
  </a>
</p>

---

## ✨ Features

- **Magnetic Buttons:** Interactive, animated buttons for engaging UI.
- **3D Project Showcase:** Explore projects in a dynamic Three.js scene.
- **Animated UI:** Framer Motion & GSAP for smooth transitions.
- **Responsive Design:** Looks great on all devices.
- **Downloadable Resume:** Quick access to your CV.
- **Hackathon & Project Stats:** Visual display of achievements.
- **Modern Stack:** React, TypeScript, Vite, Tailwind CSS.

---

## 🛠️ Tech Stack

<p>
  <img src="https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61dafb"/>
  <img src="https://img.shields.io/badge/TypeScript-007acc?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Three.js-000?style=for-the-badge&logo=three.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/TailwindCSS-38b2ac?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
  <img src="https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white"/>
  <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
</p>

---

## 📁 Project Structure

<details>
  <summary>Expand to view</summary>

```
hyperdrive-portfolio-main/
├── public/                # Static assets (resume, images, robots.txt)
├── src/
│   ├── assets/            # Images and media
│   ├── components/
│   │   ├── 3d/            # 3D scene components
│   │   ├── animations/    # Animation utilities
│   │   ├── sections/      # Page sections
│   │   └── ui/            # UI primitives
│   ├── hooks/             # Custom React hooks
│   ├── integrations/      # Supabase integration
│   ├── lib/               # Utility functions
│   ├── pages/             # Page-level components
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── .env                   # Environment variables
├── package.json           # Project metadata and scripts
├── tailwind.config.ts     # Tailwind CSS configuration
├── vite.config.ts         # Vite configuration
├── tsconfig*.json         # TypeScript configuration
└── README.md              # Project documentation
```
</details>

---

## 🏁 Getting Started

### Prerequisites

- **Node.js** (v18+ recommended)
- **npm** or **bun** (bun.lockb included)

### Installation

```sh
git clone https://github.com/Vaibhav-0111/hyperdrive-portfolio-main.git
cd hyperdrive-portfolio-main
npm install
# or, if using bun:
bun install
```

### Start Development Server

```sh
npm run dev
# or
bun run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

---

## 🚢 Deployment

```sh
npm run build
```

Deploy the `dist/` folder to your preferred static hosting (Vercel, Netlify, GitHub Pages, etc.).

---

## 🙏 Credits

- **Author:** [Vaibhav Tripathi](https://github.com/Vaibhav-0111)
- **Libraries:**  
  - [React](https://react.dev/)
  - [Three.js](https://threejs.org/)
  - [Framer Motion](https://www.framer.com/motion/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [GSAP](https://greensock.com/gsap/)
  - [Supabase](https://supabase.com/)

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=7D7DFF&height=200&section=header&text=Saksham%20Shrestha&fontSize=50&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Fullstack%20Developer%20%26%20Designer&descAlignY=60&descAlign=50" width="100%" />

<br/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=22&pause=1000&color=7D7DFF&center=true&vCenter=true&width=600&lines=Building+Modern+Web+Experiences+%F0%9F%9A%80;React+%7C+TypeScript+%7C+Vite;Fullstack+Developer+%7C+UI%2FUX+Designer;Always+Learning+%7C+Always+Building)](https://git.io/typing-svg)

<br/>

[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-Live-7D7DFF?style=for-the-badge)](https://saksham-shrestha526.github.io)
[![Netlify Status](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://app.netlify.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/saksham-shrestha-81b5162aa)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/saksham-shrestha526)
[![Email](https://img.shields.io/badge/Email-Hire_Me-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sakshamshrestha526@gmail.com)

</div>

---

## 👋 About This Project

This is my personal portfolio website built using React, TypeScript, and Vite, with the support of AI tools during development.

I used AI to assist with ideas, debugging, and improving code structure, while focusing on understanding and customizing every part of the implementation.

The goal of this project was to strengthen my frontend development skills and build a clean, responsive, and modern user experience.

The site is deployed on Netlify for fast and reliable performance.

---

## ✨ Features

| Feature | Details |
|---|---|
| ⚡ **Vite Powered** | Lightning-fast HMR dev server and optimized production builds |
| 🔷 **TypeScript** | Fully typed codebase for reliability and developer experience |
| 🎨 **GSAP Animations** | Scroll-driven reveals, stagger effects, and skill bar animations |
| 📱 **Fully Responsive** | Mobile-first layout with a custom hamburger menu |
| 🌙 **Dark Theme** | Custom dark palette with glass morphism UI cards |
| 📬 **Working Contact Form** | Async Formspree integration with success/error state handling |
| 🚀 **Netlify Deployment** | Auto-deploy on push with custom `netlify.toml` config |

---

## 🛠️ Tech Stack

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

</div>

| Layer | Technology |
|---|---|
| **Framework** | React 18 + TypeScript |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS v4 with custom `@theme` tokens |
| **Animations** | GSAP + ScrollTrigger |
| **Icons** | Lucide Icons |
| **Form Backend** | Formspree (serverless) |
| **Deployment** | Netlify (CI/CD via Git) |

---

## 📂 Project Structure

```
portfolio/
│
├── .vscode/
│   └── settings.json          # Editor config
│
├── src/
│   ├── lib/
│   │   └── utils.ts           # Shared utility functions
│   │
│   ├── App.tsx                # Root component — all sections live here
│   ├── main.tsx               # React entry point
│   └── index.css              # Global styles + Tailwind directives
│
├── index.html                 # Vite HTML entry point
├── metadata.json              # Site metadata
├── netlify.toml               # Netlify deployment config
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript config
├── package.json               # Dependencies & scripts
└── README.md                  # You are here
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `v18+`
- **npm** or **yarn**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/saksham-shrestha526/portfolio.git

# 2. Navigate into the project
cd portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be running at **`http://localhost:5173`**

### Build for Production

```bash
# Create an optimised production build
npm run build

# Preview the production build locally
npm run preview
```

---

## 🌐 Deployment

This project is deployed on **Netlify** via continuous deployment.

Every push to the `main` branch automatically triggers a new build and deploys to production. The `netlify.toml` file handles build configuration and redirect rules.

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 📸 Sections

```
🏠  Hero          →  Animated intro with CTA buttons and social links
👤  About         →  Bio, stats (5+ projects, 3+ clients), and personal quote
🧠  Skills        →  Animated progress bars for Frontend, Backend, DB, UI/UX
💼  Projects      →  4 featured projects with tech stack tags and GitHub links
🗺️  Journey       →  Interactive timeline of education and learning milestones
🛎️  Services      →  Web Dev, UI/UX Design, Performance, API Integration cards
📬  Contact       →  Working contact form + email, phone, and location info
```

---

## 🎯 Roadmap

- [ ] Add dark/light mode toggle
- [ ] Break `App.tsx` into individual section components
- [ ] Add project filter by technology tag
- [ ] Integrate a headless CMS for dynamic project management
- [ ] Add blog/articles section
- [ ] Improve accessibility (ARIA labels, keyboard navigation)

---

## 📬 Contact Me

I'm open to freelance projects, collaborations, and full-time opportunities.

| Channel | Link |
|---|---|
| 📧 Email | [sakshamshrestha526@gmail.com](mailto:sakshamshrestha526@gmail.com) |
| 📞 Phone | +977 9824223305 |
| 💼 LinkedIn | [saksham-shrestha-81b5162aa](https://www.linkedin.com/in/saksham-shrestha-81b5162aa) |
| 📍 Location | Hetauda-07, Nagswoti, Nepal |

---

## 📄 License

This project is open source under the [MIT License](LICENSE).  
Feel free to use it as inspiration — a ⭐ star on the repo would mean a lot!

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=7D7DFF&height=100&section=footer" width="100%"/>

**Made with 💜 by Saksham Shrestha**

*"Passionate about continuous learning and applying technology to solve real-world challenges."*

</div>
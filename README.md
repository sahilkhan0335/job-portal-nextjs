#  Job Portal — Next.js 15 + Drizzle ORM + MySQL

A modern **Job Portal** built using **Next.js 15**, **React 19**, **Tailwind CSS 4** and **Drizzle ORM** crafted by **Sahil Khan**.  
This application enables users to **register**, **log in**, **view and manage job listings** and **access role-based dashboards** for Employers and Applicants — all within a clean and responsive UI.

---

##  Features

###   Authentication & Security
- **User Registration & Login** with secure password hashing (`argon2`)
- **Get Current User Info** using Cookie & Session
- **Extended Session Expiry** — keeps users logged in longer via session refresh
- **Role-Based Protected Routes**
  - Employer Dashboard (for job posting & management)
  - Applicant Dashboard (for job browsing & applying)
- **Session Security** for authenticated route access

###   Job Management
- Employers can **create, update, and delete job listings**
- Applicants can **browse and apply** for available positions
- Real-time UI updates and form validation

###   Modern Tech Stack
-   **Next.js 15** with Turbopack for faster builds
-   **React 19** for modern client-side interactivity
-   **Drizzle ORM + MySQL** for type-safe database management
-   **Tailwind CSS 4** for clean, responsive styling

###   UI & UX Enhancements
- Built with **Radix UI** components and **Lucide Icons**
- **Dark Mode** support via `next-themes`
- Interactive feedback with `sonner` toasts

###   Validation & Forms
- Schema validation powered by **Zod**
- Forms built using **React Hook Form** for smooth UX and easy validation

---

##   Tech Stack Overview

| Category | Technology |
|-----------|-------------|
| **Frontend** | Next.js 15, React 19, Tailwind CSS 4 |
| **Backend** | Next.js API Routes |
| **Database** | MySQL + Drizzle ORM |
| **Authentication** | Argon2, Cookie & Session |
| **Validation** | Zod |
| **Forms** | React Hook Form |
| **UI Components** | Radix UI, Lucide React |
| **Developer Tools** | TypeScript, Turbopack, ESLint |

---

##   Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/sahilkhan0335/job-portal-nextjs.git
   cd job-portal-nextjs

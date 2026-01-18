# ItemSphere – Product Listing & Management Application

**ItemSphere** is a modern, responsive product listing and management web application built using **Next.js (App Router)** and **Express.js**.  
The project demonstrates real-world concepts such as public and protected routes, authentication, API-based data fetching, and a professional UI similar to modern e-commerce or SaaS platforms.

---

## 🌐 Live Demo

- **Frontend (Vercel):**  
  👉 https://itemsphere.vercel.app  

- **Backend API (Render):**  
  👉 https://itemsphere-api.onrender.com  

> ⚠️ Note: Backend API may take a few seconds to wake up on first request (Render free tier).

---

## 🚀 Tech Stack

- **Frontend:** Next.js 15/16 (App Router), React
- **Styling:** Tailwind CSS
- **Backend:** Express.js (REST API)
- **Authentication:**  
  - Mock login (hardcoded credentials + cookies)  
  - Google Login (NextAuth.js)
- **Animations:** Framer Motion
- **Notifications:** SweetAlert2
- **Deployment:**  
  - Frontend → Vercel  
  - Backend → Render  

---

## 📦 Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/nextjs-items-app.git
cd nextjs-items-app

2️⃣ Install Frontend Dependencies
bash ** 
- Copy code
- npm install

3️⃣ Setup Backend (Express Server)
bash **
- Copy code
- cd server
- npm install
- node index.js
Backend will run at:
- Copy code
http://localhost:5000

4️⃣ Run Frontend (Next.js)
From the root directory:

bash
Copy code
npm run dev
Frontend will run at:

arduino
Copy code
http://localhost:3000
🗺️ Route Summary
🌐 Public Routes
Route	Description
/	Landing page (7 sections)
/items	Item list page
/items/[id]	Item details page
/support	Support page with FAQ & contact form
/login	Login pag


✨ Implemented Features

Responsive landing page with 7 well-structured sections

Public item list fetched from Express API

Dynamic item details page using route parameters

Mock authentication using hardcoded credentials

Authentication state stored in cookies

Google authentication using NextAuth.js

Protected routes with redirection for unauthenticated users

Support page with:

Interactive FAQ section

Support request form

SweetAlert success notification

Animated UI using Framer Motion

Professional navbar & footer

Clean, scalable project structure

🧩 Feature Explanation
🔐 Authentication

Users can log in using:

Mock credentials (email & password)

Google OAuth (NextAuth.js)

Authentication status is stored using cookies

Protected pages are inaccessible without login

📦 Item List & Details

Items are fetched from an Express.js API

Each item includes:

Name

Description

Price

Image

Clicking View Details navigates to a dynamic item details page

🆘 Support Page

FAQ section for common questions

Support request form

On form submission:

SweetAlert success message appears

Form automatically clears

Designed to simulate a real customer support workflow

🧪 Demo Credentials (Mock Login)
Email: admin@itemsphere.com
Password: 123456


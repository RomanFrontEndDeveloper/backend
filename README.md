# Roman-FreelanceHub

Roman-FreelanceHub is a modern full-stack freelance marketplace built with **Next.js**, **React**, **TypeScript**, **Node.js**, **Express**, and **MongoDB**.

The application enables users to register, authenticate, create, browse, search, edit, delete, and manage freelance projects through a clean, responsive, and production-ready interface.

The project was built as a portfolio application to demonstrate modern full-stack development practices.

---

# 🚀 Live Demo

## Frontend

https://roman-freelancehub.vercel.app

## Backend API

https://roman-freelancehub-backend.onrender.com

Health Check:

https://roman-freelancehub-backend.onrender.com/healthz

---

# ✨ Features

## Authentication

- JWT Authentication
- User Registration
- User Login
- Protected Routes
- Persistent Authentication
- User Profile

## Projects

- Create Projects
- Edit Projects
- Delete Projects
- Project Details
- Search Projects
- Pagination
- Favorite Projects
- Image Upload (Cloudinary)

## User Experience

- Responsive Design
- Dark / Light Theme
- Loading States
- Form Validation
- Error Handling
- Clean UI

## Backend

- REST API
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cloudinary Upload
- Zod Validation
- Helmet Security
- Express Rate Limit
- Morgan Logging
- Docker Support
- Global Error Handler

---

# 🛠 Tech Stack

## Frontend

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Axios
- TanStack Query
- React Hook Form
- Zod
- Context API

---

## Backend

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- JWT
- Multer
- Cloudinary
- Zod
- Helmet
- Morgan
- Express Rate Limit
- Docker

---

# 📁 Project Structure

````text
Roman-FreelanceHub
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── data
│   │   ├── dto
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── services
│   │   ├── types
│   │   ├── utils
│   │   ├── validation
│   │   ├── app.ts
│   │   └── server.ts
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
│
└── frontend
    ├── app
    ├── public
    ├── shared
    │   ├── api
    │   ├── hooks
    │   ├── providers
    │   ├── ui
    │   └── validation
    ├── widgets
    ├── package.json
    ├── next.config.ts
    └── tsconfig.json
---

# ⚙️ Local Installation

## Clone repositories

Frontend

```bash
git clone https://github.com/RomanFrontEndDeveloper/frontend.git
````

Backend

```bash
git clone https://github.com/RomanFrontEndDeveloper/backend.git
```

---

# Frontend

```bash
cd frontend

npm install

npm run dev
```

Runs on

```text
http://localhost:3000
```

---

# Backend

```bash
cd backend

npm install

npm run dev
```

Runs on

```text
http://localhost:5000
```

---

# 🔐 Environment Variables

## Backend (.env)

```env
PORT=5000

MONGO_URI=

JWT_SECRET=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=

FRONTEND_URL=http://localhost:3000
```

---

## Frontend (.env.local)

Local development

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Production

```env
NEXT_PUBLIC_API_URL=https://roman-freelancehub-backend.onrender.com/api
```

---

# 🐳 Docker

## Build

```bash
docker build -t roman-freelancehub-backend .
```

## Run

```bash
docker run --env-file .env -p 5000:5000 roman-freelancehub-backend
```

---

# ☁️ Deployment

## Frontend

- Vercel

https://roman-freelancehub.vercel.app

---

## Backend

- Render

https://roman-freelancehub-backend.onrender.com

---

# 📦 REST API

## Authentication

```http
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/profile
```

---

## Projects

```http
GET     /api/projects
GET     /api/projects/:id
POST    /api/projects
PATCH   /api/projects/:id
DELETE  /api/projects/:id
```

---

## Favorites

```http
GET     /api/favorites
POST    /api/favorites/:projectId
DELETE  /api/favorites/:projectId
```

---

# 🔒 Security

- Helmet
- Express Rate Limit
- Zod Validation
- JWT Authentication
- Protected Routes
- Global Error Handling
- Morgan Request Logging
- ObjectId Validation

---

# 📈 Current Status

## Completed

- ✅ User Registration
- ✅ User Login
- ✅ JWT Authentication
- ✅ Protected Routes
- ✅ User Profile
- ✅ Dashboard
- ✅ CRUD Projects
- ✅ Project Details
- ✅ Search
- ✅ Pagination
- ✅ Favorites
- ✅ Image Upload
- ✅ Cloudinary Integration
- ✅ Backend Validation
- ✅ Helmet Security
- ✅ Express Rate Limiting
- ✅ Morgan Logging
- ✅ Docker
- ✅ Backend Deployment (Render)
- ✅ Frontend Deployment (Vercel)
- ✅ Responsive Design
- ✅ Dark / Light Theme

---

## Planned Improvements

- GitHub Actions (CI/CD)
- Toast Notifications
- Framer Motion Animations
- Performance Optimization
- SEO Improvements
- Unit Testing
- E2E Testing

---

# 👨‍💻 Author

**Roman Okhremov**

Frontend / Full-Stack Developer

### Tech Stack

- React
- Next.js
- TypeScript
- Node.js
- Express.js
- MongoDB
- Docker

---

## GitHub

https://github.com/RomanFrontEndDeveloper

---

## Portfolio

https://portfolio-react-roman-okhremov.netlify.app

---

## LinkedIn

https://www.linkedin.com/in/roman-okhremov-9b0764369/

---

# 📄 License

This project was created as a portfolio and educational project to demonstrate modern full-stack web development using React, Next.js, TypeScript, Node.js, Express, MongoDB, Docker, Render, and Vercel.

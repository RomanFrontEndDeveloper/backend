# FreelanceHub

FreelanceHub is a modern full-stack freelance marketplace built with **Next.js**, **React**, **TypeScript**, **Node.js**, **Express**, and **MongoDB**.

The application allows users to register, authenticate, create, browse, edit, and manage freelance projects through a modern, responsive interface.

---

# 🚀 Features

- JWT Authentication
- User Registration & Login
- Protected Routes
- User Profile
- Dashboard
- Create Projects
- Edit Projects
- Delete Projects
- Project Details
- Search Projects
- Pagination
- Favorite Projects
- Image Upload (Cloudinary)
- Dark / Light Theme
- Responsive Design
- Form Validation (Zod)
- React Hook Form
- TanStack Query
- REST API
- Backend Validation
- Helmet Security
- Rate Limiting
- Request Logging (Morgan)
- Docker Support
- Clean UI with Tailwind CSS

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

## Backend

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- JWT Authentication
- Zod
- Multer
- Cloudinary
- Helmet
- Morgan
- Express Rate Limit
- Docker

---

# 📁 Project Structure

```text
frontend/
│
├── app/
├── shared/
│   ├── api/
│   ├── hooks/
│   ├── providers/
│   ├── ui/
│   └── validation/
├── widgets/
├── public/
└── ...

backend/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── dto/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── types/
│   ├── utils/
│   ├── validation/
│   ├── app.ts
│   └── server.ts
├── Dockerfile
└── .dockerignore
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/RomanFrontEndDeveloper/FreelanceHub.git
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Runs on:

```text
http://localhost:3000
```

---

## Backend

```bash
cd backend

npm install

npm run dev
```

Runs on:

```text
http://localhost:5000
```

---

# 🐳 Docker

## Build Docker Image

```bash
cd backend

docker build -t freelancehub-backend .
```

## Run Docker Container

```bash
docker run --env-file .env -p 5000:5000 freelancehub-backend
```

---

# 🔐 Environment Variables

## Backend

Create `.env`

```env
PORT=5000

MONGO_URI=

JWT_SECRET=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=
```

---

## Frontend

Create `.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

# 📸 Main Features

## Authentication

- Register
- Login
- JWT Authentication
- Protected Routes

## Projects

- Create Project
- Edit Project
- Delete Project
- Project Details
- Search
- Pagination
- Favorites
- Image Upload

## User

- Dashboard
- Profile
- Dark / Light Theme

---

# 📦 REST API

## Authentication

```http
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/profile
```

## Projects

```http
GET     /api/projects
GET     /api/projects/:id
POST    /api/projects
PATCH   /api/projects/:id
DELETE  /api/projects/:id
```

## Favorites

```http
GET     /api/favorites
POST    /api/favorites/:projectId
DELETE  /api/favorites/:projectId
```

---

# 📈 Current Status

- ✅ JWT Authentication
- ✅ Registration & Login
- ✅ Protected Routes
- ✅ User Profile
- ✅ Dashboard
- ✅ CRUD Projects
- ✅ Project Details
- ✅ Search
- ✅ Pagination
- ✅ Favorites
- ✅ Image Upload
- ✅ Backend Validation
- ✅ Helmet Security
- ✅ Rate Limiting
- ✅ Request Logging (Morgan)
- ✅ Docker Support
- ✅ Responsive UI
- ✅ Dark / Light Theme

---

### 🚧 In Progress

- Render Deployment
- Vercel Deployment
- Toast Notifications
- Framer Motion Animations
- Performance Optimization
- SEO Improvements
- CI/CD

---

# 👨‍💻 Author

**Roman Okhremov**

Frontend / Full-Stack Developer

## Tech Stack

- React
- Next.js
- TypeScript
- Node.js
- Express.js
- MongoDB
- Docker

## GitHub

https://github.com/RomanFrontEndDeveloper

## Portfolio

https://portfolio-react-roman-okhremov.netlify.app/

---

# 📄 License

This project was created for educational purposes and as a portfolio project.

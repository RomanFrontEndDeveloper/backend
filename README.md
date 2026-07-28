# FreelanceHub

FreelanceHub is a modern full-stack freelance marketplace built with **Next.js**, **React**, **TypeScript**, **Node.js**, **Express**, and **MongoDB**. The application allows users to register, authenticate, create, browse, edit, and manage freelance projects with a modern responsive interface.

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
- JWT
- Cloudinary
- Multer

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
```

---

# ⚙️ Installation

## Clone repository

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
- Image Upload

## User

- Dashboard
- Profile
- Favorites
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

- ✅ Authentication
- ✅ Registration
- ✅ Protected Routes
- ✅ User Profile
- ✅ Dashboard
- ✅ CRUD Projects
- ✅ Project Details
- ✅ Search
- ✅ Pagination
- ✅ Favorites
- ✅ Image Upload
- ✅ Dark / Light Theme
- ✅ Responsive UI

### 🚧 In Progress

- Modals
- Toast Notifications
- Framer Motion Animations
- Performance Optimization
- SEO Improvements
- Docker
- Deployment
- CI/CD

---

# 👨‍💻 Author

**Roman Okhremov**

Frontend Developer

**Tech Stack**

- React
- Next.js
- TypeScript
- Node.js
- Express.js
- MongoDB

**GitHub**

https://github.com/RomanFrontEndDeveloper

---

# 📄 License

This project was created for educational purposes and as a portfolio project.

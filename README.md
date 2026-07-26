# FreelanceHub Backend

# FreelanceHub

FreelanceHub is a modern full-stack freelance marketplace built with **Next.js**, **React**, **TypeScript**, **Node.js**, and **MongoDB**. The application allows users to create, browse, edit, and manage freelance projects with secure authentication and a responsive user interface.

---

## 🚀 Features

- User authentication (JWT)
- User registration & login
- Protected routes
- User profile
- Create, edit and delete projects
- Project search
- Project filtering
- Pagination
- Project favorites
- Dashboard
- User/Admin roles
- Image upload (Cloudinary)
- Dark / Light theme
- Responsive design
- Form validation with Zod
- React Hook Form
- TanStack Query
- REST API
- Modern UI built with Tailwind CSS

---

## 🛠 Tech Stack

### Frontend

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod
- Axios
- TanStack Query

### Backend

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- JWT Authentication
- Cloudinary
- Multer

---

## 📁 Project Structure

```
frontend/
│
├── app/
├── shared/
├── widgets/
├── features/
├── entities/
└── public/

backend/
│
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── validators/
```

---

## ⚙️ Installation

### Clone repository

```bash
git clone https://github.com/your-username/FreelanceHub.git
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```
http://localhost:3000
```

---

### Backend

```bash
cd backend

npm install

npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

## 🔐 Environment Variables

### Backend

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

### Frontend

Create `.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

## 📸 Main Features

### Authentication

- Register
- Login
- JWT Authentication
- Protected Routes

### Projects

- Create Project
- Edit Project
- Delete Project
- Browse Projects
- Search
- Filter
- Pagination

### User

- Dashboard
- Profile
- Favorites
- Dark / Light Theme

---

## 📦 API

### Authentication

```
POST /api/auth/register

POST /api/auth/login

GET /api/auth/profile
```

### Projects

```
GET /api/projects

GET /api/projects/:id

POST /api/projects

PATCH /api/projects/:id

DELETE /api/projects/:id
```

### Favorites

```
GET /api/favorites

POST /api/favorites/:projectId

DELETE /api/favorites/:projectId
```

---

## 📈 Current Status

✅ Authentication

✅ CRUD Projects

✅ Dashboard

✅ Favorites

✅ Image Upload

✅ Pagination

✅ Search

✅ Filters

✅ Dark / Light Theme

🚧 SEO Improvements

🚧 Metadata API

🚧 Server Components

🚧 Docker

🚧 Deployment

---

## 👨‍💻 Author

**Roman Okhremov**

Frontend Developer

React • Next.js • TypeScript • Node.js

GitHub:
https://github.com/RomanFrontEndDeveloper

---

## 📄 License

This project is created for educational and portfolio purposes.

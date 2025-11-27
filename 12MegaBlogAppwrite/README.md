# 📝 Post Management Web App
*A full-stack CRUD application built using React, Tailwind CSS, Redux, and Appwrite.*

---

## 🚀 Overview
This project is a **Post Management Web App** that allows users to **add, edit, view, and delete posts**.  
It features **user authentication**, **protected routes**, and a **responsive interface** — all built using **React** on the frontend and **Appwrite** as the backend service.  

> ⚙️ This project currently runs locally (no live hosting). You can clone and run it on your system using the instructions below.

---

## 🧩 Features
- 🔐 User authentication (Login / Signup) using **Appwrite**
- ✍️ Add, edit, delete posts (CRUD functionality)
- 🚫 Protected routes using a custom `AuthLayout`
- 🧱 State management with **Redux**
- 🧭 Routing with **React Router**
- 🧾 Form handling and validation using **React Hook Form**
- 🎨 Responsive and reusable UI components with **Tailwind CSS**

---

## 🛠️ Tech Stack

| Category | Tools Used |
|-----------|-------------|
| **Frontend** | React, Tailwind CSS |
| **Backend (BaaS)** | Appwrite |
| **State Management** | Redux |
| **Routing** | React Router |
| **Forms** | React Hook Form |
| **Package Manager** | npm |

---

## ⚙️ Installation & Setup (Run Locally)

Follow these steps to run the project on your local machine:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/your-username/post-management-app.git

# 2️⃣ Navigate into the project folder
cd post-management-app

# 3️⃣ Install dependencies
npm install

# 4️⃣ Create a .env file in the root directory and add your Appwrite credentials
VITE_APPWRITE_URL=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id

# 5️⃣ Start the development server
npm run dev

# 📊 Teacher-Student Table App

A simple full-stack web app to display paginated tables of teachers and students using **React + Vite** for frontend and **pure Node.js** for backend — all served from a single server.

---

## 🚀 Tech Stack

- **Frontend:** React + Vite
- **Styling:** Tailwind CSS
- **Backend:** Node.js (no framework)
- **Deployment:** Single server (no proxy)

---

## 📁 Project Structure
```
Teacher-student-table/
├── dist/ # Vite build output
├── src/ # React components
├── server.js # Node.js backend server
├── vite.config.js # Vite configuration
```
---

## 🔧 Setup Instructions

1. Install dependencies  
   `npm install`

2. Build React app  
   `npm run build`

3. Start server  
   `node server.js`

Open: `http://localhost:3030`

---

## 🔗 API Endpoints

- `/api/students` → Returns student data  
- `/api/teachers` → Returns teacher data  
- `/` → Serves frontend (React app)

---

## ✅ Output

Paginated table view of teachers and students, with data fetched from the same Node.js server.

---

## ✍️ Author

**Shivam Waghmare**

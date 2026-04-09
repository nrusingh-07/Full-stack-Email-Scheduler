# Full-stack Email Scheduler 

This project is a production-style email scheduling system built  users create, schedule, and automatically send emails using a complete frontend, backend, and database setup.

---

## 🧱 Tech Stack:

### Backend
- TypeScript
- Express.js
- BullMQ
- Redis
- PostgreSQL
- Ethereal Email (SMTP testing)

### Frontend:
- React + TypeScript
- Tailwind CSS
- React Router

---

## 📂 Project Structure:

Fullstack email scheduler/
├── backend/
├── frontend/
└── README.md

---

## ⚙️ How to Run Backend

### 1. Start Redis & DB
cd backend  
docker compose up -d

### 2. Install dependencies
npm install

### 3. Environment variables (.env)
PORT=5000  
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/reachinbox  
REDIS_HOST=localhost  
REDIS_PORT=6379  

ETHEREAL_USER=your_ethereal_email  
ETHEREAL_PASS=your_ethereal_password  

MAX_EMAILS_PER_HOUR=200  
MIN_DELAY_BETWEEN_EMAILS_MS=2000  
WORKER_CONCURRENCY=5  

### 4. Run server
npm run dev

---

## 🎨 How to Run Frontend

cd frontend  
npm install  
npm run dev  

Frontend runs on:
http://localhost:5173

---

## ✉️ Email Scheduler Architecture

- Emails stored in PostgreSQL
- Scheduled using BullMQ delayed jobs
- Redis ensures persistence on restart
- Emails sent via Ethereal SMTP

---

## 🔁 Persistence on Restart

- Redis persists delayed jobs
- Server restart does NOT duplicate emails
- Future emails send correctly

---

## 🚦 Rate Limiting & Concurrency

- Worker concurrency configured via env
- Minimum delay between emails enforced
- Hourly rate limit enforced using Redis
- Jobs delayed to next hour when limit is exceeded

---

## 🖥 Frontend Features

- Google Login (OAuth)
- Dashboard
- Compose Email
- Scheduled Emails
- Sent Emails
- Loading & empty states

---

## 🎥 Demo Video

Demonstrates:
- Login
- Scheduling emails
- Scheduled → Sent flow
- Server restart persistence
- Rate limiting behavior

---

## ⚠️ Assumptions

- Ethereal email used for testing
- Single sender rate limiting
- Google OAuth requires env setup

---

## 👤 Author

Nrusingh prasad

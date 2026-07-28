# 🚀 InterviewIQ

> An AI-powered mock interview platform that analyzes resumes, generates personalized interview questions, evaluates responses, and provides detailed interview reports.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![NodeJS](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![Razorpay](https://img.shields.io/badge/Payments-Razorpay-blueviolet)
![OpenRouter](https://img.shields.io/badge/AI-OpenRouter-black)

---

## 📖 Overview

InterviewIQ is an AI-powered mock interview platform designed to help job seekers prepare for technical and HR interviews.

Users can upload their resume, automatically extract important information using AI, generate personalized interview questions, answer them in real time, and receive detailed AI-generated feedback with performance reports.

---

## ✨ Features

- 🔐 Secure Authentication
- 📄 Resume Upload (PDF)
- 🤖 AI Resume Analysis
- 🎯 Personalized Interview Questions
- 💬 Interactive Interview Sessions
- 📊 AI Performance Evaluation
- 📈 Detailed Interview Reports
- 🕒 Interview History
- 💳 Razorpay Credit Purchase
- 📱 Responsive UI

---

## 🛠 Tech Stack

### Frontend

- React 19
- Vite
- Tailwind CSS
- Redux Toolkit
- React Router
- Axios
- Recharts
- Motion

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- PDF.js
- OpenRouter API
- Razorpay

---

## 📂 Project Structure

```
InterviewIQ
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── services
│   └── package.json
│
└── README.md
```

---

## ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/PriyanshuXsingh/InterviewIQ.git
```

### Install Frontend

```bash
cd client
npm install
```

### Install Backend

```bash
cd ../server
npm install
```

---

## ▶ Start Development Server

### Backend

```bash
npm run dev
```

### Frontend

```bash
npm run dev
```

---

## 🤖 AI Workflow

```text
Resume Upload
       │
       ▼
PDF Text Extraction
       │
       ▼
OpenRouter AI
       │
       ▼
Extract Skills & Projects
       │
       ▼
Generate Interview Questions
       │
       ▼
User Answers Questions
       │
       ▼
AI Evaluation
       │
       ▼
Performance Report
```

---

## 📸 Screenshots

### Home

<img width="1712" height="837" alt="image" src="https://github.com/user-attachments/assets/3d9daf32-17ec-4c5c-8b9b-00e52deab557" />


---

### Interview

Add screenshot here

---

### Report

Add screenshot here

---

## 📡 API Endpoints

### Authentication

```
POST /api/auth/login
POST /api/auth/register
GET  /api/user/current-user
```

### Interview

```
POST /api/interview/resume
POST /api/interview/generate-questions
POST /api/interview/submit-answer
POST /api/interview/finish
GET  /api/interview/get-interview
GET  /api/interview/report/:id
```

### Payment

```
POST /api/payment/...
```

---

## 🎯 Future Improvements

- Voice-based interviews
- Webcam monitoring
- AI facial expression analysis
- Company-specific interview preparation
- Leaderboards
- Dark Mode
- Multi-language support

---

## 🤝 Contributing

Contributions are always welcome.

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push your branch
5. Create a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Priyanshu Singh**

GitHub: https://github.com/yourusername

LinkedIn: https://linkedin.com/in/yourprofile

---

⭐ If you like this project, don't forget to star the repository!

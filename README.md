# 🏥 **Healthcare Management System**
A comprehensive **Healthcare Management System** designed to streamline **patient care, hospital management**, and **telemedicine services** using **Node.js, MongoDB, React, and third-party APIs**.

---

## 🎯 **Project Overview**
This project is built for a **Hackathon** to showcase a scalable and secure **healthcare platform**. It enables **patients, doctors, and administrators** to manage medical records, appointments, and virtual consultations with ease.

---

## ✅ **Key Features**
- 📌 **User Management:** Secure **JWT-based authentication** and **role-based access control** (`Admin`, `Doctor`, `Patient`).  
- 📌 **Patient Management:** CRUD operations for patient records, including **medical history** and **contact information**.  
- 📌 **Doctor Management:** Manage doctor profiles, specializations, and availability.  
- 📌 **Appointment Scheduling:** Book, reschedule, and cancel appointments with **real-time availability**.  
- 📌 **Telemedicine:** Secure **video calls** for remote consultations using **Jitsi Meet API**.  
- 📌 **Billing & Payments:** Integrated with **Stripe API** for secure billing and payments.  
- 📌 **Health Records:** Integrated with **FHIR API** to access and manage **electronic health records (EHR)**.  
- 📌 **Notifications:** Send **SMS, Email, and Push Notifications** using **SendGrid** and **Firebase Cloud Messaging (FCM)**.  
- 📌 **Nearby Hospital Locator:** Fetch nearby hospitals using **Google Maps API**.  

---

## 🏗️ **Project Architecture**
- **Frontend:** React.js (Vite), Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ORM)  
- **APIs Used:** Google Maps API, FHIR API, Stripe, SendGrid, Jitsi Meet  
- **Security:** JWT, Role-Based Access Control (RBAC)  
- **Deployment:** Docker, Vercel (Frontend), Render (Backend)  

---

## 📂 **Project Structure**
```
/healthcare-system
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middlewares
│   ├── services
│   └── server.js
├── frontend
│   ├── src
│   └── public
├── docs
│   ├── architecture.md
│   ├── api_endpoints.md
│   └── user_manual.md
├── README.md
├── LICENSE
├── .env
├── .gitignore
└── package.json
```

---

## 🚀 **Setup Instructions (For Judges & Developers)**

### **Prerequisites:**
- Node.js `>=16.x`
- MongoDB Atlas (or local instance)
- Stripe, SendGrid, Firebase, and Jitsi API keys.

---

### **Backend Setup:**
```bash
cd backend
npm install
npm run dev
```

### **Frontend Setup:**
```bash
cd frontend
npm install
npm run dev
```

### **Environment Variables (`.env`):**
```plaintext
# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/healthcare

# JWT Secret
JWT_SECRET=supersecretkey

# API Keys
STRIPE_SECRET_KEY=your_stripe_secret_key
VONAGE_API_KEY=your_vonage_api_key
SENDGRID_API_KEY=your_sendgrid_api_key
FHIR_SERVER_URL=https://fhir-server-url.com
```

---

### 🎯 **Running the Application (Local Development)**
- **Frontend:** Runs on `http://localhost:3000`  
- **Backend:** Runs on `http://localhost:5000`  

---

## 📡 **API Endpoints (Quick Reference)**

### **User Management:**
- `POST /api/users/register` – Register a new user.  
- `POST /api/users/login` – Authenticate and receive a JWT token.  

### **Patient Management:**
- `POST /api/patients` – Create a new patient record.  
- `GET /api/patients` – Fetch all patient records.  

### **Doctor Management:**
- `POST /api/doctors` – Add a doctor profile.  
- `GET /api/doctors` – Fetch all doctors.  

### **Appointments:**
- `POST /api/appointments` – Book an appointment.  
- `GET /api/appointments` – Fetch all appointments.  

---

## 🛡️ **Security Measures**
- **JWT-based Authentication.**  
- **Role-Based Access Control (RBAC)** for **Admin, Doctor, Patient**.  
- **Sensitive Data Protection** using `.env` for API keys.  
- **HTTPS Enforcement** for data encryption.  

---

## 📦 **Key Libraries and Tools Used:**
- **Frontend:** `React.js`, `Vite`, `Tailwind CSS`  
- **Backend:** `Node.js`, `Express.js`, `Mongoose`  
- **Database:** `MongoDB Atlas`  
- **APIs:** `Google Maps`, `Jitsi Meet`, `Stripe`, `SendGrid`, `FHIR API`  

---

## 📸 **Screenshots (Add for Judges Reference)**
Include screenshots or GIFs showcasing:  
- **Login Screen**  
- **Dashboard**  
- **Video Call Interface**  
- **Appointment Booking Page**  

---

## 🧪 **Testing Instructions:**
- **Unit Tests:** Use `Jest` and `Supertest` for API testing.  
- **Test Command:** `npm run test`  

---

## 🌍 **Deployment:**
- **Frontend:** Hosted on **Vercel**  
- **Backend:** Hosted on **Render**  
- **Database:** MongoDB Atlas Cloud  

---

## 🏆 **Why This Project Stands Out? (For Hackathon Judges)**
- ✅ **Comprehensive Healthcare Management Solution.**  
- ✅ **Free Video Calls Integration with Jitsi Meet.**  
- ✅ **Secure Payment Gateway with Stripe.**  
- ✅ **Real-time Notifications via Firebase & SendGrid.**  
- ✅ **Clean Codebase & Modular Architecture.**  

---

## 📃 **Contributing**
We welcome contributions!  
- Fork the repository  
- Create a feature branch: `git checkout -b feature/feature-name`  
- Commit your changes: `git commit -m "Add feature"`  
- Push to the branch: `git push origin feature/feature-name`  
- Open a Pull Request (PR)  

---

## 📄 **License:**
This project is licensed under the **MIT License** – free to use and modify.  

---

## 🎯 **Acknowledgements:**
- **Hackathon Team:** [Your Team Name]  
- **APIs Used:** Google Maps API, Jitsi Meet, Stripe, SendGrid, FHIR API  
- **Tools:** Node.js, React, MongoDB  

---

### 🚀 **Built with ❤️ for [Hackathon Name]** 🚀  

---
 

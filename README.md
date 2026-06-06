# 🎬 CineVerse – AI Powered Movie Discovery Platform

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![Express](https://img.shields.io/badge/Express.js-API-black?logo=express)
![Gemini AI](https://img.shields.io/badge/Gemini-AI-orange)
![TMDB](https://img.shields.io/badge/TMDB-Movie%20API-blue)

A modern **AI-powered movie discovery platform** that helps users discover movies based on their preferences using **Google Gemini AI** and **TMDB API**. The platform provides personalized recommendations, detailed movie information, trailers, authentication, and a Netflix-inspired user experience.

---

## 🚀 Features

### 🎥 Movie Discovery

* Browse Trending Movies
* Popular Movies
* Top Rated Movies
* Upcoming Movies
* Detailed Movie Information
* Movie Posters & Backdrops
* Similar Movie Recommendations

### 🤖 AI Movie Recommendations

* Multi-step preference questionnaire
* Personalized recommendations using Gemini AI
* Genre-based suggestions
* Mood-based recommendations
* Language preferences
* Decade preferences
* Runtime preferences
* Smart fallback recommendations when AI API fails

### 🔐 Authentication

* User Registration
* User Login
* JWT Authentication
* Secure HTTP-only Cookies
* Persistent User Sessions
* Logout Functionality

### 🎬 Movie Details

* Movie Overview
* Ratings & Reviews
* Release Date
* Runtime
* Genres
* Production Companies
* Countries
* Spoken Languages
* Embedded Trailer Support

### ⭐ Upcoming Features

* Favorites / Watchlist
* Watch History
* AI Movie Chat Assistant
* Admin Dashboard
* User Profiles
* Theme Switching
* Movie Reviews

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Tailwind CSS
* React Router
* Zustand
* Axios
* Swiper.js
* Lucide React
* React Hot Toast

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* Cookie Parser
* CORS

## APIs

### TMDB API

Used for:

* Movie Data
* Movie Posters
* Backdrops
* Trailers
* Recommendations
* Search Functionality

### Gemini AI API

Used for:

* Personalized Movie Recommendations
* AI-based Movie Discovery
* Dynamic Recommendation Generation

---

# 📂 Project Structure

```bash
CineVerse/
│
├── Backend/
│   ├── config/
│   │   └── database.js
│   │
│   ├── controllers/
│   │   └── Auth.controller.js
│   │
│   ├── middleware/
│   │   └── auth.middleware.js
│   │
│   ├── models/
│   │   └── User.model.js
│   │
│   ├── routes/
│   │   └── auth.routes.js
│   │
│   ├── src/
│   │   └── app.js
│   │
│   ├── server.js
│   └── .env
│
├── Frontend/
│   ├── src/
│   │
│   │── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── CardList.jsx
│   │   ├── Footer.jsx
│   │   └── RecommendedMovies.jsx
│   │
│   │── pages/
│   │   ├── Homepage.jsx
│   │   ├── Moviepage.jsx
│   │   ├── SignIn.jsx
│   │   ├── SignUp.jsx
│   │   └── AIRecommendations.jsx
│   │
│   │── store/
│   │   └── authStore.js
│   │
│   │── lib/
│   │   └── AIModel.js
│   │
│   │── App.jsx
│   │── main.jsx
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/cineverse.git
```

```bash
cd cineverse
```

---

## Backend Setup

```bash
cd Backend
npm install
```

Create `.env`

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:5173
```

Run backend:

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd Frontend
npm install
```

Create `.env`

```env
VITE_GOOGLE_GENAI_API_KEY=your_gemini_api_key

VITE_TMDB_TOKEN=your_tmdb_access_token
```

Run frontend:

```bash
npm run dev
```

---

# 🔑 Environment Variables

### Backend

```env
PORT=
MONGO_URI=
JWT_SECRET=
CLIENT_URL=
```

### Frontend

```env
VITE_GOOGLE_GENAI_API_KEY=
VITE_TMDB_TOKEN=
```

---

# 🤖 AI Recommendation Flow

```text
User Preferences
       │
       ▼
Generate AI Prompt
       │
       ▼
Gemini AI API
       │
       ▼
Movie Titles Returned
       │
       ▼
TMDB API Search
       │
       ▼
Movie Posters & Details
       │
       ▼
Personalized Recommendations
```

### Fallback System

```text
Gemini AI Request
       │
       ▼
Success
       │
       └──► Show AI Recommendations

Failure (Quota Limit / Error)
       │
       ▼
Fallback Recommendations
       │
       ▼
User Still Receives Suggestions
```

---

# 🎯 Future Enhancements

* Favorites Feature
* Watch History
* AI Movie Assistant Chat
* Movie Reviews
* Social Sharing
* Admin Dashboard
* Infinite Scrolling
* Advanced Search Filters
* Dark/Light Theme
* User Profiles

---

# 📸 Screenshots

### Home Page

*Add Screenshot Here*

### AI Recommendation Page

*Add Screenshot Here*

### Movie Details Page

*Add Screenshot Here*

### Authentication

*Add Screenshot Here*

---

# 👨‍💻 Author

**Vishakha Shete**

* B.Tech Computer Science Engineer
* Full Stack Developer
* AI Enthusiast

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

---

**Built with ❤️ using React, Node.js, MongoDB, Gemini AI, and TMDB API.** 🚀

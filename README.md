# Smart Ride Sharing (SMR) Platform

A modern web application for ride sharing, built with React, TypeScript, and Material-UI.

## Features

- User authentication and profile management
- Ride search and booking
- Real-time ride tracking
- Payment integration
- Driver and passenger matching
- Rating and review system

## Tech Stack

- Frontend:
  - React
  - TypeScript
  - Material-UI
  - React Router
  - Socket.IO Client

- Backend:
  - Node.js
  - Express
  - MongoDB
  - Socket.IO
  - JWT Authentication

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/smr.git
cd smr
```

2. Install dependencies:
```bash
npm run install-all
```

3. Create a `.env` file in the server directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/smr
JWT_SECRET=your_jwt_secret_key_here
CLIENT_URL=http://localhost:3000
```

4. Start the development servers:
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Project Structure

```
smr/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── App.tsx       # Main application component
│   │   └── index.tsx     # Application entry point
│   └── package.json
├── server/                # Backend Node.js application
│   ├── src/
│   │   ├── routes/       # API routes
│   │   ├── models/       # Database models
│   │   ├── controllers/  # Route controllers
│   │   └── index.ts      # Server entry point
│   └── package.json
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 
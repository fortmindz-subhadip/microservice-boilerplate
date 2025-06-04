# 🧩 Microservices Architecture with API Gateway

This project demonstrates a microservices architecture using:
- Node.js (Express.js)
- MongoDB (per service)
- Docker + Docker Compose
- API Gateway for routing requests

## 📦 Project Structure

```
microservice/
│
├── api-gateway/         # API Gateway service
├── user-service/        # User management microservice
├── email-service/       # Email microservice
├── docker-compose.yml   # Orchestrates all services
└── README.md            # Project documentation
```

---

## 🚀 Getting Started (Local Development)

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/microservice.git
cd microservice
```

---

### 2. Project Structure & Port Map

| Service        | Port (Local) | Docker Internal | Mongo Port |
|----------------|--------------|------------------|-------------|
| API Gateway    | 5000         | 5000             | -           |
| User Service   | 3000         | 3000             | 27017       |
| Email Service  | 4000         | 4000             | 27018       |
| Mongo (User)   | 27017        | 27017            | 27017       |
| Mongo (Email)  | 27018        | 27017            | 27017       |

---

### 3. Set Environment Variables

Create `.env` files inside each service folder (`user-service`, `email-service`, `api-gateway`) with content like:

#### `user-service/.env`
```
PORT=3000
MONGO_URI=mongodb://user-mongo:27017/user-service-db
```

#### `email-service/.env`
```
PORT=4000
MONGO_URI=mongodb://email-mongo:27017/email-service-db
```

#### `api-gateway/.env`
```
PORT=5000
```

---

### 4. Run the App

```bash
docker-compose up --build
```

🟢 After all services start, access:

- API Gateway: [http://localhost:5000](http://localhost:5000)
- Health Check: [http://localhost:5000/health](http://localhost:5000/health)
- User API Proxy: `GET http://localhost:5000/user/...`
- Email API Proxy: `GET http://localhost:5000/email/...`

---

## 🐳 Docker Image Push (Optional)

To push images to Docker Hub:

```bash
# Build
docker build -t fortmindzsubhadip/microservice:user-service ./user-service
docker build -t fortmindzsubhadip/microservice:email-service ./email-service
docker build -t fortmindzsubhadip/microservice:api-gateway ./api-gateway

# Push
docker push fortmindzsubhadip/microservice:user-service
docker push fortmindzsubhadip/microservice:email-service
docker push fortmindzsubhadip/microservice:api-gateway
```

---

## ✅ API Health Test

```bash
curl http://localhost:5000/health
# Response: {"status":"API Gateway is healthy"}
```

---

## ⚙️ Tech Stack

- Node.js + Express
- MongoDB (separate DB per service)
- Docker / Docker Compose
- http-proxy-middleware (API Gateway)
- nodemon for local dev

---

## 🤝 Contributing

Feel free to fork and contribute! PRs welcome.

---

## 📝 License

MIT

# Simple Payment Service Demo

This is a beginner-friendly full-stack Python project to understand how a large Python application can be organized.

## Tech Stack

- Frontend: React + Vite
- Backend: Python FastAPI
- Database: SQLite
- ORM: SQLAlchemy
- API: REST

## Project Structure

```text
payment-service-demo/
├── backend/
│   ├── app/
│   │   ├── api/              # API routes
│   │   ├── services/         # Business logic
│   │   ├── repositories/     # Database queries
│   │   ├── models/           # Database tables
│   │   ├── schemas/          # Request/response validation
│   │   ├── utils/            # Helper functions
│   │   ├── database.py       # Database connection
│   │   └── main.py           # FastAPI app entry point
│   └── tests/                # Unit tests
│
└── frontend/
    └── src/
        ├── api/              # API calls to backend
        ├── components/       # React components
        └── App.jsx
```

## How the App Works

1. User enters payment details in the React frontend.
2. Frontend sends a POST request to the FastAPI backend.
3. API route receives the request.
4. Service layer applies business logic.
5. Repository layer saves the payment in SQLite.
6. Frontend reloads payment history.

## Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate   # Mac/Linux
# venv\Scripts\activate    # Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend runs at:

```text
http://localhost:8000
```

Swagger API docs:

```text
http://localhost:8000/docs
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

## API Endpoints

### Create Payment

```http
POST /payments/
```

Sample request:

```json
{
  "sender": "Harsh",
  "receiver": "Alex",
  "amount": 100,
  "idempotency_key": "unique-key-123"
}
```

### List Payments

```http
GET /payments/
```

## Concepts Covered

- Clean backend folder structure
- API layer vs service layer vs repository layer
- Database models using SQLAlchemy
- Request validation using Pydantic
- Idempotency key to prevent duplicate transactions
- Simple fraud rule
- React frontend calling backend APIs
- Unit testing business logic

## Interview Explanation

This project separates responsibilities clearly. The API layer handles HTTP requests, the service layer contains payment business rules, and the repository layer handles database operations. This makes the application easier to test, maintain, and scale.

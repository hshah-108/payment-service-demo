from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import Base, engine
from app.api.payment_routes import router as payment_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Simple Payment Service API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(payment_router)

@app.get("/")
def health_check():
    return {"message": "Payment Service API is running"}

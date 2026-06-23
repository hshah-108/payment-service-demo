from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.repositories.payment_repository import PaymentRepository
from app.schemas.payment_schema import PaymentCreate, PaymentResponse
from app.services.payment_service import PaymentService

router = APIRouter(prefix="/payments", tags=["Payments"])

@router.post("/", response_model=PaymentResponse)
def create_payment(payment: PaymentCreate, db: Session = Depends(get_db)):
    repository = PaymentRepository(db)
    service = PaymentService(repository)
    return service.process_payment(payment)

@router.get("/", response_model=list[PaymentResponse])
def list_payments(db: Session = Depends(get_db)):
    repository = PaymentRepository(db)
    service = PaymentService(repository)
    return service.get_payments()

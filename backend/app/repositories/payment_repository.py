from sqlalchemy.orm import Session
from app.models.payment import Payment
from app.schemas.payment_schema import PaymentCreate

class PaymentRepository:
    def __init__(self, db: Session):
        self.db = db

    def find_by_idempotency_key(self, key: str):
        return self.db.query(Payment).filter(Payment.idempotency_key == key).first()

    def create(self, payment_data: PaymentCreate, status: str):
        payment = Payment(**payment_data.model_dump(), status=status)
        self.db.add(payment)
        self.db.commit()
        self.db.refresh(payment)
        return payment

    def list_all(self):
        return self.db.query(Payment).order_by(Payment.created_at.desc()).all()

from app.repositories.payment_repository import PaymentRepository
from app.schemas.payment_schema import PaymentCreate

class PaymentService:
    def __init__(self, repository: PaymentRepository):
        self.repository = repository

    def process_payment(self, payment_data: PaymentCreate):
        # Idempotency prevents duplicate payments if the same request is retried.
        existing_payment = self.repository.find_by_idempotency_key(payment_data.idempotency_key)
        if existing_payment:
            return existing_payment

        # Simple fraud rule for demo purposes.
        status = "REJECTED" if payment_data.amount > 5000 else "SUCCESS"
        return self.repository.create(payment_data, status)

    def get_payments(self):
        return self.repository.list_all()

from app.schemas.payment_schema import PaymentCreate
from app.services.payment_service import PaymentService

class FakeRepository:
    def __init__(self):
        self.saved = None

    def find_by_idempotency_key(self, key):
        return None

    def create(self, payment_data, status):
        self.saved = payment_data
        return {"amount": payment_data.amount, "status": status}

    def list_all(self):
        return []

def test_large_payment_is_rejected():
    service = PaymentService(FakeRepository())
    payment = PaymentCreate(sender="Harsh", receiver="Alex", amount=6000, idempotency_key="abc123")
    result = service.process_payment(payment)
    assert result["status"] == "REJECTED"

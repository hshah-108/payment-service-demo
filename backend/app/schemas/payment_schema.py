from pydantic import BaseModel, Field
from datetime import datetime

class PaymentCreate(BaseModel):
    sender: str = Field(..., min_length=2)
    receiver: str = Field(..., min_length=2)
    amount: float = Field(..., gt=0)
    idempotency_key: str = Field(..., min_length=6)

class PaymentResponse(BaseModel):
    id: int
    sender: str
    receiver: str
    amount: float
    status: str
    idempotency_key: str
    created_at: datetime

    class Config:
        from_attributes = True

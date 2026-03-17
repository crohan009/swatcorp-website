from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from datetime import datetime, timezone
from dotenv import load_dotenv
import os
import motor.motor_asyncio

load_dotenv()

app = FastAPI(title="SWAT Corp API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MONGO_URL = os.environ.get("MONGO_URL")
DB_NAME = os.environ.get("DB_NAME")
CONTACT_EMAIL = os.environ.get("CONTACT_EMAIL", "crohan@swat-corp.com")

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str

class ContactResponse(BaseModel):
    success: bool
    message: str
    id: str | None = None

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now(timezone.utc).isoformat()}

@app.post("/api/contact", response_model=ContactResponse)
async def submit_contact(form: ContactForm):
    try:
        contact_doc = {
            "name": form.name,
            "email": form.email,
            "message": form.message,
            "to_email": CONTACT_EMAIL,
            "created_at": datetime.now(timezone.utc).isoformat(),
            "status": "pending"
        }
        result = await db.contacts.insert_one(contact_doc)
        return ContactResponse(
            success=True,
            message="Thank you for reaching out! We'll get back to you soon.",
            id=str(result.inserted_id)
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/contacts")
async def get_contacts():
    contacts = []
    cursor = db.contacts.find({}, {"_id": 0})
    async for contact in cursor:
        contacts.append(contact)
    return {"contacts": contacts}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)

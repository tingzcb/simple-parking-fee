
## 2. **Technical Design Document**

Purpose: Explain **how the system is structured** (architecture).

**Sections to include:**

* **System Architecture Diagram** – Boxes & arrows (frontend, API, DB).
* **Database Design** – ER diagrams, tables, relationships.
* **APIs** – Endpoints, request/response formats.
* **Data Flow** – How data moves through the system.
* **Security & Backup** (if needed).

*Mini Example*:

```
# Booking API (POST /bookings)
Request:
{
  "userId": 123,
  "startTime": "2025-07-24T10:00",
  "endTime": "2025-07-24T15:00"
}
Response:
{
  "bookingId": 456,
  "price": 50.00
}
```

---
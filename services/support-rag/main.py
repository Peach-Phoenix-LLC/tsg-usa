from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="tsgabrielle-support-rag")

class SupportQuery(BaseModel):
    user_id: str
    question: str
    order_id: str | None = None

@app.post('/support/resolve')
def resolve(query: SupportQuery):
    return {
        'agent': 'hallucination-free-support-policy',
        'grounding_sources': ['orders_db', 'policy_kb', 'returns_workflow'],
        'answer': 'Grounded response placeholder. Escalate emotional/complex cases to human inbox.'
    }

@app.get('/healthz')
def healthcheck():
    return {'status': 'ok'}

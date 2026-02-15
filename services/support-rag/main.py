from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="tsgabrielle-support-rag")


class SupportQuery(BaseModel):
    user_id: str
    question: str
    order_id: str | None = None
    emotional_signal: bool = False


@app.post('/api/agents/support/resolve')
def resolve(query: SupportQuery):
    if query.emotional_signal:
        return {
            'agent': 'hallucination-free-support-policy',
            'resolution': 'escalated',
            'escalation_target': 'human-inbox@tsgabrielle.com'
        }

    return {
        'agent': 'hallucination-free-support-policy',
        'resolution': 'grounded-l1',
        'grounding_sources': ['orders_db', 'policy_kb', 'returns_workflow'],
        'answer': 'Grounded response placeholder from verified retrieval context.'
    }


@app.get('/healthz')
def healthcheck():
    return {'status': 'ok'}

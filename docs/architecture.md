# tsgabrielle 2026 MACH Commerce Architecture

## MACH Topology
- **Microservices**: Next.js storefront + Node.js agent orchestrator + Python RAG support service.
- **API-first**: Shopify Storefront GraphQL and internal agent APIs.
- **Cloud-native**: Docker image deployed on Google Cloud Run.
- **Headless**: Presentation and commerce backend fully decoupled.

## Foundational Folder Structure
```txt
.
├── apps/
│   └── web/
│       ├── app/
│       │   └── api/agents/*      # proxy route handlers to orchestrator
│       ├── components/
│       ├── lib/
│       │   ├── agents/client.ts
│       │   ├── personalization/
│       │   └── shopify/client.ts
│       └── package.json
├── services/
│   ├── agent-orchestrator/
│   │   └── src/{app.js,index.js}
│   └── support-rag/
│       └── main.py
├── config/
│   └── prompts/support-agent-system-prompt.md
├── Dockerfile
├── cloudrun.yaml
└── package.json
```

## API Route Structure (Vertex-AI-ready)
- `POST /api/agents/concierge/plan`
- `POST /api/agents/merchandising/reorder`
- `POST /api/agents/cro/intervene`
- `POST /api/agents/checkout/orchestrate`
- `POST /api/agents/support/resolve`

## Agent Behaviors Implemented in Scaffold
- **Autonomous Shopping Concierge**: rich-media assistant accepts intent + inspiration image.
- **Dynamic Merchandising Agent**: product grid re-ordering hook with affinity-aware promotion path.
- **Proactive CRO Agent**: exit-intent and hesitation triggers for in-flow interventions.
- **Checkout & Loyalty Orchestrator**: 1-click checkout orchestration call path.
- **Hallucination-Free Support Agent**: strict guardrail prompt + grounded RAG microservice.

## Core Bootstrap Entry Points
- Frontend shell bootstrap: `apps/web/app/layout.tsx`
- Frontend homepage bootstrap: `apps/web/app/page.tsx`
- Node orchestrator runtime: `services/agent-orchestrator/src/index.js`
- Python support runtime: `services/support-rag/main.py`


## Admin Operations Panel
- Route: `/admin`
- API: `GET/PUT /api/admin/settings`
- Exposes runtime configuration controls for rate limits, timeouts, sync intervals, DB pooling, webhook endpoints, RBAC toggles, and cache behavior.

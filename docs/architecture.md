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
│       ├── components/
│       ├── lib/
│       └── package.json
├── services/
│   ├── agent-orchestrator/
│   │   └── src/index.js
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

## Core Bootstrap Entry Points
- Frontend shell bootstrap: `apps/web/app/layout.tsx`
- Frontend homepage bootstrap: `apps/web/app/page.tsx`
- Node orchestrator runtime: `services/agent-orchestrator/src/index.js`
- Python support runtime: `services/support-rag/main.py`

## UI/UX Notes
- Sticky mega-menu with multimodal search (voice/text/image upload hooks).
- Dynamic hero and predictive product sorting hooks wired to agent APIs.
- Distinct luxury streetwear route style for `Pink Flamingo Noir`.
- WCAG support includes a contrast-ratio utility and light/dark mode.
- Peaches loyalty dashboard + accelerated checkout placeholders.

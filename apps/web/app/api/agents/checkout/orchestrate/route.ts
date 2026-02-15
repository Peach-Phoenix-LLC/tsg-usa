import { forwardToOrchestrator } from '../../proxy';

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return forwardToOrchestrator('/api/agents/checkout/orchestrate', body);
}

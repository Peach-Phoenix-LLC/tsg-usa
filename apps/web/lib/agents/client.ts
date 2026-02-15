interface ConciergePayload {
  intent: string;
  inspirationImage?: string;
}

async function postJSON<T>(endpoint: string, payload: unknown): Promise<T> {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Agent request failed (${response.status})`);
  }

  return response.json() as Promise<T>;
}

export function requestConciergePlan(payload: ConciergePayload) {
  return postJSON('/api/agents/concierge/plan', payload);
}

export function requestMerchandisingReorder(payload: Record<string, unknown>) {
  return postJSON('/api/agents/merchandising/reorder', payload);
}

export function requestCroIntervention(payload: Record<string, unknown>) {
  return postJSON('/api/agents/cro/intervene', payload);
}

export function requestCheckoutOrchestration(payload: Record<string, unknown>) {
  return postJSON('/api/agents/checkout/orchestrate', payload);
}

export function requestSupportResolution(payload: Record<string, unknown>) {
  return postJSON('/api/agents/support/resolve', payload);
}

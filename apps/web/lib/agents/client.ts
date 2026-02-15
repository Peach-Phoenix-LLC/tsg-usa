export async function requestConciergePlan(intent: string) {
  return fetch('/api/agents/concierge/plan', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ intent })
  });
}

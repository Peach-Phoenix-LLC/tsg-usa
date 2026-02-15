import { NextResponse } from 'next/server';

export async function forwardToOrchestrator(path: string, payload: unknown) {
  const baseUrl = process.env.AGENT_ORCHESTRATOR_URL ?? 'http://localhost:8080';

  try {
    const response = await fetch(`${baseUrl}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      cache: 'no-store'
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch {
    return NextResponse.json(
      { error: 'Agent orchestrator unavailable', path },
      { status: 503 }
    );
  }
}

import { createApp } from './app.js';

const vertexProxy = async (agent, payload) => ({
  agent,
  model: 'vertex-ai/gemini-2.5-pro',
  status: 'queued',
  payload
});

const app = createApp(vertexProxy);

app.listen(process.env.PORT ?? 8080, () => {
  console.log('agent orchestrator listening');
});

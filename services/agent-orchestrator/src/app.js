import express from 'express';
import cors from 'cors';

export function createApp(vertexProxy) {
  const app = express();
  app.use(cors());
  app.use(express.json({ limit: '5mb' }));

  app.post('/api/agents/concierge/plan', async (req, res) => {
    const result = await vertexProxy('autonomous-shopping-concierge', req.body);
    res.json({ ...result, capabilities: ['intent_to_look', 'multimodal_image_match', 'inventory_verification'] });
  });

  app.post('/api/agents/merchandising/reorder', async (req, res) => {
    const result = await vertexProxy('dynamic-merchandising', req.body);
    res.json({ ...result, actions: ['reorder-grid', 'promote-pink-flamingo-noir', 'deprioritize-low-affinity-categories'] });
  });

  app.post('/api/agents/cro/intervene', async (req, res) => {
    const result = await vertexProxy('proactive-cro', req.body);
    res.json({ ...result, interventions: ['discount-nudge', 'policy-clarification', 'social-proof-highlight'] });
  });

  app.post('/api/agents/checkout/orchestrate', async (req, res) => {
    const result = await vertexProxy('checkout-loyalty-orchestrator', req.body);
    res.json({ ...result, jobs: ['apply-tier-discount', 'calculate-peaches-points', 'fastest-shipping', 'one-click-session'] });
  });

  app.post('/api/agents/support/resolve', async (req, res) => {
    const result = await vertexProxy('support-policy-l1', req.body);
    res.json({ ...result, escalationPath: 'human-inbox@tsgabrielle.com' });
  });

  app.get('/healthz', (_, res) => res.send('ok'));

  return app;
}

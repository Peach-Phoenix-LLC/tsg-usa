import express from 'express';
import cors from 'cors';
import { z } from 'zod';

const baseSchema = z.object({
  userId: z.string().optional(),
  sessionId: z.string().optional()
});

const schemas = {
  '/api/agents/concierge/plan': baseSchema.extend({
    intent: z.string().min(6),
    inspirationImage: z.string().optional()
  }),
  '/api/agents/merchandising/reorder': baseSchema.extend({
    category: z.string().optional(),
    signal: z.string().optional()
  }),
  '/api/agents/cro/intervene': baseSchema.extend({
    signal: z.string(),
    dwellMs: z.number().optional()
  }),
  '/api/agents/checkout/orchestrate': baseSchema.extend({
    cartId: z.string(),
    paymentMethods: z.array(z.string()).default([])
  }),
  '/api/agents/support/resolve': baseSchema.extend({
    question: z.string().optional(),
    orderId: z.string().optional()
  })
};

export function createApp(vertexProxy) {
  const app = express();
  app.use(cors());
  app.use(express.json({ limit: '5mb' }));

  const handle = (path, agentName, responsePayload) => {
    app.post(path, async (req, res) => {
      const parseResult = schemas[path].safeParse(req.body ?? {});
      if (!parseResult.success) {
        return res.status(400).json({ error: 'Invalid payload', details: parseResult.error.flatten() });
      }

      try {
        const result = await vertexProxy(agentName, parseResult.data);
        return res.json({ ...result, ...responsePayload });
      } catch {
        return res.status(502).json({ error: 'Vertex upstream failure', agent: agentName });
      }
    });
  };

  handle('/api/agents/concierge/plan', 'autonomous-shopping-concierge', {
    capabilities: ['intent_to_look', 'multimodal_image_match', 'inventory_verification']
  });

  handle('/api/agents/merchandising/reorder', 'dynamic-merchandising', {
    actions: ['reorder-grid', 'promote-pink-flamingo-noir', 'deprioritize-low-affinity-categories']
  });

  handle('/api/agents/cro/intervene', 'proactive-cro', {
    interventions: ['discount-nudge', 'policy-clarification', 'social-proof-highlight']
  });

  handle('/api/agents/checkout/orchestrate', 'checkout-loyalty-orchestrator', {
    jobs: ['apply-tier-discount', 'calculate-peaches-points', 'fastest-shipping', 'one-click-session']
  });

  handle('/api/agents/support/resolve', 'support-policy-l1', {
    escalationPath: 'human-inbox@tsgabrielle.com'
  });

  app.get('/healthz', (_, res) => res.send('ok'));
  return app;
}
